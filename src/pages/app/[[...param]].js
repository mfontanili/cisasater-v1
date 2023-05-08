import * as React from 'react';
import {AppLoader, loadComponent, NavBarLayout} from 'components';
import {useAuthentication, useRoute} from 'hooks';
import {useEffect} from "react";
import {isEmpty} from "lodash";

const AppPage = () => {
	const { page, isLoading: routeLoading, goAdminHome, goHome, goSelectProfile, asPath } = useRoute();
	const { isAuth, activeRole, isLoading: authLoading } = useAuthentication();

	useEffect(() => {
		if (routeLoading || authLoading || asPath === '/app/profilo') return;
		if (!isAuth) goHome();
		if (!activeRole || isEmpty(activeRole)) goSelectProfile();
		if (activeRole?.admin_layout) goAdminHome();
	}, [routeLoading, authLoading, isAuth, activeRole])

	if (routeLoading || authLoading) return <AppLoader/>;
	const AppModule = loadComponent(page);
	return (
		<NavBarLayout>
			<AppModule/>
		</NavBarLayout>
	);
};

export default AppPage;
