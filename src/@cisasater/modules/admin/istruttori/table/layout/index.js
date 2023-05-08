import {CustomSelectToolbar} from './customSelectToolbar';
import {useModule, useMount} from "hooks";
import {isEmpty} from "lodash";

export const useLayout = () => {
	const { selectedFilter, setSelectedFilter } = useModule();

	useMount(() => {
		if (isEmpty(selectedFilter)) {
			setSelectedFilter(['Attivo'])
		}
	})

	const layout = [
		{
			label: 'Cognome',
			name: 'cognome',
		},
		{
			label: 'Nome',
			name: 'nome',
		},
		{
			label: 'Codice Fiscale',
			name: 'codice_fiscale',
		},
		{
			label: 'Email',
			name: 'email',
		},
		{
			label: 'Scuola',
			name: 'scuola',
			options: {
				customBodyRender: value => value.at(0).gruppo.nome,
			},
		},
		{
			label: 'Titoli',
			name: 'titoli',
			options: {
				customBodyRender: value => value && value.join('-'),
			},
		},
		{
			label: 'Specialità',
			name: 'specialita',
			options: {
				customBodyRender: value => value && value.join('-'),
                filter: false
			},
		},
		{
			label: 'Bollino',
			name: 'bollino',
		},
		{
			label: 'Stato',
			name: 'stato',
            options: {
                display: false,
                filterList: selectedFilter,
            }
		}
	];

	const options = {
		selectableRowsHideCheckboxes: false,
		selectableRows: 'multiple',
		CustomSelectToolbar,
		onFilterChange: (changedColumn, filterList, type, index) => {
			setSelectedFilter(filterList[index])
		}
	};

	return {
		layout,
		options
	};
};