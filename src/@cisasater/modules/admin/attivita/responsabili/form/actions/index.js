import {useModule} from "hooks";

export const useActions = () => {
    const { formValues, submitValues } = useModule();

    const submit = async (values) => {
        await submitValues({
            ruoli: [
                ...formValues.ruoli,
                {
                    profilo: 'responsabile',
                    istruttore: JSON.parse(values.responsabile),
                    attivita: {
                        id: formValues.id,
                    }
                }
            ]
        });
    }

    return {
        submit
    }
}