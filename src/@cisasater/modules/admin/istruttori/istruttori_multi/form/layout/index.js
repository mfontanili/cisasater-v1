export const useLayout = () => {
	const layout = [
		{
			title: 'Modifica valori su istruttori selezionati',
			type: 'group',
			items: [
				{
					type: 'fields',
					items: [
						{ name: 'scuola', col: 3 },
						{ name: 'altre_scuole', col: 3 },
						{ name: 'titoli', col: 3 },
						{ name: 'specialita', col: 3 }
					]
				},
				{
					type: 'fields',
					items: [
						{ name: 'sezione', col: 4 },
						{ name: 'bollino', col: 2 },
						{ name: 'stato', col: 6 }
					]
				},
				{
					type: 'fields',
					items: [
						{ name: 'note', col: 12 }
					]
				}
			]
		},
		{
			type: 'buttons',
			items: [ 'submit', 'back' ],
		},
	];

	return {
		layout
	};
};