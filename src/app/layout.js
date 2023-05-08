import * as React from 'react';
import AppProvider from "../components/providers";
import {Suspense} from "react";

export const metadata = {
	title: 'Cisasater',
	description: 'Portale della Commissione Scuole CAI del TER',
	name: 'viewport',
	content: 'width=device-width, initial-scale=1.0',
	charSet: 'utf-8'
}

export default function RootLayout({children}) {
	return (
		<html lang="it">
		<body>
		<AppProvider>
			<Suspense>
				{children}
			</Suspense>
		</AppProvider>
		</body>
		</html>
	)
}