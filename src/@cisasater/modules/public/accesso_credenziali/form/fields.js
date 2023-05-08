import * as yup from 'yup';

export const useFields = () => {
	const fields = {
		username: {
			label: 'Username',
			type: 'text',
			validation: yup.string().required('Inserisci il tuo username'),
		},

		password: {
			label: 'Password',
			type: 'password',
		},

		submit: {
			label: 'Accedi',
			type: 'submit',
		},
	};

	return {
		fields
	};
};