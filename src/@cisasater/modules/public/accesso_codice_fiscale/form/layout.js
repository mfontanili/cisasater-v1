export const useLayout = () => {
	const layout = [
		{
			type: 'fields',
			items: [
				{ name: 'codice_fiscale' }
			],
		},
		{
			type: 'buttons',
			items: [ 'submit' ],
		},
	];

	return {
		layout
	};
};