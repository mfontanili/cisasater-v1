import {findItem} from "helpers";
import {PROFILI, TIPI_GRUPPO} from "@cisasater/data";
import {useModule, useQuery} from "hooks";

export const useFields = () => {
    const { formValues: { ruoli } } = useModule();
    const { currentValues: { profilo }} = useModule('roles');
    const { data: [gruppi], isLoading } = useQuery('queryGruppiSin');

    const options = [
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
    ];

    const fields = {
        profilo: {
            type: 'select',
            label: 'Profilo',
            options: PROFILI.map(profilo => ({
                value: JSON.stringify(profilo),
                label: profilo.ruolo
            })),

        },
        gruppo: {
            type: 'select',
            label: 'Gruppo',
            options: options.reduce((filtered, option) => {
                const filteredOpts = option.items.reduce((items, item) => {
                    const option = JSON.parse(item.value);
                    const tipo = findItem(TIPI_GRUPPO, 'id', option.tipo);
                    const profile = profilo ? JSON.parse(profilo) : null;
                    if (tipo.profili.includes(profile?.id)) {
                        const disabled = ruoli.reduce((tot, ruolo) => {
                            const isProfilo = ruolo.profilo.id === profilo;
                            const isGruppo = ruolo.gruppo.id === option.id;
                            return tot || (isProfilo && isGruppo)
                        }, false);

                        items.push({
                            ...item,
                            disabled
                        })
                    }
                    return items
                }, []);

                if (filteredOpts.length > 0) {
                    filtered.push({
                        ...option,
                        items: filteredOpts
                    })
                }

                return filtered
            }, [])
        },
    };

    return {
        fields,
        isLoading
    };
};