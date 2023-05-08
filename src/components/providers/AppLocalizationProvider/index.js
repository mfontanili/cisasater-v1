import * as React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';

const AppSessionProvider = ({ children }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			{children}
		</LocalizationProvider>
	);
};

export default AppSessionProvider;

AppSessionProvider.propTypes = {
	children: PropTypes.node,
};

