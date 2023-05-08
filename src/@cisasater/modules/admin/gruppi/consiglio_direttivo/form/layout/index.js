import {useModule} from 'hooks';

export const useLayout = () => {
	const { formValues } = useModule('consiglio_direttivo');
	const title = `Aggiungi un ${formValues?.profilo}`;

	const layout = [
		{
			type: 'fields',
			items: [
				{ name: 'istruttore' },
				{ name: 'profilo' }
			],
		},
		{
			type: 'buttons',
			items: [ 'submit', 'back' ],
		}
	];

	const options = {
		title
	};


	return {
		layout,
		options
	};
};