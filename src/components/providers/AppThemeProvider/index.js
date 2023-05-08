import * as React from 'react';
import { responsiveFontSizes } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { theme } from 'components';
import CssBaseline from '@mui/material/CssBaseline';

const AppThemeProvider = ({ children }) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={responsiveFontSizes(theme)}>
				<CssBaseline/>
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default AppThemeProvider;

AppThemeProvider.propTypes = {
	children: PropTypes.node,
};