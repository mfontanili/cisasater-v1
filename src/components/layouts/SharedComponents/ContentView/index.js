import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import ContentViewWrapper from './ContentViewWrapper';

const ContentView = ({ children, sxStyle }) => {
	return (
		<ContentViewWrapper className="app-content-view">
			<Box
				sx={{
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					...sxStyle,
				}}
				className="app-content"
			>
				{children}
			</Box>
		</ContentViewWrapper>
	);
};

export default ContentView;

ContentView.propTypes = {
	children: PropTypes.node,
	sxStyle: PropTypes.object,
};
