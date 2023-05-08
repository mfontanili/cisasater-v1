import * as React from 'react';
import {Box, Card, CardActionArea, CardHeader, Grid, Typography} from '@mui/material';
import {AppLoader, H1, Span} from 'components';
import {useAuthStore, useAuthentication, useRoute} from 'hooks';

const Home = () => {
	const { user, isLoading } = useAuthentication();
	const { setActiveRole } = useAuthStore();
	const { goAdminHome, goAppHome } = useRoute();

	const onClick = (ruolo) => {
		setActiveRole(ruolo);
		if (ruolo.admin_layout) goAdminHome()
		else goAppHome()
	}

	if (!user || isLoading) return <AppLoader/>;
	return (
		<Box sx={{ p: 10 }}>
			<Grid container spacing={5} alignItems="center">
				<Grid item xs={12}>
					<H1>Benvenuto <Span>{user.nome}</Span></H1>
					<Typography sx={{ mb: 5, fontSize: 20 }}>
                        Questi sono i profili utente a tua disposizione: clicca sul profilo che desideri utilizzare.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{user.ruoli.map(item => (
						<Card
							key={item.ruolo.id}
							sx={{
								width: '30%',
								textAlign: 'center',
								m: 1,
								display: 'flex',
								flexDirection: 'row'
							}}
						>
							<CardActionArea
								onClick={() => onClick(item.ruolo)}
							>
								<CardHeader
									sx={{
										backgroundColor: theme => theme.palette.primary.main,
										color: theme => theme.palette.dark.text,
									}}
									title={item.ruolo.nome}
								/>
							</CardActionArea>
						</Card>
					))}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
