import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {shallow} from "zustand/shallow";

export const useModuleStore = create(persist(() => ({
    selectedRows: {},
    selectedFilter: {},
    selectedData: {},
    formValues: {},
    formState: {},
    currentValues: {},
    viewForm: {},
    viewModalForm: {},
    activeForms: [],
}), {
    name: 'moduleStore',
    storage: createJSONStorage(() => sessionStorage)
}));

const selector = (state) => ({
    selectedRows: state.selectedRows,
    selectedFilter: state.selectedFilter,
    selectedData: state.selectedData,
    formValues: state.formValues,
    formState: state.formState,
    currentValues: state.currentValues,
    viewForm: state.viewForm,
    viewModalForm: state.viewModalForm,
    activeForms: state.activeForms,
})

export const useStore = (module) => {
    const state = useModuleStore(selector, shallow);

    return module ? {
            ...state,
            selectedRows: state.selectedRows[module] || [],
            selectedFilter: state.selectedFilter[module] || [],
            selectedData: state.selectedData[module] || {},
            formValues: state.formValues[module] || {},
            currentValues: state.currentValues[module] || {},
            viewForm: Boolean(state.viewForm[module]),
            viewModalForm: Boolean(state.viewModalForm[module]),
    } : state;
}