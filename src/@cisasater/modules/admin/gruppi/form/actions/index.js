import {useModule, useMutation} from 'hooks';

export const useActions = () => {
    const mutate = useMutation('submitGruppi', ['queryScuole', 'queryOrganiTecnici']);
    const { formValues } = useModule();

    const submit = async (values) => {
        await mutate({
            ...values,
            ruoli: formValues.ruoli.map(ruolo => ({
                istruttore_id: ruolo.istruttore.id,
                profilo: ruolo.profilo
            }))
        });
    };

    return {
        submit
    };
};