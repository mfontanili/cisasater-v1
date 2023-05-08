import {modulesDef} from '@cisasater/modules';

export const useTables = (appModule) => {
	const { useData, useLayout, useActions } = modulesDef[appModule].table;
	const { data, isLoading } = useData();
	const { layout: columns, options = {} } = useLayout();
	const { remove, add = true, edit = true } = useActions();

	return {
		data,
		columns,
		remove,
		options,
		isLoading,
		actions: {
			remove,
			add,
			edit
		}
	};
};