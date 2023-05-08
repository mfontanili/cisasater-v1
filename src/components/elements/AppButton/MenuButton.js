import * as React from 'react';

import { Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

import { LinkButton } from './LinkButton';
import { NavButton } from './NavButton';

export const MenuButton = ({ children, items, ...rest }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<NavButton
				onClick={handleOpenNavMenu}
				onMouseOver={handleOpenNavMenu}
				{...rest}
			>
				{children}
			</NavButton>

			<Menu
				anchorEl={anchorElNav}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				MenuListProps={{ onMouseLeave: handleCloseNavMenu }}
			>
				{items.map((child) => (
					<MenuItem
						key={child.name}
						sx={{
							bgcolor: 'transparent',
							':hover': {
								bgcolor: 'transparent',
							},
						}}
					>
						<LinkButton href={child.path}>{child.title}</LinkButton>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

MenuButton.propTypes = {
	children: PropTypes.node,
	items: PropTypes.array
};