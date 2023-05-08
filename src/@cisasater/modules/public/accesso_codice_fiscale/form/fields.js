import * as yup from 'yup';

export const useFields = () => {
	const fields = {
		codice_fiscale: {
			label: 'Codice fiscale',
			type: 'text',
			validation: yup
				.string()
				.required('Inserisci il tuo codice fiscale'),
		},
		submit: {
			label: 'Ricevi il link di accesso',
			type: 'submit',
		},
	};

	return {
		fields
	};
};