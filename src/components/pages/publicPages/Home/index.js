'use client';
import * as React from 'react';
import {Box, Divider, Grid, Typography} from '@mui/material';
import {AppForm, H1, ImageIntro, Link, Span} from 'components';

const Home = () => {
	return (
		<Box my="auto">
			<Grid container columnSpacing={10}>
				<Grid item xs={12} md={7}>
					<H1>
						Benvenuto nel portale delle Scuole CAI della
						<Span>
							Toscana e Emilia-Romagna
						</Span>
					</H1>
					<Typography fontSize={18} marginY={2}>
						Per accedere al portale inserisci il tuo
						codice fiscale, riceverai il link di accesso per mail
					</Typography>
					<Box maxWidth={500}>
						<AppForm form='accesso_codice_fiscale'/>
					</Box>
					<Divider sx={{my: 4}}>Oppure</Divider>
					<Box>
						<Box display={'inline-block'}>
							Hai utente e password?
						</Box>
						<Link href={'/accedi'}>
							Accedi con le tue credenziali
						</Link>
					</Box>
					<Typography fontSize={16} marginTop={2}>
						Hai problemi ad accedere?&nbsp;
						<Link href={'/scrivici'}>
							Scrivici una mail
						</Link>
					</Typography>
				</Grid>
				<Grid item xs={12} md={5} display={{xs: 'none', md: 'block'}}>
					<ImageIntro/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
