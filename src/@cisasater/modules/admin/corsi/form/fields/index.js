import {SPECIALITA} from '@cisasater/data';
import {setSelectOptions} from 'helpers';

const a = new Date().getFullYear();
const anno = [a.toString(), (a + 1).toString()];

export const useFields = () => {
	const fields = {
		id: {
			type: 'hidden',
		},
		specialita: {
			label: 'Specialità',
			type: 'select',
			options: setSelectOptions(SPECIALITA, 'id'),
		},
		anno: {
			label: 'Anno',
			type: 'select',
			options: setSelectOptions(anno)
		},
		descrizione: {
			label: 'Descrizione',
			type: 'text',
		},
		quota: {
			label: 'Quota iscrizione',
			type: 'text',
		},
		data_inizio_iscrizioni: {
			label: 'Data inizio iscrizioni',
			type: 'date',
		},
		data_fine_iscrizioni: {
			label: 'Data fine iscrizioni',
			type: 'date',
		}
	};

	return {
		fields
	};
};