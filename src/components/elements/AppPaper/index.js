import * as React from 'react';

import { ButtonBase, Paper } from '@mui/material';
import PropTypes from 'prop-types';

export const AppPaper = ({ children, sx, ...rest }) => {
	return (
		<Paper
			elevation={4}
			sx={{
				height: '125px',
				textAlign: 'center',
				alignContent: 'center',
				px: 6,
				mx: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				...sx,
			}}
			{...rest}
		>
			{children}
		</Paper>
	);
};

export const AppBtnPaper = ({ children, onClick, sx, ...rest }) => {
	return (
		<ButtonBase onClick={onClick}>
			<AppPaper sx={sx} {...rest}>
				{children}
			</AppPaper>
		</ButtonBase>
	);
};

AppPaper.propTypes = {
	sx: PropTypes.object,
	children: PropTypes.node,
};

AppBtnPaper.propTypes = {
	sx: PropTypes.object,
	children: PropTypes.node,
	onClick: PropTypes.func,
};
