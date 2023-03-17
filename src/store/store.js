import create from 'zustand';
import { persist } from 'zustand/middleware'

let store = (set) => ({ 
        darkmode: true,
        changeDark: () => set((state) => ({ darkmode: true})),
        changeLight: () => set((state)=> ({ darkmode: false}))
})

store = persist(store, {name: "DarkModeChange"})
const useStore = create(store)

export default useStore 
