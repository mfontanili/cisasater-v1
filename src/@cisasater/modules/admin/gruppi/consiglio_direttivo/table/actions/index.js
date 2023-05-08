import {PROFILI, TIPI_GRUPPO} from '@cisasater/data';
import {useModule} from 'hooks';
import {findItem} from "helpers";

export const useActions = () => {
	const { formValues, removeValues } = useModule();

	const tipoGruppo = findItem(TIPI_GRUPPO, 'id', formValues?.tipo);
	const hasResponsabile = formValues?.ruoli?.some(r => r.ruolo.profilo === tipoGruppo.responsabile);

	const remove = async (values) => {
		await removeValues({
			...formValues,
			ruoli: formValues.ruoli.filter(r => r.istruttore.id !== values.istruttore.id)
		});
	};

	const add = formValues ? {
		type: 'select',
		form: 'consiglio_direttivo',
		items: tipoGruppo?.profili.map(p => {
			const profilo = findItem(PROFILI, 'id', p);
			return {
				label: profilo.ruolo,
				options: { profilo: profilo.id },
				disabled: profilo.id === tipoGruppo.responsabile && hasResponsabile
			}
		})
	} : false;

	return {
		remove,
		edit: false,
		add
	};
};