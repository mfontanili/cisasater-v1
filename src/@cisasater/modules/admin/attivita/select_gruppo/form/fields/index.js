import {useQuery} from "hooks";

export const useFields = () => {
    const { data: [gruppi], isLoading } = useQuery('queryGruppi');

    const fields = {
        gruppo: {
            type: 'select',
            label: 'Gruppo organizzatore',
            options: [
                {
                    group: 'Organi Tecnici',
                    items: gruppi
                        .filter(gruppo => gruppo.ambito !== 'sezionale')
                        .map(gruppo => ({
                            value: JSON.stringify(gruppo),
                            label: gruppo.nome
                        }))
                },
                {
                    group: 'Scuole Sezionali',
                    items: gruppi
                        .filter(gruppo => gruppo.ambito === 'sezionale' && gruppo.tipo === 'scuola')
                        .map(gruppo => ({
                            value: JSON.stringify(gruppo),
                            label: gruppo.nome
                        }))
                }
            ]
        },
        submit: {
            label: 'Seleziona'
        }
    };

    return {
        fields,
        isLoading
    }
}