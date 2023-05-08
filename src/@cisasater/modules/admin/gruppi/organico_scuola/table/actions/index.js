import {useModule} from 'hooks';

export const useActions = () => {
	const { formValues, removeValues } = useModule();

	const remove = async (values) => {
		await removeValues({
			...formValues,
			ruoli: formValues.ruoli.filter(r => r.istruttore.id !== values.istruttore.id),
			removed: [
				...(formValues.removed || []),
				values.id
			]
		});
	};

	return {
		remove,
		edit: false,
		add: false
	};
};