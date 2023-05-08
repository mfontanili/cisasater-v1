export const useLayout = () => {
	const layout = [
		{
			label: 'Istruttore',
			name: 'istruttore',
			options: {
				customBodyRender: value => value && value.cognome + ' ' + value.nome,
			},
		},
		{
			label: 'Email',
			name: 'istruttore.email',
		},
		{
			label: 'Titoli',
			name: 'istruttore.titoli',
			options: {
				customBodyRender: value => value && value.join('-'),
			},
		},
		{
			label: 'Ruolo',
			name: 'ruolo.nome'
		}
	];

	const options = {
		title: 'Consiglio direttivo',
		download: false,
		tableBodyHeight: 'auto',
		pagination: false,
		search: false,
		filter: false
	};

	return {
		layout,
		options
	};
};