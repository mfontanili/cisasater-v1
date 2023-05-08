import * as React from 'react';
import {AppLoader, loadComponent, SideBarLayout} from 'components';
import {useAuthentication, useRoute} from 'hooks';
import {useEffect} from "react";
import {isEmpty} from "lodash";

const AppPage = () => {
	const { page, isLoading: routeLoading, goAppHome, goHome, goSelectProfile, query } = useRoute();
	const { isAuth, activeRole, isLoading: authLoading } = useAuthentication();
	console.log({query})
	useEffect(() => {
		if (routeLoading || authLoading) return;
		if (!isAuth) goHome();
		if (!activeRole || isEmpty(activeRole)) goSelectProfile();
		if (!activeRole?.admin_layout) goAppHome();
	}, [routeLoading, authLoading, isAuth, activeRole])

	if (routeLoading || authLoading) return <AppLoader/>;
	const AppModule = loadComponent(page);
	return (
		<SideBarLayout>
			<AppModule/>
		</SideBarLayout>
	);
};

export default AppPage;
