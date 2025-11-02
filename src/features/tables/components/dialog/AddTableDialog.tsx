'use client'

import { GradientButton } from '@/components/ui/gradient-button'
import { PlusIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { TableForm } from '../TableForm'
import { Button } from '@/components/ui/button'

const AddTableDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='rounded-full'>
          <PlusIcon /> Add Table
        </Button>
      </DialogTrigger>

      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Add new table</DialogTitle>
          <DialogDescription>Fill in details to create a new table.</DialogDescription>
        </DialogHeader>
        <TableForm mode='add' open />
      </DialogContent>
    </Dialog>
  )
}

export default AddTableDialog
