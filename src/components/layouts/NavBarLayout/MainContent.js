import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const MainContent = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				transition: 'all 0.5s ease',
				width: { xs: '100%', lg: 'calc(100% - 280px)' },
				'& .app-content': {
					width: '100%',
					maxWidth: { lg: 1240, xl: 1520 },
					mx: 'auto',
				},
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default MainContent;

MainContent.propTypes = {
	children: PropTypes.node,
};
