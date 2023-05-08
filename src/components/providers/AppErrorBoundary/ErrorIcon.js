import React from 'react';
import { useTheme } from '@mui/material';
import Logo from 'assets/images/something-wrong.svg';

const ErrorIcon = () => {
	const theme = useTheme();
	return <Logo fill={theme.palette.primary.main} />;
};

export default ErrorIcon;
