export const useLayout = () => {
	const layout =  [
		{
			type: 'fields',
			items: [
				{ name: 'username' }
			],
		},
		{
			type: 'fields',
			items: [
				{ name: 'password' }
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