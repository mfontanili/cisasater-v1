import * as React from 'react';
import { Typography } from '@mui/material';
import { AppBtnPaper } from 'components';

const Attivita = () => {
	const data = [];

	return (
		<>
			<Typography sx={{ mb: 5 }}>
                Di seguito sono elencate le ultime attività e gli ultimi corsi
                per cui sei stato nominato responsabile; ti chiediamo di
                compilare il resoconto subito dopo il termine delle giornate, in
                modo da permettere a tutti gli istruttori di compilare i propri
                rimborsi:
			</Typography>

			{data.map((d) => (
				<AppBtnPaper key={d.title}>
					{d.corso ? (
						<Typography sx={{ fontSize: 16 }}>{d.corso}</Typography>
					) : null}
					<Typography sx={{ fontSize: 20, fontWeight: 600 }}>
						{d.title}
					</Typography>
					{d.luogo ? (
						<Typography sx={{ fontSize: 16 }}>{d.luogo}</Typography>
					) : null}
					{d.date ? (
						<Typography sx={{ fontSize: 16 }}>{d.date}</Typography>
					) : null}
				</AppBtnPaper>
			))}
		</>
	);
};

export default Attivita;
