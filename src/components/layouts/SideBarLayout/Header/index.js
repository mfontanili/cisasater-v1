import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import {useLayoutStore} from 'hooks';
import {Logo, UserInfo} from '../../SharedComponents';

const Header = () => {
	const { openSidebar } = useLayoutStore();

	return (
		<AppBar
			color="inherit"
			sx={{
				boxShadow: 'none',
				borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
				backgroundColor: 'background.paper',
				transition: 'width 0.5s ease',
				width: '100%',
			}}
		>
			<Toolbar
				sx={{
					boxSizing: 'border-box',
					height: '12vh',
					paddingX: { xs: 2.5, md: 5 },
				}}
			>
				<IconButton
					sx={{
						color: 'text.secondary',
						display: { lg: 'none', xs: 'block' },
					}}
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={openSidebar}
					size="large"
				>
					<MenuIcon
						sx={{
							width: 35,
							height: 35,
						}}
					/>
				</IconButton>

				<Logo/>

				<Box
					sx={{
						flexGrow: 1,
					}}
				/>

				<UserInfo/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
