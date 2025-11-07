// prettier-ignore
"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { TableForm } from '../TableForm'
import { TableProps } from '../Table'

interface EditTableDialogProps {
  open: boolean
  table: TableProps
  onOpenChange: (open: boolean) => void
}

const EditTableDialog = ({ open, table, onOpenChange }: EditTableDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Edit Table {table.label}</DialogTitle>
          <DialogDescription>
            Update the table’s details below. You can change the label, area, or seat count. If this table is no longer
            needed, you can delete it permanently.
          </DialogDescription>
        </DialogHeader>
        <TableForm
          mode='edit'
          defaultValues={{
            _id: table._id,
            label: table.label,
            seatCount: table.seatCount,
            area: table.area,
          }}
          open
        />
      </DialogContent>
    </Dialog>
  )
}

export default EditTableDialog
