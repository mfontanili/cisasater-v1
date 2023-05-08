import {useAuthentication, useModule} from "hooks";
import * as yup from "yup";
import moment from "moment";

export const useFields = () => {
	const { gruppo } = useAuthentication();
	const { formValues } = useModule();

	const fields = {
		descrizione: {
			label: 'Descrizione',
			type: 'text',
			validation: yup.string().required("Inserisci una descrizione per l'evento"),
		},
		data_inizio: {
			label: 'Data inizio',
			type: 'date',
			validation: yup.string().required("Inserisci la data di inizio dell'evento"),
			value: moment(formValues?.data_inizio, 'DD/MM/YYYY')
		},
		data_fine: {
			label: 'Data fine',
			type: 'date',
			value: moment(formValues?.data_fine, 'DD/MM/YYYY')
		},
		luogo: {
			label: 'Luogo',
			type: 'text',
			validation: yup.string().required("Inserisci il luogo dell'evento"),
		},
		gruppo: {
			type: 'hidden',
			value: formValues ? formValues.gruppo.id || JSON.parse(formValues.gruppo).id : gruppo.id
		},
		ruoli: {
			type: 'hidden'
		}
	};

	return {
		fields
	};
};