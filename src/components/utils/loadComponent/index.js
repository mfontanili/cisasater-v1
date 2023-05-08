import * as React from 'react';
import dynamic from 'next/dynamic';
import { AppLoader } from 'components';

export const loadComponent = (importComponent) => {
	return dynamic(importComponent, {
		loading: () => <AppLoader />,
		ssr: false,
	});
};