import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import {useLayoutStore} from 'hooks';
import {HorizontalNav, Logo, UserInfo} from '../../SharedComponents';

const Header = () => {
	const { closeSidebar } = useLayoutStore();

	return (
		<AppBar
			color="inherit"
			sx={{
				boxShadow: 'none',
				borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
				backgroundColor: 'background.paper',
				width: {
					xs: '100%',
				},
			}}
			className="app-bar"
		>
			<Toolbar
				sx={{
					boxSizing: 'border-box',
					height: { xs: 55, sm: '12vh' },
					px: { xs: 0 },
				}}
			>
				<Box
					sx={{
						width: '100%',
						mx: 'auto',
						px: 5,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							sx={{
								mr: 1,
								color: 'text.secondary',
							}}
							edge="start"
							className="menu-btn"
							color="inherit"
							aria-label="open drawer"
							onClick={closeSidebar}
							size="large"
						>
							<MenuIcon
								sx={{
									width: 35,
									height: 35,
								}}
							/>
						</IconButton>
					</Box>

					<Box sx={{ marginRight: 3 }}>
						<Logo/>
					</Box>

					<Box
						sx={{
							flexGrow: 3,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'right',
						}}
					>
						<Box
							sx={{
								'& .navbarNav': {
									display: 'flex',
									padding: 0,
								},
								'& .navItem': {
									width: '100%',
									cursor: 'pointer',
									px: 5,
									py: 1,
									borderRadius: 1,
									'&.active': {
										color: (theme) => theme.palette.dark.text,
										backgroundColor: (theme) => theme.palette.primary.main,
										'& .navLinkIcon': {
											color: (theme) => theme.palette.secondary.main,
										},
									},
								},
								'& .navLinkIcon': {
									mr: 2.5,
									color: (theme) => theme.palette.common.white,
									fontSize: 20,
								},
							}}
						>
							<HorizontalNav/>
						</Box>
					</Box>

					<UserInfo/>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
