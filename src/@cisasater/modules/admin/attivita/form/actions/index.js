import {useModule, useMutation} from 'hooks';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import {isEmpty} from "lodash";

export const useActions = () => {
	const mutate = useMutation('submitAttivita',['queryAttivita']);
	const { formValues } = useModule();

	const submit = async (values, setError) => {
		if (isEmpty(formValues.ruoli)) {
			setError('attivita.ruoli', {
				type: 'focus',
				message: 'Inserisci almeno un responsabile'
			}, { shouldFocus: true });
		} else {
			await mutate({
				remove: formValues.removed,
				input: {
					...values,
					uuid: formValues.uuid || uuidv4(),
					ruoli: formValues.ruoli,
					gruppo: { id: values.gruppo},
					data_inizio: dayjs(values.data_inizio).format('DD/MM/YYYY'),
					data_fine: values.data_fine && dayjs(values.data_fine).format('DD/MM/YYYY'),
				}
			});
		}
	}

	return {
		submit
	};
};