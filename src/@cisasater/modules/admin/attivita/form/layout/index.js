import {useAuthentication, useModule} from "hooks";

export const useLayout = () => {
	const { gruppo } = useAuthentication();
	const { formValues } = useModule();
	const group = formValues ? formValues.gruppo.nome || JSON.parse(formValues.gruppo).nome : gruppo.nome;

	const layout = [
		{
			title: 'Attività organizzata da ' + group,
			type: 'group',
			col: 6,
			items: [
				{
					type: 'fields',
					items: [
						{ name: 'gruppo' },
						{ name: 'descrizione' },
						{ name: 'luogo', col: 6 },
						{ name: 'data_inizio', col: 3 },
						{ name: 'data_fine', col: 3 },
					]
				}
			]
		},
		{
			type: 'group',
			col: 6,
			items: [
				{
					type: 'table',
					table: 'responsabili'
				},
				{
					type: 'fields',
					items: [{ name: 'ruoli' }]
				},
				{
					type: 'error',
					field: 'ruoli'
				}
			]
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