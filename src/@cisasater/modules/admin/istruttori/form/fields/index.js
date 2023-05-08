import {SEZIONI_CAI, SPECIALITA, STATI_ISTRUTTORE, TITOLI} from '@cisasater/data';
import {setSelectOptions} from 'helpers';
import moment from 'moment/moment';
import * as yup from 'yup';
import {useModule, useQuery} from 'hooks';

const a = new Date().getFullYear();
let bollino = [];
for (let i = a - 4; i < a + 1; i++) {
	bollino.push(i.toString());
}

export const useFields = () => {
	const { data: [scuoleSez, scuoleReg], isLoading } = useQuery('queryScuoleSin');
	const { formValues: {scuola, altre_scuole, data_nascita} } = useModule();

	const fields = {
		id: {
			type: 'hidden',
		},
		cognome: {
			label: 'Cognome',
			type: 'text',
			validation: yup.string().required('Inserisci il cognome'),
		},
		nome: {
			label: 'Nome',
			type: 'text',
			validation: yup.string().required('Inserisci il nome'),
		},
		codice_fiscale: {
			label: 'Codice fiscale',
			type: 'text',
			validation: yup.string().required('Inserisci il codice fiscale'),
		},
		email: {
			label: 'Email',
			type: 'email',
			validation: yup
				.string()
				.required('Inserisci un indirizzo email')
				.email('Inserisci un indirizzo email valido'),
		},
		cellulare: {
			label: 'Cellulare',
			type: 'text',
		},
		data_nascita: {
			label: 'Data di nascita',
			type: 'date',
			...data_nascita && { value: moment(data_nascita, 'DD/MM/YYYY') },
		},
		scuola: {
			label: 'Scuola di appartenenza',
			type: 'select',
			options: scuoleSez?.map(scuola => ({
				value: JSON.stringify(scuola),
				label: scuola.nome
			})),
			validation: yup.string().required('Inserisci la scuola'),
			value: JSON.stringify(scuola?.at(0).gruppo)
		},
		altre_scuole: {
			label: 'Altre Scuole',
			type: 'select',
			multi: true,
			options: scuoleReg?.map(scuola => ({
				value: JSON.stringify(scuola),
				label: scuola.nome
			})),
			value: altre_scuole?.map(r => JSON.stringify(r.gruppo))
		},
		sezione_cai: {
			label: 'Sezione CAI',
			type: 'select',
			options: setSelectOptions(SEZIONI_CAI, 'nome'),
		},
		bollino: {
			label: 'Bollino',
			type: 'select',
			options: setSelectOptions(bollino),
		},
		titoli: {
			label: 'Titolo',
			type: 'select',
			multi: true,
			validation: yup.array().required('Inserisci il titolo'),
			options: setSelectOptions(TITOLI, 'nome'),
		},
		specialita: {
			label: 'Specialità',
			type: 'select',
			multi: true,
			options: setSelectOptions(SPECIALITA, 'id'),
		},
		stato: {
			label: 'Stato',
			type: 'radio',
			options: setSelectOptions(STATI_ISTRUTTORE),
			validation: yup.string().required('Inserisci lo stato')
		},
		note: {
			label: 'Note',
			type: 'text',
		},
		iban: {
			type: 'hidden',
		}
	};

	return {
		fields,
		isLoading
	};
};