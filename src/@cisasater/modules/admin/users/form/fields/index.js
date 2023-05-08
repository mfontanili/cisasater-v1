import * as yup from 'yup';
import {useModule} from 'hooks';

export const useFields = () => {
	const { isNew } = useModule('users');

	const fields = {
		username: {
			label: 'Username',
			type: 'text',
			validation: yup.string().required('Inserisci uno username'),
		},
		password: {
			label: 'Password',
			type: 'password',
			validation: isNew ? yup.string().required('Inserisci una password') : null,
			value: ''
		},
		nome: {
			label: 'Nome completo',
			type: 'text',
			validation: yup.string().required('Inserisci un nome completo'),
		},
		email: {
			label: 'Email',
			type: 'email',
			validation: yup
				.string()
				.required('Inserisci un indirizzo email')
				.email('Inserisci un indirizzo email valido'),
		},
	};

	return {
		fields
	};
};