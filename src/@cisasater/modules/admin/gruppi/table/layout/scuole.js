import {isEmpty} from "lodash";

export const scuoleLayout = [
    {
        label: 'Nome',
        name: 'nome',
    },
    {
        label: 'Direttore',
        name: 'direttore',
        options: {
            customBodyRender: value => value && `${value.cognome} ${value.nome} - ${value.email}`
        },
    },
    {
        label: 'Vicedirettore',
        name: 'vicedirettore',
        options: {
            customBodyRender: value => !isEmpty(value) && value.map(v => `${v.cognome} ${v.nome} - ${v.email}`).join('\r\n')
        },
    },
    {
        label: 'Segretario',
        name: 'segretario',
        options: {
            customBodyRender: value => !isEmpty(value) && value.map(v => `${v.cognome} ${v.nome} - ${v.email}`).join('\r\n')
        },
    },
];