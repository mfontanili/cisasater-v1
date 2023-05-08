import {useModule} from 'hooks';

export const useActions = () => {
    const { formValues, removeValues } = useModule();

    const remove = async (values) => {
        await removeValues({
            ...formValues,
            ruoli: formValues.ruoli.filter(r => r.profilo.id !== values.profilo.id || r.gruppo?.id !== values.gruppo?.id)
        });
    };

    return {
        remove,
        edit: false,
        add: {
            form: 'roles',
            type: 'modal'
        }
    };
};