import { itIT } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme(
	{
		palette: {
			text: {
				primary: '#2a363b',
				disabled: '#666666',
			},
			primary: {
				main: '#1C84F4',
			},
			dark: {
				main: '#424753',
				text: 'white',
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 960,
				lg: 1500,
				xl: 1920,
			},
		},
		shape: {
			borderRadius: 3,
		},
		typography: {
			fontFamily: 'Poppins, sans-serif',
			color: '#2a363b',
			h1: {
				fontFamily: 'Poppins, sans-serif',
				fontSize: 32,
				fontWeight: 700,
				'@media (min-width:600px)': {
					fontSize: 36,
				},
			},
			h2: {
				fontFamily: 'Poppins, sans-serif',
				fontSize: 24,
				fontWeight: 700,
				'@media (min-width:600px)': {
					fontSize: 28,
				},
			},
			h3: {
				fontFamily: 'Poppins, sans-serif',
				fontSize: 20,
				fontWeight: 700,
				'@media (min-width:600px)': {
					fontSize: 24,
				},
			},
			footer: {
				fontSize: 14,
			},
		},
		footer: {
			height: 200,
			imageHeight: 50,
		},
		navbar: {
			height: 100,
			imageHeight: 50,
		},
		homePage: {
			minHeight: 848,
			imageWidth: 400,
		},
		components: {
			MUIDataTableBodyCell: {
				styleOverrides:{
					root: {
						whiteSpace: 'pre',
						fontSize: '.9rem'
					}
				}
			},
			MuiMenuItem: {
				styleOverrides: {
					root: {
						'& a': {
							color: 'inherit',
							textDecoration: 'none !important',
							padding: '4px 12px',
							minWidth: 200,
						},
					},
				},
			},
			MUIDataTableToolbarSelect: {
				styleOverrides: {
					root: {
						height: '64px',
						boxShadow: 'none !important',
						borderRadius: 0,
					},
				},
			},
			Mui: {
				styleOverrides: {
					root: {
						'&:disabled': {
							color: 'rgba(0, 0, 0, 0.75)',
						},
					},
				},
			},
			MuiFormHelperText: {
				styleOverrides: {
					root: {
						marginTop: 0,
						height: 0,
					},
				}
			},
			MUIDataTableFilterList: {
				styleOverrides: {
					root: {
						display: 'none'
					}
				}
			},
			MuiTableCell: {
				styleOverrides: {
					footer: {
						border: 0
					}
				}
			}
		},
	},
	itIT
);
