import moment from 'moment/moment';
import {useRoute} from "hooks";

export const useLayout = () => {
	const { name } = useRoute();

	const layout = [
		{
			name: 'data_fine',
			options: {
				display: 'excluded',
			},
		},
		{
			label: 'Data',
			name: 'data_inizio',
			options: {
				customBodyRender: (value, table) => {
					const d1 = moment(value, 'DD/MM/YYYY');
					const d2 = table.rowData[0]
						? moment(table.rowData[0], 'DD/MM/YYYY')
						: null;
					if (d2) {
						return d1.format('DD') + '-' + d2.format('DD/MM/YYYY');
					}
					return d1.format('DD/MM/YYYY');
				},
			},
		},
		{
			label: 'Luogo',
			name: 'luogo',
		},
		...name === 'attivita' ? [{
			label: 'Organizzata da',
			name: 'gruppo.nome',
		}] : [],
		{
			label: 'Descrione',
			name: 'descrizione',
		}
	];

	const options = name === 'corsi' ? {
		title: 'Moduli corso',
		download: false,
		tableBodyHeight: 'auto',
		pagination: false,
		search: false,
		filter: false,
	} : {};

	return {
		layout,
		options
	};
};