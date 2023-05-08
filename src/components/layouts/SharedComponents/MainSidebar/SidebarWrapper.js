import * as React from 'react';

import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const SidebarWrapper = ({ children }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100%',
				width: '100%',
				overflow: 'hidden',
				backgroundColor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.primary.main,
				'&:before': {
					content: '""',
					display: 'none',
					position: 'absolute',
					left: 0,
					top: 0,
					zIndex: 1,
					width: '100%',
					height: '100%',
					backgroundColor: (theme) =>
						alpha(theme.palette.common.white, 0.5),
				},
				'& > *': {
					position: 'relative',
					zIndex: 3,
				},
			}}
		>
			{children}
		</Box>
	);
};

export default SidebarWrapper;

SidebarWrapper.propTypes = {
	children: PropTypes.node,
};
