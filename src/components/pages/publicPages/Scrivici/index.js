'use client';
import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {AppForm, ImageRight, TitleH1} from 'components';

const image = require('assets/images/email.png');

const Scrivici = () => {
	return (
		<Box my="auto">
			<Grid container alignItems="center" textAlign="center">
				<Grid item xs={12} md={7}>
					<TitleH1 title1="Scrivi alla" title2="Commissione" />
					<Typography fontSize={20} marginBottom={2}>
                        Compila questo modulo per inviarci qualsiasi richiesta o
                        comunicazione.
					</Typography>

					<Box maxWidth={700} marginX="auto">
						<AppForm form='scrivici' />
					</Box>
				</Grid>
				<Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
					<ImageRight src={image} width={700} alt='Scrivici' />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Scrivici;
