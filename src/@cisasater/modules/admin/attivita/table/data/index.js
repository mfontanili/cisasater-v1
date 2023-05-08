import {useModule, useQuery, useRoute} from 'hooks';

export const useData = () => {
	const { name } = useRoute();
	const { formValues } = useModule();

	const { data: [data], isLoading: l1 } = useQuery('queryAttivita');
	const { data: [moduli], isLoading: l2 } = useQuery('getCorsoModuli', {
		id: formValues?.id
	});

	return  {
		data: name === 'corsi' ? moduli : data,
		isLoading: l1 || l2
	};
};