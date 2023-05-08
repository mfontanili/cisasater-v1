import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const SidebarWrapper = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				width: 280,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				transition: 'all 0.5s ease',
				position: { xs: 'relative', lg: 'fixed' },
				top: { xs: 0, lg: '12vh' },
				left: 0,
				zIndex: 1001,
				'& .app-sidebar': {
					position: 'relative',
					top: 'auto',
					left: 'auto',
					width: '100%',
				},
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default SidebarWrapper;

SidebarWrapper.propTypes = {
	children: PropTypes.node,
};
