import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { TitleH1 } from 'components';
import {AppLoader} from 'components';
import { useAuthentication } from 'hooks';
import Attivita from '../Attivita';

const Home = () => {
	const { user, isLoading } = useAuthentication();

	if (isLoading) return <AppLoader />;
	return (
		<Box sx={{ paddingX: 7, paddingY: 4 }}>
			<Grid container spacing={5} alignItems="center">
				<Grid item xs={12}>
					<TitleH1 title1="Ciao" title2={user.nome} />
					<Attivita />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
