import create from 'zustand';

function Store(set) {
    return {
        darkmode: true,
        changeDark: () => set((state) => ({ darkmode: true})),
        changeLight: () => set((state)=> ({ darkmode: false}))

    };
}

const useStore = create(Store)
export default useStore 