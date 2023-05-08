import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {AppLoader, TitleH1} from 'components';
import { useAuthentication } from 'hooks';

const Home = () => {
	const { user, isLoading } = useAuthentication();

	if (isLoading) return <AppLoader/>;
	return (
		<Box sx={{ paddingX: 7, paddingY: 4 }}>
			<Grid container spacing={5} alignItems='center'>
				<Grid item xs={12}>
					<TitleH1 title2={user.nome} />
					<Typography sx={{ mb: 5 }}>
                        Hai fatto accesso al portale cisasater.org, il portale
                        delle Scuole CAI della Toscana e dell&apos;Emilia-Romagna; in
                        quest&apos;area puoi accedere a tutti i servizi a te
                        riservati.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
