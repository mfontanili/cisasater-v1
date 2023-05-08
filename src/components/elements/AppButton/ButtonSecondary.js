import * as React from 'react';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const ButtonSecondary = React.forwardRef(
	({ href, children, type, onClick, ...rest }, ref) => {
		return (
			<Button
				variant="outlined"
				disableElevation
				sx={{ height: '56px' }}
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

ButtonSecondary.displayName = 'ButtonSecondary';

ButtonSecondary.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	onClick: PropTypes.func,
	href: PropTypes.object,
};
