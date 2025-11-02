import { create } from 'zustand'

export type AlertDialogOptions = {
  title?: string
  description?: string
  onCancel?: () => void
  onAction?: () => void
}

type AlertState = {
  isOpen: boolean
  title: string
  description: string
  onCancelCallback: (() => void) | null
  onActionCallback: (() => void) | null
}

type AlertAction = {
  open: (options?: AlertDialogOptions) => void
  close: () => void
  cancel: () => void
  action: () => void
}

const initialState: AlertState = {
  isOpen: false,
  title: '',
  description: '',
  onCancelCallback: null,
  onActionCallback: null,
}

const useAlertDialogStore = create<AlertState & AlertAction>()((set, get) => ({
  ...initialState,
  open: (options = {}) =>
    set({
      isOpen: true,
      title: options.title || '',
      description: options.description || '',
      onCancelCallback: options.onCancel || null,
      onActionCallback: options.onAction || null,
    }),
  close: () => set({ ...initialState }),
  cancel: () => {
    const { onCancelCallback, close } = get()
    if (onCancelCallback) {
      onCancelCallback()
    }
    close()
  },
  action: () => {
    const { onActionCallback, close } = get()
    if (onActionCallback) {
      onActionCallback()
    }
    close()
  },
}))

export default useAlertDialogStore
