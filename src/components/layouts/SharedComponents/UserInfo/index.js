import * as React from 'react';
import { userInfo } from '@cisasater/routes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import {AppLoader} from 'components';
import {useAnchor, useAuthentication, useRoute} from 'hooks';

const UserInfo = () => {
	const { user, activeRole, isAuth, logout, isLoading } = useAuthentication();
	const { openEl, anchorEl, handleOpen, handleClose, handleConfirm } = useAnchor();
	const { asPath } = useRoute();

	if (!isAuth) return null;

	const handleLogout = () => handleConfirm(() => logout());

	if (isLoading) return <AppLoader/>;
	return (
		<Box
			sx={{
				ml: 4,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					ml: { sm: 4 },
					mr: 4,
					minWidth: { md: 220 },
				}}
			>
				<Box
					onClick={handleOpen}
					sx={{
						p: 0,
						display: 'flex',
						alignItems: 'center',
						cursor: 'pointer',
					}}
				>
					<Box
						sx={{
							display: { xs: 'none', md: 'block' },
							width: '100%',
							ml: 4,
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'right',
								justifyContent: 'right',
							}}
						>
							<Box
								sx={{
									mb: 0,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									fontSize: 16,
									fontWeight: 400,
									color: 'inherit',
								}}
								component="span"
							>
								{user.fullName}
							</Box>
						</Box>
						<Box
							sx={{
								mt: -0.5,
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								fontSize: 16,
								color: 'inherit',
								textAlign: 'right',
							}}
						>
							{activeRole?.nome}
						</Box>
					</Box>
					<Box
						sx={{
							ml: 1,
							color: 'inherit',
							display: 'flex',
						}}
					>
						{ openEl ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
					</Box>
				</Box>

				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={openEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					{userInfo.map((item) => {
						return item.url === asPath ? null : (
							<MenuItem key={item.name} onClick={handleClose}>
								<Link href={item.url}>{item.title}</Link>
							</MenuItem>
						)
					})}

					<MenuItem onClick={handleLogout}>
						<Box sx={{ padding: '4px 12px' }}>Esci</Box>
					</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};

export default UserInfo;
