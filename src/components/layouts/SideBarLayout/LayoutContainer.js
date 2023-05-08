import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const LayoutContainer = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				backgroundColor: (theme) => theme.palette.background.default,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default LayoutContainer;

LayoutContainer.propTypes = {
	children: PropTypes.node,
};
