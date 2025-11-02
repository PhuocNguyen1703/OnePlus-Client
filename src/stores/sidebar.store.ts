import { create } from 'zustand'

interface StoreState {
  isLargeSidebarOpen: boolean
  isSmallSidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

const isScreenSmall = () => {
  return window.innerWidth < 1024
}

const useSidebarStore = create<StoreState>()((set) => ({
  isLargeSidebarOpen: true,
  isSmallSidebarOpen: false,
  toggleSidebar: () => {
    if (isScreenSmall()) {
      set((state) => ({
        isSmallSidebarOpen: !state.isSmallSidebarOpen,
      }))
    } else {
      set((state) => ({
        isLargeSidebarOpen: !state.isLargeSidebarOpen,
      }))
    }
  },
  closeSidebar: () => {
    if (isScreenSmall()) {
      set(() => ({
        isSmallSidebarOpen: false,
      }))
    } else {
      set(() => ({
        isLargeSidebarOpen: false,
      }))
    }
  },
}))

export default useSidebarStore
