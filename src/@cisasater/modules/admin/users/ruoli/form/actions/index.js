import { findItem } from 'helpers';
import {useModule} from 'hooks';
import {AMBITO_GRUPPO, TIPI_GRUPPO} from "@cisasater/data";

export const useActions = () => {
    const { formValues, submitValues } = useModule();

    const submit = async (values) => {
        const profilo = JSON.parse(values.profilo);
        const gruppo = values.gruppo ? JSON.parse(values.gruppo) : null;
        const nome = gruppo ? profilo.ruolo + ' ' + gruppo.nome : profilo.ruolo;
        const ambito = findItem(AMBITO_GRUPPO, 'id', gruppo?.ambito);
        const tipo = findItem(TIPI_GRUPPO, 'id', gruppo?.tipo)

        await submitValues({
            ...formValues,
            ruoli: [
                ...formValues.ruoli,
                {
                    profilo: {
                        id: profilo.id,
                        ruolo: nome,
                        order: profilo.order + ambito.order + tipo.order,
                        menu: ambito.menu,
                        layout: ambito.layout
                    },
                    gruppo,
                    nome,
                    ...formValues.istruttore ? {istruttore: {id: formValues.istruttore}} : {},
                    ...formValues.id ? {user: {id: formValues.id}} : {},
                }
            ]
        });
    };

    return {
        submit
    };
};