import { appConfig } from '@cisasater/config';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAuthStore } from "../useStore";

export const useAuthentication = () => {
	const { data: session, status } = useSession();
	const { activeRole } = useAuthStore();

	const login = async (values) => await signIn('credentials', {
		username: values.username,
		password: values.password,
		callbackUrl: '/app/profilo'
	});

	const logout = async () => await signOut({ callbackUrl: '/' });

	if (!appConfig.enableAuthentication) {
		return {
			isLoading: false,
			isAuth: true,
			user: {
				nome: 'Test'
			},
			profile: {
				nome: 'Utente di test'
			},
			role: {
				sito: 'backend'
			},
			isAdmin: true,
			login,
			logout
		}
	}

	if (status === 'authenticated') {
		const { user } = session;
		return {
			isLoading: false,
			isAuth: true,
			user,
			activeRole,
			login,
			logout
		};
	}

	return {
		isLoading: false,
		isAuth: false,
		layout: 'public',
		login,
		logout
	};
};