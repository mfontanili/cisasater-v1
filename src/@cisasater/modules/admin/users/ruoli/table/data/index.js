import {useModule} from 'hooks';

export const useData = () => {
    const { formValues } = useModule();
    const data = formValues?.ruoli;

    return  {
        data,
    };
};