import {TITOLIALL, TITOLINAZ} from '@cisasater/data';
import * as yup from 'yup';
import {useModule, useQuery} from 'hooks';

export const useFields = () => {
	const { formValues } = useModule('consiglio_direttivo');
	const { formValues: gruppo } = useModule();
	const { data: [titolati], isLoading } = useQuery('queryIstruttoriTitolati');

	let options = gruppo.tipo === 'scuola' ? gruppo?.organico : titolati;
	if (!isLoading && formValues?.profilo === 'direttore') {
		options = options?.filter(istruttore => istruttore.titoli.some(t => TITOLINAZ.includes(t)));
	}
	if (!isLoading && formValues?.profilo === 'vicedirettore') {
		options = options?.filter(istruttore => istruttore.titoli.some(t => TITOLIALL.includes(t)));
	}

	const fields = {
		istruttore: {
			label: formValues?.profilo,
			type: 'select',
			validation: yup.string().required('Inserisci almeno un nominativo'),
			options: options?.map(i => ({
				value: JSON.stringify(i),
				label: `${i.cognome} ${i.nome}`
			}))
		},
		profilo: {
			type: 'hidden'
		}
	};

	return {
		fields,
		isLoading
	};
};