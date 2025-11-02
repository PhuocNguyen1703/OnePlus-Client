'use client'

import { useDialogActions, useDialogState } from '@/stores/table.store'
import { AvailableDialog, CleaningDialog, EditTableDialog, OccupiedDialog, ReservationDialog } from './dialog'

export const TableDialogs = () => {
  const { dialogType, selectedTable } = useDialogState()
  const { closeDialog } = useDialogActions()

  if (!selectedTable || !dialogType) return null

  switch (dialogType) {
    case 'edit':
      return <EditTableDialog open={true} table={selectedTable} onOpenChange={closeDialog} />
    case 'reservation':
      return <ReservationDialog open={true} table={selectedTable} onOpenChange={closeDialog} />
    case 'occupied':
      return <OccupiedDialog open={true} table={selectedTable} onOpenChange={closeDialog} />
    case 'cleaning':
      return <CleaningDialog open={true} table={selectedTable} onOpenChange={closeDialog} />
    case 'available':
      return <AvailableDialog open={true} table={selectedTable} onOpenChange={closeDialog} />
    default:
      return null
  }
}
