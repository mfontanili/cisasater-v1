import {useModule, useQuery} from "hooks";

export const useFields = () => {
    const {currentValues: { gruppo }} = useModule('attivita');
    const { data: [ data ] } = useQuery('getGruppiIstruttori', { id: gruppo });

    const fields = {
        responsabile: {
            type: 'select',
            label: 'Istruttore',
            options: data?.istruttori?.map(d => ({
                value: JSON.stringify(d),
                label: d.cognome + ' ' + d.nome + ' (' + d.titoli.join(', ') + ') - ' + d.scuola.at(0).nome
            }))
        }
    };

    return {
        fields
    }
}