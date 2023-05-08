import * as yup from 'yup';

export const useFields = () => {
	const fields = {
		name: {
			label: 'Nome',
			type: 'text',
			validation: yup.string().required('Inserisci il tuo nome'),
		},

		email: {
			label: 'Email',
			type: 'email',
			validation: yup
				.string()
				.required('Inserisci il tuo indirizzo email'),
		},

		message: {
			label: 'Messaggio',
			type: 'text',
			multi: true,
			validation: yup.string().required('Inserisci un messaggio'),
		},

		submit: {
			label: 'Invia la mail',
			type: 'submit',
		},
	};

	return {
		fields
	};
};