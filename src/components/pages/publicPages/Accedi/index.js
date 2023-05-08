'use client';
import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import {AppForm, ImageIntro, Link, TitleH1} from 'components';

const Home = () => {
	return (
		<Box my="auto">
			<Grid container columnSpacing={10}>
				<Grid item xs={12} sm={7}>
					<TitleH1
						title1="Benvenuto nel portale delle Scuole CAI della"
						title2="Toscana e Emilia-Romagna"
					/>

					<Typography fontSize={20} my={2}>
                        Inserisci le tue credenziali per accedere:
					</Typography>

					<Box maxWidth={500}>
						<AppForm form='accesso_credenziali' />
					</Box>

					<Divider sx={{ my: 4 }}>Oppure</Divider>
					<Typography fontSize={18} marginTop={4}>
                        Non sei registrato o hai dimenticato la password?&nbsp;
						<Link href={'/'}>
                            Accedi con il tuo codice fiscale
						</Link>                        .
					</Typography>
					<Typography fontSize={16} marginTop={2}>
                        Hai problemi ad accedere?&nbsp;
						<Link href={'/scrivici'}>
                            Scrivici una mail
						</Link>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={5} display={{ xs: 'none', md: 'block' }}>
					<ImageIntro />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
