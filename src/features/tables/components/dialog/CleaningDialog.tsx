'use client'

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

interface CleaningDialogProps {
  open: boolean
  table: TableProps
  onOpenChange: (open: boolean) => void
}

const CleaningDialog = ({ open, table, onOpenChange }: CleaningDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cleaning Status</DialogTitle>
          <DialogDescription>Table {table.label} is currently being cleaned.</DialogDescription>
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
          <p>
            <strong>Status:</strong> Cleaning in progress
          </p>
        </div>

        <DialogFooter>
          <Button variant='outline' onClick={() => alert('Mark as Cleaned')}>
            Mark as Cleaned
          </Button>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CleaningDialog
