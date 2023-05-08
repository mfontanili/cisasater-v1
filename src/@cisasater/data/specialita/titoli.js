export const TITOLI = [
	{
		nome: 'INA',
		specialita: 'ALP',
		livello: 'nazionale'
	},
	{
		nome: 'IA',
		specialita: 'ALP',
		livello: 'regionale'
	},
	{
		nome: 'INAL',
		specialita: 'AL',
		livello: 'nazionale'
	},
	{
		nome: 'IAL',
		specialita: 'AL',
		livello: 'regionale'
	},
	{
		nome: 'INSA',
		specialita: 'SA',
		livello: 'nazionale'
	},
	{
		nome: 'ISA',
		specialita: 'SA',
		livello: 'regionale'
	},
	{
		nome: 'ISBA',
		specialita: 'SBA',
		livello: 'regionale'
	},
	{
		nome: 'INSFE',
		specialita: 'SFE',
		livello: 'nazionale'
	},
	{
		nome: 'ISFE',
		specialita: 'SFE',
		livello: 'regionale'
	},
	{
		nome: 'SEZ',
		specialita: null,
		livello: 'sezionale'
	},
	{
		nome: 'ASP',
		specialita: null,
		livello: 'aspirante'
	},
	{
		nome: 'AGAI',
		specialita: null,
		livello: 'guida alpina'
	},
];

export const TITOLINAZ = ['INA', 'INSA', 'INAL', 'INSFE'];
export const TITOLIREG = ['IA', 'ISA', 'ISBA', 'IAL', 'ISFE'];
export const TITOLIALL = [...TITOLINAZ, ...TITOLIREG];