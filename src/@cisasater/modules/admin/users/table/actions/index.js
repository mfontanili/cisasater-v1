import {useMutation} from 'hooks';

export const useActions = () => {
	const mutate = useMutation('deleteUsers', ['queryUsers','getUserRoles']);

	const remove = async (values) => {
		await mutate(values);
	};

	return {
		remove
	};
};