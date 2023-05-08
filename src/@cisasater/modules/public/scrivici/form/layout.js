export const useLayout = () => {
	const layout = [
		{
			type: 'fields',
			items: [
				{ name: 'name' }
			],
		},
		{
			type: 'fields',
			items: [
				{ name: 'email' }
			],
		},
		{
			type: 'fields',
			items: [
				{ name: 'message' }
			],
		},
		{
			type: 'buttons',
			items: [ 'submit' ],
		}
	];

	return {
		layout
	};
};