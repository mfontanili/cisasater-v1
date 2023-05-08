export const useLayout = () => {
	const layout = [
		{
			title: 'Corsi',
			type: 'fields',
			items: [
				{ name: 'id' },
				{ name: 'specialita', col: 3 },
				{ name: 'anno', col: 3 },
				{ name: 'descrizione', col: 6 },
				{ name: 'data_inizio_iscrizioni', col: 6 },
				{ name: 'data_fine_iscrizioni', col: 6 },
			]
		},
		{
			type: 'table',
			table: 'attivita',
		},
		{
			type: 'buttons',
			items: [ 'submit', 'back' ]
		}
	];

	return {
		layout
	};
};