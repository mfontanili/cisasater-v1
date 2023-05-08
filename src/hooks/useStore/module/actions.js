import {isArray, merge} from "lodash";
import {useModuleStore} from './state';

export const useActions = (module) => {
    const setSelectedRows = (data) => useModuleStore.setState((state) => ({
        selectedRows: {
            ...state.selectedRows,
            [module]: data
        }
    }));

    const setSelectedFilter = (data) => useModuleStore.setState((state) => ({
        selectedFilter: {
            ...state.selectedFilter,
            [module]: data
        }
    }));

    const setSelectedData = (data) => useModuleStore.setState((state) => ({
        selectedData: {
            ...state.selectedData,
            [module]: data
        }
    }));

    const resetSelectedData = () => useModuleStore.setState({
        selectedData: {},
        selectedRows: {}
    });

    const setFormValues = (data) => useModuleStore.setState((state) => ({
        formValues: {
            ...state.formValues,
            [module]: {
                ...state.formValues[module],
                ...data
            }
        }
    }));

    const setCurrentValues = (data) => useModuleStore.setState((state) => ({
        currentValues: {
            ...state.currentValues,
            ...data
        }
    }));

    const setFormState = (data) => useModuleStore.setState((state) => ({
        formState: {
            ...state.formState,
            ...data
        }
    }));

    const appendForm = (form, activeForms) => {
        if (form && !activeForms.includes(form)) {
            return [...activeForms, form];
        }

        return activeForms
    }

    const openForm = () => useModuleStore.setState((state) => ({
        activeForms: appendForm(module, state.activeForms),
        formValues: merge(state.formValues, {
            [module]: isArray(state.selectedData[module]) ? state.selectedData[module].at(0) : state.selectedData[module]
        }),
        viewForm: {
            ...state.viewForm,
            [module]: true
        }
    }));

    const openEmptyForm = () => useModuleStore.setState((state) => ({
        activeForms: appendForm(module, state.activeForms),
        viewForm: {
            ...state.viewForm,
            [module]: true
        }
    }));

    const openModalForm = () => useModuleStore.setState((state) => ({
        activeForms: appendForm(module, state.activeForms),
        formValues: merge(state.formValues, {
            [module]: isArray(state.selectedData[module]) ? state.selectedData[module].at(0) : state.selectedData[module]
        }),
        viewModalForm: {
            ...state.viewModalForm,
            [module]: true
        }
    }));

    const closeForm = (e) => useModuleStore.setState((state) => {
        e?.preventDefault();
        const lastForm = state.activeForms.pop();
        window.sessionStorage.removeItem(lastForm);
        e?.stopPropagation();
        return {
            viewForm: {
                ...state.viewForm,
                [lastForm]: false
            },
            viewModalForm: {
                ...state.viewModalForm,
                [lastForm]: false
            },
            formValues: {
                ...state.formValues,
                [lastForm]: {}
            },
            activeForms: state.activeForms,
            selectedData: {
                ...state.selectedData,
                [lastForm]: []
            },
            selectedRows: {
                ...state.selectedRows,
                [lastForm]: []
            }
        };
    })

    const resetAll = () => useModuleStore.setState({
        activeForms: [],
        viewForm: {},
        viewModalForm: {},
        selectedData: {},
        selectedRows: {},
        formValues: {},
        formState: {},
        selectedFilter: {},
        currentValues: {}
    })

    const submitValues = async (data) => {
        await setFormValues(data);
        await closeForm();
    };

    const removeValues = async (data) => {
        await setFormValues(data);
        await resetSelectedData();
    };

    return {
        setSelectedFilter,
        setSelectedData,
        resetSelectedData,
        setFormValues,
        setCurrentValues,
        setFormState,
        openForm,
        openEmptyForm,
        openModalForm,
        closeForm,
        resetAll,
        submitValues,
        removeValues,
        setSelectedRows
    }
};