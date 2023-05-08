import * as React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const ButtonPrimary = React.forwardRef(
	({ href, children, type, onClick, ...rest }, ref) => {
		return (
			<Button
				variant="contained"
				disableElevation
				sx={{ height: '56px', px: 4, minWidth: '150px' }}
				href={href}
				ref={ref}
				type={type}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Button>
		);
	}
);

ButtonPrimary.displayName = 'ButtonPrimary';

ButtonPrimary.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	type: PropTypes.string,
	href: PropTypes.object,
};
