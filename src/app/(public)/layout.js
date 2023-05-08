import * as React from 'react';
import {NavBarLayout} from "components";

export default function RootLayout({children}) {
	return (
		<NavBarLayout>
			{children}
		</NavBarLayout>
	);
}
