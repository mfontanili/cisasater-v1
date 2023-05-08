import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const AppSidebarWrapper = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				width: 280,
				display: 'flex',
				flexDirection: 'column',
				transition: 'all 0.5s ease',
				position: 'relative',
				top: 0,
				left: 0,
				zIndex: 1101,
				'& .app-sidebar': {
					position: 'relative',
					top: 'auto',
					left: 'auto',
					width: '100%',
					borderRight: '0 none',
				},
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default AppSidebarWrapper;

AppSidebarWrapper.propTypes = {
	children: PropTypes.node,
};
