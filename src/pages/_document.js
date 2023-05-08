import * as React from 'react';

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<style>{'body { margin: 0 } /* custom! */'}</style>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat&family=Nunito&family=Poppins&family=Noto+Sans&family=Open+Sans&family=Lato&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
