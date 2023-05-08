import {useModule} from 'hooks';

export const useData = () => {
	const { formValues } = useModule();

	return  {
		data: formValues?.ruoli
	};
};