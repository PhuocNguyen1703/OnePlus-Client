// prettier-ignore
"use client"
import dayjs from 'dayjs'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FieldError = { field: string; message: string }

type AuthState = {
  tokenExp: number | null
  isRefreshing: boolean
}

type AuthAction = {
  setAuth: (tokenExp: number) => void
  clearAuth: () => void
  setRefreshing: (status: boolean) => void
  isTokenValid: () => boolean
  willExpireSoon: (seconds: number) => boolean
}

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set, get) => ({
      tokenExp: null,
      isRefreshing: false,

      setAuth: (tokenExp) => set({ tokenExp }),
      clearAuth: () => set({ tokenExp: null }),
      setRefreshing: (status) => set({ isRefreshing: status }),

      isTokenValid: () => {
        const exp = get().tokenExp
        if (!exp) return false
        return dayjs.unix(exp).isAfter(dayjs())
      },

      willExpireSoon: (seconds) => {
        const exp = get().tokenExp
        if (!exp) return true
        const remaining = dayjs.unix(exp).diff(dayjs(), 'second')
        return remaining <= seconds
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ tokenExp: state.tokenExp }),
    },
  ),
)
