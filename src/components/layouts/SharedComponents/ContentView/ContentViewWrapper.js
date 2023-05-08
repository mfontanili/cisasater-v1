import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ContentViewWrapper = ({ children, ...rest }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flex: 1,
				maxWidth: { xl: 1650 },
				mx: { xl: 'auto' },
				width: { xl: '100%' },
				paddingX: 3,
				paddingY: 1,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default ContentViewWrapper;

ContentViewWrapper.propTypes = {
	children: PropTypes.node,
};
