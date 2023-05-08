import {useModule} from 'hooks';

export const useData = () => {
	const { formValues: { organico }} = useModule();

	return  {
		data: organico,
	};
};