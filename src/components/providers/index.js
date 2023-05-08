'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import {ErrorBoundary} from 'react-error-boundary';
import AppErrorBoundary from './AppErrorBoundary';
import AppGraphqlProvider from './AppGraphqlProvider';
import AppLocalizationProvider from './AppLocalizationProvider';
import AppThemeProvider from './AppThemeProvider';
import AppSessionProvider from "./AppSessionProvider";

const AppProvider = ({children, pageProps}) => {
	return (
		<AppSessionProvider pageProps={pageProps}>
			<AppGraphqlProvider>
				<AppThemeProvider>
					<AppLocalizationProvider>
						<ErrorBoundary FallbackComponent={AppErrorBoundary}>
							{children}
						</ErrorBoundary>
					</AppLocalizationProvider>
				</AppThemeProvider>
			</AppGraphqlProvider>
		</AppSessionProvider>
	);
};

export default AppProvider;

AppProvider.propTypes = {
	children: PropTypes.node,
};
