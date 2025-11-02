import { TableProps } from '@/features/tables/components/Table'
import { DialogType } from '@/features/tables/types'
import { CheckedState } from '@radix-ui/react-checkbox'
import { create } from 'zustand'
import { useShallow } from 'zustand/shallow'

export type FilterState = {
  status: Record<string, CheckedState>
  seatCount: Record<string, CheckedState>
  area: Record<string, CheckedState>
}

type TableStore = {
  // Filter
  filterOptions: FilterState
  setFilterOptions: (key: keyof FilterState, value: Record<string, CheckedState>) => void
  clearFilterOptions: (key: keyof FilterState) => void

  // Dialog
  dialogType: DialogType
  selectedTable: TableProps | null
  openDialog: (type: DialogType, table: TableProps) => void
  closeDialog: () => void
}

export const useTableStore = create<TableStore>((set) => ({
  filterOptions: {
    status: {},
    seatCount: {},
    area: {},
  },
  setFilterOptions: (key, value) =>
    set((state) => ({
      filterOptions: { ...state.filterOptions, [key]: value },
    })),
  clearFilterOptions: (key) =>
    set((state) => ({
      filterOptions: { ...state.filterOptions, [key]: {} },
    })),

  dialogType: null,
  selectedTable: null,
  openDialog: (dialogType, table) =>
    set({
      dialogType,
      selectedTable: table,
    }),
  closeDialog: () =>
    set({
      dialogType: null,
      selectedTable: null,
    }),
}))

export const useFilterOptions = () => useTableStore((state) => state.filterOptions)

// useShallow is used to prevent unnecessary re-renders
export const useFilterActions = () =>
  useTableStore(
    useShallow((state) => ({
      setFilterOptions: state.setFilterOptions,
      clearFilterOptions: state.clearFilterOptions,
    })),
  )

export const useDialogState = () =>
  useTableStore(
    useShallow((state) => ({
      dialogType: state.dialogType,
      selectedTable: state.selectedTable,
    })),
  )

export const useDialogActions = () =>
  useTableStore(
    useShallow((state) => ({
      openDialog: state.openDialog,
      closeDialog: state.closeDialog,
    })),
  )
