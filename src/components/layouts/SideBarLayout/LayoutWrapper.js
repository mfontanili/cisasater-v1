import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const LayoutWrapper = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				backgroundColor: (theme) => theme.palette.background.default,
				paddingTop: '12vh',
				'& .mainContent': {
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					width: { xs: '100%', lg: 'calc(100% - 280px)' },
					transition: 'all 0.5s ease',
					ml: { lg: '280px' },
				},
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
