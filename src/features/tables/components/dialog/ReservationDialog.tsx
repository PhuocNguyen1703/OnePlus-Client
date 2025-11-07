// prettier-ignore
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { TableProps } from '../Table'

interface ReservationDialogProps {
  open: boolean
  table: TableProps
  onOpenChange: (open: boolean) => void
}

const ReservationDialog = ({ open, table, onOpenChange }: ReservationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservation Info</DialogTitle>
          <DialogDescription>View reservation details for table {table.label}.</DialogDescription>
        </DialogHeader>

        <div className='space-y-2'>
          <p>
            <strong>Table:</strong> {table.label}
          </p>
          <p>
            <strong>Seats:</strong> {table.seatCount}
          </p>
          <p>
            <strong>Area:</strong> {table.area}
          </p>
          {/* giả lập thêm */}
          <p>
            <strong>Customer:</strong> John Doe
          </p>
          <p>
            <strong>Phone:</strong> 0909-123-456
          </p>
          <p>
            <strong>Time:</strong> 19:00 - 21:00
          </p>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ReservationDialog
