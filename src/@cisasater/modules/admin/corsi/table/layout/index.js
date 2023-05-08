export const useLayout = () => {
	const layout = [
		{
			label: 'Corso',
			name: 'descrizione',
		},
		{
			label: 'Direttore',
			name: 'direttore',
		},
		{
			label: 'Vicedirettore',
			name: 'vicedirettore',
		},
		{
			label: 'Data termine iscrizioni',
			name: 'data_fine_iscrizioni',
		},
	];

	return {
		layout
	};
};