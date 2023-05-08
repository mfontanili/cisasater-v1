import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ButtonPrimary } from 'components';
import ErrorIcon from './ErrorIcon';

const AppErrorBoundary = ({ error, resetErrorBoundary }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				flex: 1,
				textAlign: 'center',
				marginTop: 5,
				'& svg': {
					width: '100%',
					maxWidth: 400,
					color: (theme) => theme.palette.primary.main,
				},
			}}
		>
			<ErrorIcon />
			<Typography
				variant="h2"
				component="h2"
				style={{ fontSize: 30, marginTop: 16 }}
			>
                Si è verificato un errore.
			</Typography>
			<Typography sx={{ fontSize: 18, marginY: 2 }}>
				{error.message}
			</Typography>
			<ButtonPrimary onClick={resetErrorBoundary}>Riprova</ButtonPrimary>
		</Box>
	);
};

export default AppErrorBoundary;

AppErrorBoundary.propTypes = {
	error: PropTypes.object,
	resetErrorBoundary: PropTypes.func
};