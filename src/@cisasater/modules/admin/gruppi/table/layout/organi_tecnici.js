import {findItem} from "helpers";
import {AMBITO_GRUPPO, TIPI_GRUPPO} from "@cisasater/data";

export const orgniTecniciLayout = [
    {
        label: 'Nome',
        name: 'nome',
    },
    {
        label: 'Tipo',
        name: 'tipo',
        options: {
            customBodyRender: value => findItem(TIPI_GRUPPO, 'id', value).nome
        },
    },
    {
        label: 'Ambito',
        name: 'ambito',
        options: {
            customBodyRender: value => findItem(AMBITO_GRUPPO, 'id', value).nome
        },
    },
];