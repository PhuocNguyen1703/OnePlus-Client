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

interface OccupiedDialogProps {
  open: boolean
  table: TableProps
  onOpenChange: (open: boolean) => void
}

const OccupiedDialog = ({ open, table, onOpenChange }: OccupiedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Occupied Table</DialogTitle>
          <DialogDescription>Table {table.label} is currently occupied.</DialogDescription>
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
          {/* giả lập order */}
          <p>
            <strong>Order ID:</strong> #ORD-2025-001
          </p>
          <p>
            <strong>Total:</strong> $120
          </p>
          <p>
            <strong>Status:</strong> In progress
          </p>
        </div>

        <DialogFooter>
          <Button variant='outline' onClick={() => alert('Mark as Done')}>
            Mark as Done
          </Button>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default OccupiedDialog
