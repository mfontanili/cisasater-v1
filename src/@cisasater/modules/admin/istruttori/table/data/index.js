import {useQuery} from 'hooks';

export const useData = () => {
	const { data: [ data ], isLoading } = useQuery('queryIstruttori');

	return  {
		data,
		isLoading
	};
};