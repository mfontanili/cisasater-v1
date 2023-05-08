import * as React from 'react';
import { Box, Typography } from '@mui/material';
import LogoImg from 'assets/images/logo_cisasater.svg';

const Logo = () => {
	return (
		<Box
			sx={{
				height: { xs: 56, sm: 70 },
				padding: 0,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
				justifyContent: 'left',
				'& svg': {
					height: { xs: 30, sm: 40 },
				},
			}}
		>
			<LogoImg />
			<Typography
				sx={{
					fontSize: 15,
					margin: '5px 0 0 15px',
				}}
			>
                Commissione Scuole CAI Toscana Emilia-Romagna
			</Typography>
		</Box>
	);
};

export default Logo;
