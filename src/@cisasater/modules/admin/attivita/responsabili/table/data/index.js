import {useModule} from "hooks";
import {getRoles} from "helpers";

export const useData = () => {
    const { formValues } = useModule();
    const { ruoli } = getRoles(formValues?.ruoli);

    return {
        data: ruoli
    }
}