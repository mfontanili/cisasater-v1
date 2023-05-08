import {useRoute} from "hooks";
import {useStore} from './state';
import {useActions} from "./actions";
import {isEmpty} from "lodash";

export const useModule = (collection) => {
    const { module: moduleName, isLoading } = useRoute();
    const module = collection || moduleName;
    const actions = useActions(module);
    const state = useStore(module);

    return {
        moduleName: module,
        isLoading,
        isNew: isEmpty(state.formValues),
        ...actions,
        ...state,
    }
};

export const useReset = () => {
    return useActions();
}