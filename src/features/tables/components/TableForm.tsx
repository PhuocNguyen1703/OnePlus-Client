// prettier-ignore
"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DialogClose } from '@/components/ui/dialog'
import { useTable } from '../hooks/useTable'
import { TableSchemaType } from '../schemas'
import { useEffect } from 'react'
import { Trash2Icon } from 'lucide-react'
import { areaOptions } from '../constants'

export const seatCounts = [2, 4, 6, 8, 10]

interface TableFormProps {
  mode: 'add' | 'edit'
  defaultValues?: Partial<TableSchemaType> & { _id?: string }
  open: boolean
}

export const TableForm = ({ mode, defaultValues, open }: TableFormProps) => {
  const { form, addTable, editTable, deleteTable } = useTable(defaultValues)

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open, form, defaultValues])

  const onSubmit = async (formData: TableSchemaType) => {
    if (mode === 'add') {
      await addTable(formData)
    }
    if (mode === 'edit') {
      await editTable(formData)
    }
  }

  const handleDeleteTable = async () => {
    deleteTable(defaultValues?._id)
  }

  return (
    <Form {...form}>
      <form className='mt-6 space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='label'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder='Table label' autoFocus {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='area'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select area' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {areaOptions.map((opt) => (
                    <SelectItem
                      key={opt.key}
                      value={opt.key as string}
                      className='cursor-pointer  hover:bg-accent hover:text-accent-foreground'
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='seatCount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seat Count</FormLabel>
              <Select
                onValueChange={(val) => field.onChange(Number(val))}
                defaultValue={field.value ? String(field.value) : undefined}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select seat count' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {seatCounts.map((count, idx) => (
                    <SelectItem
                      key={idx}
                      value={String(count)}
                      className='cursor-pointer  hover:bg-accent hover:text-accent-foreground'
                    >
                      {count}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className='flex justify-between pt-6'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <div className='flex items-center space-x-2'>
            {mode === 'edit' && (
              <Button variant='outline' type='button' onClick={handleDeleteTable}>
                <Trash2Icon color='#9d0208' />
              </Button>
            )}
            <Button type='submit'>{mode === 'add' ? 'Add Table' : 'Save Changes'}</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
