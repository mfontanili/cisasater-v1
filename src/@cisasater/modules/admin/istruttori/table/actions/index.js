import {useMutation} from 'hooks';

export const useActions = () => {
	const mutate = useMutation('deleteIstruttori', ['queryIstruttori']);

	const remove = async (values) => {
		await mutate(values);
	};

	return {
		remove
	};
};