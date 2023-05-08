import * as React from 'react';
import PropTypes from 'prop-types';
import {SessionProvider} from "next-auth/react";

const AppSessionProvider = ({ children }) => {
	return (
		<SessionProvider>
				{children}
		</SessionProvider>
	);
};

export default AppSessionProvider;

AppSessionProvider.propTypes = {
	children: PropTypes.node,
};