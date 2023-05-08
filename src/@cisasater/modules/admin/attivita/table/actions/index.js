import {useAuthentication, useMutation} from 'hooks';

export const useActions = () => {
    const { gruppo } = useAuthentication();
    const mutate = useMutation('deleteAttivita', ['queryAttivita']);

    const remove = async (values) => {
        await mutate(values);
    };

    const add = {
        type: 'modal',
        form: 'select_gruppo',
    };

    return {
        remove,
        ...!gruppo && { add }
    };
};