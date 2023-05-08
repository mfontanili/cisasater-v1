import * as React from 'react';
import AppProvider from 'components/providers';
import Head from 'next/head';
import 'assets/scss/global.scss';
import 'assets/scss/loader.scss';
import PropTypes from 'prop-types';
import {useReset, useRoute} from "hooks";

export default function MyApp({Component, pageProps}) {
	const {resetAll} = useReset();
	const {pathName} = useRoute();

	React.useEffect(() => {
		resetAll();
	}, [pathName]);

	return (
		<AppProvider pageProps={pageProps}>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<title>CISASATER</title>
				<meta charSet='utf-8'/>
			</Head>
			<Component {...pageProps} />
		</AppProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
