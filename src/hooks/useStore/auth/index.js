import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware';

const useStore = create(
    persist(
        () => ({
            activeRole: {},
        }),
        {
            name: 'authStore',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

export const useAuthStore = () => ({
    activeRole: useStore(state => state.activeRole),
    setActiveRole: (data) => useStore.setState({ activeRole: data }),
    resetActiveRole: () => useStore.setState({ activeRole: {}})
});