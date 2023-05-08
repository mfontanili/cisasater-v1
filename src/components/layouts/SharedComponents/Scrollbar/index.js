import * as React from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';

const Scrollbar = (props) => {
	const { children, ...rest } = props;

	return (
		<Box
			sx={{
				paddingY: 5,
				height: '100%',
				width: '100%',
			}}
		>
			<SimpleBarReact {...rest}>{children}</SimpleBarReact>
		</Box>
	);
};

export default Scrollbar;

Scrollbar.propTypes = {
	children: PropTypes.node,
};
