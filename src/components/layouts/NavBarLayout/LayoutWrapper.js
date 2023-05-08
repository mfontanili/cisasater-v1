import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const LayoutWrapper = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				flexDirection: 'row',
				position: 'relative',
				backgroundColor: (theme) => theme.palette.background.default,
				paddingTop: '12vh',
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default LayoutWrapper;

LayoutWrapper.propTypes = {
	children: PropTypes.node,
};
