import {findItem} from "helpers";
import {AMBITO_GRUPPO, PROFILI, TIPI_GRUPPO} from "@cisasater/data";

export const sortRuoli = (ruoloA, ruoloB) => {
    const userA = ruoloA.istruttore ? (ruoloA.istruttore.cognome + ' ' + ruoloA.istruttore.nome).toString() : ruoloA.user?.nome;
    const userB = ruoloB.istruttore ? (ruoloB.istruttore.cognome + ' ' + ruoloB.istruttore.nome).toString() : ruoloB.user?.nome;

    if (ruoloA.gruppo && ruoloB.gruppo) {
        const ambitoA = findItem(AMBITO_GRUPPO, 'id', ruoloA.gruppo.ambito);
        const ambitoB = findItem(AMBITO_GRUPPO, 'id', ruoloB.gruppo.ambito);

        const tipoA = findItem(TIPI_GRUPPO, 'id', ruoloA.gruppo.tipo);
        const tipoB = findItem(TIPI_GRUPPO, 'id', ruoloB.gruppo.tipo);

        if (ruoloA.profilo.id === 'responsabile' && ruoloB.profilo.id === 'responsabile') {
            if (ruoloA.gruppo.ambito !== ruoloB.gruppo.ambito) {
                return AMBITO_GRUPPO.indexOf(ambitoA) - AMBITO_GRUPPO.indexOf(ambitoB)
            } else {
                return userA.localeCompare(userB)
            }
        }

        if (ruoloA.profilo.id === 'responsabile') {
            return 1
        }

        if (ruoloB.profilo.id === 'responsabile') {
            return -1
        }

        if (ruoloA.gruppo.ambito !== ruoloB.gruppo.ambito) {
            return AMBITO_GRUPPO.indexOf(ambitoA) - AMBITO_GRUPPO.indexOf(ambitoB)
        }

        if (ruoloA.profilo.id !== ruoloB.profilo.id) {
            return PROFILI.indexOf(ruoloA.profilo) - PROFILI.indexOf(ruoloB.profilo)
        }

        if (ruoloA.gruppo.tipo !== ruoloB.gruppo.tipo) {
            return TIPI_GRUPPO.indexOf(tipoA) - TIPI_GRUPPO.indexOf(tipoB)
        }

        return userA.localeCompare(userB)
    } else {
        if (ruoloA.profilo.id !== ruoloB.profilo.id) {
            return PROFILI.indexOf(ruoloA.profilo) - PROFILI.indexOf(ruoloB.profilo)
        } else {
            return userA.localeCompare(userB)
        }
    }
}

export const sortScuole = (scuolaA, scuolaB) => {
    const ambitoA = findItem(AMBITO_GRUPPO, 'id', scuolaA.ambito);
    const ambitoB = findItem(AMBITO_GRUPPO, 'id', scuolaB.ambito);
    return AMBITO_GRUPPO.indexOf(ambitoA) - AMBITO_GRUPPO.indexOf(ambitoB)
}

export const getRoles = (ruoli = [], scuola = []) => {
    let arrayScuole = [...scuola];
    arrayScuole.sort(sortScuole);
    const scuole = arrayScuole.map(scuola => ({
        nome: `Istruttore ${scuola.nome}`,
        layout: 'frontend',
        menu: false,
        profilo: {
            id: 'istruttore',
            ruolo: 'Istruttore',
        },
        gruppo: scuola,
    }))

    let arrayRuoli = [...ruoli];
    arrayRuoli.sort(sortRuoli);
    const roles = arrayRuoli.map(ruolo => {
        const { id, profilo, istruttore, user, gruppo } = ruolo;
        if (!ruolo.gruppo) return {
            id,
            nome: profilo?.descrizione,
            layout: profilo?.layout,
            menu: true,
            profilo,
            gruppo: null,
            istruttore,
            user
        }

        const ambito = findItem(AMBITO_GRUPPO, 'id', gruppo.ambito);
        return {
            id,
            nome: profilo?.descrizione + ' ' + gruppo.nome,
            layout: ambito.layout,
            menu: ambito.menu,
            profilo,
            gruppo,
            istruttore,
            user
        }
    })

    return {
        ruoli: [...roles, ...scuole],
    }
}