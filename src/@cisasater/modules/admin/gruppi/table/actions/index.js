import {useMutation} from 'hooks';

export const useActions = () => {
    const mutate = useMutation('deleteGruppi', ['queryScuole', 'queryOrganiTecnici']);

    const remove = async (values) => {
        await mutate(values);
    };

    const add = {
        type: 'modal',
        form: 'gruppi_modal'
    };

    return {
        remove,
        add
    };
};