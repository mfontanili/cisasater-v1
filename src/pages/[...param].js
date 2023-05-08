import * as React from 'react';
import {AppLoader, loadComponent, NavBarLayout} from 'components';
import {useAuthentication, useAuthStore, useRoute} from 'hooks';
import {useEffect} from "react";
import {isEmpty} from "lodash";

const AppPage = () => {
	const {page, isLoading: routeLoading, goAppHome, goAdminHome, goSelectProfile} = useRoute();
	const {isAuth, activeRole, isLoading: authLoading} = useAuthentication();
	const {resetActiveRole} = useAuthStore();

	useEffect(() => {
		if (routeLoading || authLoading) return
		if (isAuth) {
			if (!activeRole || isEmpty(activeRole)) goSelectProfile();
			else {
				if (activeRole?.admin_layout) goAdminHome()
				else goAppHome()
			}
		} else resetActiveRole();
	}, [routeLoading, authLoading, activeRole, isAuth]);

	if (routeLoading || authLoading) return <AppLoader/>;
	const AppModule = loadComponent(page);
	return (
		<NavBarLayout>
			<AppModule/>
		</NavBarLayout>
	);
};

export default AppPage;
