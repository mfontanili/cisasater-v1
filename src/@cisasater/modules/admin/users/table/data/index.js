import {useQuery} from 'hooks';

export const useData = () => {
	const { data: [ data ], isLoading } = useQuery('queryUsers');

	return  {
		data,
		isLoading
	};
};