import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware';

const useStore = create(
    persist(
        () => ({
            viewSidebar: false,
        }),
        {
            name: 'layoutStore',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

export const useLayoutStore = () => ({
    viewSidebar: useStore(state => state.viewSidebar),
    openSidebar: () => useStore.setState({ viewSidebar: true }),
    closeSidebar: () => useStore.setState({ viewSidebar: false }),
});