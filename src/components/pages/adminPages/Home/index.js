import * as React from 'react';
import {Box, Grid} from '@mui/material';
import {AppLoader, H1, Span} from 'components';
import {useAuthentication} from 'hooks';

const Home = () => {
	const { user, isLoading } = useAuthentication();

	if (isLoading) return <AppLoader/>;
	return (
		<Box sx={{ paddingX: 7, paddingY: 4 }}>
			<Grid container spacing={5} alignItems='center'>
				<Grid item xs={12}>
					<H1>Ciao <Span>{user.nome}</Span></H1>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
