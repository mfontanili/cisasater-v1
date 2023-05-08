import {useAuthentication} from 'hooks';

export const useActions = () => {
	const { login } = useAuthentication();

	return {
		submit: login
	};
};