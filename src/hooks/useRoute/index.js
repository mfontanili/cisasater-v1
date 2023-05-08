import { adminRoutes, appRoutes, publicRoutes } from '@cisasater/routes';
import { findItem } from 'helpers';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useRoute = () => {
	const router = useRouter();
	const pathName = usePathname();
	const query = useSearchParams();

	const response = {
		push: router.push,
		goAdminHome: () => router.push('/admin'),
		goAppHome: () => router.push('/app'),
		goHome: () => router.push('/'),
		goSelectProfile: () => router.push('/app/profilo')
	};

	const appRoute = findItem(appRoutes, 'url', pathName);
	if (appRoute) return {
		...response,
		isLoading: false,
		page: appRoute.page || findItem(appRoutes, 'name', 'home').page,
		name: appRoute.name || null,
		routes: appRoutes,
		asPath: pathName,
		pathName
	};

	const adminRoute = findItem(adminRoutes, 'url', pathName);
	if (adminRoute) return {
		...response,
		isLoading: false,
		page: adminRoute.page || findItem(adminRoutes, 'name', 'base').page,
		name: adminRoute.name || null,
		routes: adminRoutes,
		module: adminRoute.module,
		table: adminRoute.table,
		form: adminRoute.form,
		asPath: pathName,
		pathName
	};

	const publicRoute = findItem(publicRoutes, 'url', pathName);
	return {
		...response,
		isLoading: false,
		page: publicRoute?.page || findItem(publicRoutes, 'name', 'home').page,
		name: publicRoute?.name || null,
		routes: publicRoutes,
		asPath: pathName,
		query
	};
};