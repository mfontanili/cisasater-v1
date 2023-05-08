'use client';
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { ImageRight, TitleH1 } from 'components';

const img = require('assets/images/cisasater.jpg');

const Commissione = () => {
	return (
		<Grid container rowSpacing={4} sx={{ mt: 4 }}>
			<Grid item xs={12}>
				<TitleH1 title1="Commissione" title2="Interregionale" />
				<ImageRight src={img} width="50%" alt='Cisasater' />
				<Typography>
                    La CISASATER (Commissione Interregionale Scuole di
                    Alpinismo, Scialpinismo, Arrampicata Toscana Emilia-Romagna)
                    ha l’incarico di gestire e controllare l’attività delle
                    Scuole Sezionali ed Interregionali di alpinismo,
                    scialpinismo, sciescursionismo, arrampicata libera di
                    Toscana ed Emilia Romagna e di garantire uniformità
                    procedurale e didattica in linea con le disposizioni della
                    Commissione Nazionale.
				</Typography>
				<Typography>
                    In accordo con la Cnsasa e le sue Scuole Centrali,
                    Cisasater:
				</Typography>
				<Typography>
                    - organizza i corsi per istruttori di alpinismo,
                    scialpinismo, snowboard alpinismo, sciescursionismo e
                    arrampicata libera e i successivi corsi di aggiornamento;
				</Typography>
				<Typography>
                    - coordina l’attività delle Scuole e lo svolgimento dei
                    relativi corsi;
				</Typography>
				<Typography>
                    - controlla attività degli istruttori di alpinismo,
                    scialpinismo, snowboard alpinismo, sciescursionismo e
                    arrampicata libera mantenendo aggiornati gli albi regionali
                    delle Scuole;
				</Typography>
				<Typography>
                    - cura la formazione e l’aggiornamento degli Istruttori
                    promuovendo attività di aggiornamento per gli istruttori
                    sezionali e per gli aspiranti istruttori sezionali che
                    operano nelle Scuole;
				</Typography>
				<Typography>
                    - collabora con gli altri organi tecnici operativi centrali
                    e territoriali per il conseguimento dell’uniformità
                    didattica.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TitleH1 title1="Scuola" title2="Interregionale" />
				<Typography>
                    La SI TER, scuola interregionale Toscana ed Emilia Romagna,
                    nasce nel 2018 dalla fusione di SIA, scuola interregionale
                    di alpinismo e arrampicata libera, e SISA, scuola
                    interregionale di scialpinismo e scifondoescursionismo.
				</Typography>
				<Typography>
                    La SI TER è un organo tecnico alle dipendenze della
                    CISASATER e cura organizzazione e la gestione dei corsi
                    per la formazione degli istruttori regionali secondo le
                    linee guida emanate dalla Commissione Nazionale e dalle
                    Scuole Centrali (SCA e SCSA).
				</Typography>
				<Typography>
                    Cura inoltre la verifica organizzazione e dello
                    svolgimento degli aggiornamenti dei propri istruttori
                    nazionali e regionali. Organizza attività specifiche
                    formative anche per gli istruttori Sezionali e gli aspiranti
                    istruttori. Collabora infine con altri organi tecnici del
                    CAI, come Alpinismo Giovanile ed Escursionismo, nella
                    gestione dei rispettivi corsi formativi.
				</Typography>
				<Typography>
                    La SI TER ad oggi è composta da circa 50 volontari tra
                    istruttori nazionali e regionali di alpinismo, scialpinismo,
                    arrampicata libera, snowboard e sci di fondo escursionismo
                    regolarmente in attività e obbligatoriamente iscritti
                    nell’organico di una scuola del TER.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Commissione;
