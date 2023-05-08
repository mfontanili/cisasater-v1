import {useModule} from "hooks";

export const useActions = () => {
    const { formValues, submitValues, openForm } = useModule();

    const submit = async (values) => {
        await submitValues({
            ...formValues,
            gruppo: values.gruppo
        });

        return openForm();
    }
    return {
        submit
    }
}