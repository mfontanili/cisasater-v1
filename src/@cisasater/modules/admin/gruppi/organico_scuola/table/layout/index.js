export const useLayout = () => {
	const layout = [
		{
			name: 'cognome',
			options: {
				display: false
			},
		},
		{
			name: 'nome',
			options: {
				display: false
			},
		},
		{
			label: 'Istruttore',
			name: 'istruttore',
			options: {
				customBodyRender: (value, meta) => meta.rowData[0] + ' ' + meta.rowData[1],

			}
		},
		{
			label: 'Titoli',
			name: 'titoli',
			options: {
				customBodyRender: (value) => value && value.join('-'),
			},
		}
	];

	const options = {
		title: 'Organico istruttori',
		download: false,
		tableBodyHeight: 'auto',
		search: false,
		filter: false,
		rowsPerPage: 14,
		rowsPerPageOptions: [14],
		sortOrder: {
			name: 'cognome',
			direction: 'asc'
		}
	};

	return {
		layout,
		options
	};
};