import {useModule} from "hooks";

export const useLayout = () => {
	const {formValues: {istruttore}} = useModule();

	const layoutIstruttore = [
		{
			type: 'fields',
			items: [
				{name: 'username', col: 6},
				{name: 'password', col: 6},
			]
		},
		{
			type: 'buttons',
			items: ['submit', 'back']
		}
	];

	const layoutUser = [
		{
			type: 'group',
			col: 7,
			items: [
				{
					type: 'fields',
					items: [
						{name: 'username'},
						{name: 'password'},
						{name: 'nome'},
						{name: 'email'},
					]
				},
				{
					type: 'buttons',
					items: ['submit', 'back']
				}
			]
		},
		{
			type: 'table',
			col: 5,
			table: 'roles'
		}
	];

	return {
		layout: istruttore ? layoutIstruttore : layoutUser
	};
};