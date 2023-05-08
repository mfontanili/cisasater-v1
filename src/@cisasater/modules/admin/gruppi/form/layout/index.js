import {useModule, useRoute} from "hooks";

export const useLayout = () => {
    const { formValues, isNew } = useModule();
    const { name } = useRoute();

    const layout = [
        {
            type: 'group',
            col: formValues?.tipo === 'scuola' ? 8 : 12,
            items: [
                {
                    type: 'fields',
                    show: name === 'organi-tecnici',
                    items: [
                        { name: 'nome' },
                        { name: 'tipo', col: 6 },
                        { name: 'ambito', col: 6 }
                    ]
                },
                {
                    type: 'fields',
                    show: name === 'scuole',
                    items: [
                        { name: 'nome' },
                        { name: 'sezioni_cai' },
                        { name: 'tipo' },
                        { name: 'ambito' }
                    ]
                },
                {
                    type: 'table',
                    show: !isNew,
                    table: 'consiglio_direttivo',
                },
            ]
        },
        {
            type: 'table',
            show: formValues?.tipo === 'scuola',
            col: 4,
            table: 'organico_scuola'
        },
        {
            type: 'buttons',
            items: ['submit', 'back'],
        }
    ];

    return {
        layout
    };
};