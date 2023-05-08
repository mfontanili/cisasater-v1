import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';

const VerticalNavListItem = ({ children, level, ...rest }) => {
	return (
		<ListItem
			sx={{
				height: 40,
				pl: 40 + 33 * level + 'px',
				pr: 3,
				color: (theme) => alpha(theme.palette.text.primary, 0.7),
				fontWeight: 600,
				fontSize: 16,
				width: '50px',
				cursor: 'pointer',
				textDecoration: 'none!important',
				whiteSpace: 'nowrap',
				transition: 'all 0.4s ease',
				'&.nav-item-header': {
					cursor: 'auto',
					transition: 'all 0.4s ease',
					mt: 2
				}
			}}
			{...rest}
		>
			{children}
		</ListItem>
	);
};

export default VerticalNavListItem;

VerticalNavListItem.propTypes = {
	children: PropTypes.node,
	level: PropTypes.number,
};
