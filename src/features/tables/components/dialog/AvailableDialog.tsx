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
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { TableProps } from '../Table'

interface AvailableDialogProps {
  open: boolean
  table: TableProps
  onOpenChange: (open: boolean) => void
}

const AvailableDialog = ({ open, table, onOpenChange }: AvailableDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-[400px]'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Available - {table.label}</DialogTitle>
          <DialogDescription>This table is ready for new guests.</DialogDescription>
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
        </div>
        <RadioGroup defaultValue='available' className='flex'>
          <Label
            htmlFor='option-one'
            className='flex space-x-2 w-full p-2 border rounded-md bg-[#00800030] border-[#008000]'
          >
            <RadioGroupItem value='available' id='option-one' />
            <div className='flex flex-col'>
              <span className=' text-[#008000] leading-4'>Available</span>
              <span className='text-muted-foreground text-xs font-normal'>The table is free and ready for guests.</span>
            </div>
          </Label>
          <Label
            htmlFor='option-two'
            className='flex space-x-2 w-full p-2 border rounded-md bg-[#d0000030] border-[#d00000]'
          >
            <RadioGroupItem value='locked' id='option-two' />
            <div className='flex flex-col'>
              <span className=' text-[#d00000] leading-4'>Locked</span>
              <span className='text-muted-foreground text-xs font-normal'>The table is temporarily unavailable.</span>
            </div>
          </Label>
        </RadioGroup>

        <DialogFooter className='mt-2'>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => alert('Order Created!')}>Create Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AvailableDialog
