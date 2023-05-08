import {SEZIONI_CAI, SPECIALITA, STATI_ISTRUTTORE, TITOLI} from '@cisasater/data';
import {setSelectOptions} from 'helpers';
import {useQuery} from 'hooks';

const a = new Date().getFullYear();
let bollino = [];
for (let i = a - 4; i < a + 1; i++) {
	bollino.push(i.toString());
}

export const useFields = () => {
	const { data: [scuoleSez, scuoleReg], isLoading } = useQuery('queryScuoleSin');

	const fields = {
		scuola: {
			label: 'Scuola di appartenenza',
			type: 'select',
			options: setSelectOptions(scuoleSez, 'id', 'nome'),
			value: ''
		},
		altre_scuole: {
			label: 'Altre Scuole',
			type: 'select',
			multi: true,
			options: setSelectOptions(scuoleReg, 'id', 'nome'),
		},
		sezione: {
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
		},
		note: {
			label: 'Note',
			type: 'text',
		}
	};

	return {
		fields,
		isLoading
	};
};