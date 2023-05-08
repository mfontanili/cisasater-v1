import {AMBITO_GRUPPO, SEZIONI_CAI, TIPI_GRUPPO} from '@cisasater/data';
import {setSelectOptions} from 'helpers';
import * as yup from 'yup';
import {useModule, useRoute} from "hooks";

export const useFields = () => {
    const { name } = useRoute();
    const { isNew } = useModule();

    const fields = {
        nome: {
            label: 'Nome',
            type: 'text',
            validation: yup.string().required('Inserisci il nome'),
        },
        sezioni_cai: {
            label: 'Sezioni CAI',
            type: 'select',
            multi: true,
            options: setSelectOptions(SEZIONI_CAI, 'nome')
        },
        ...name === 'organi-tecnici' ? {
            ambito: {
                label: 'Ambito',
                type: isNew ? 'select' : 'hidden',
                options: setSelectOptions(AMBITO_GRUPPO, 'id', 'nome')
            },
            tipo: {
                label: 'Tipo',
                type: isNew ? 'select' : 'hidden',
                options: setSelectOptions(TIPI_GRUPPO, 'id', 'nome')
            }
        } : {
            ambito: {
                type: 'hidden',
                value: 'sezionale'
            },
            tipo: {
                type: 'hidden',
                value: 'scuola'
            }
        }
    };

    return  {
        fields
    };
};