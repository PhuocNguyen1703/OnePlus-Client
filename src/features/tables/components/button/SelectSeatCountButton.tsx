// prettier-ignore
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { PlusCircleIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { seatCounts } from '../TableForm'
import { useFilterActions, useFilterOptions } from '@/stores/table.store'
import { extractCheckedKeys } from '../../utils/extractCheckedKeys'

export const SelectSeatCountButton = () => {
  const [open, setOpen] = useState(false)
  const filterOptions = useFilterOptions()
  const { setFilterOptions, clearFilterOptions } = useFilterActions()
  const selected = extractCheckedKeys(filterOptions.seatCount)

  const handleToggle = (key: string) => {
    setFilterOptions('seatCount', {
      ...filterOptions.seatCount,
      [key]: !filterOptions.seatCount[key],
    })
  }

  const handleClear = () => {
    clearFilterOptions('seatCount')
    setOpen(false)
  }

  const renderLabel = () => {
    if (selected.length === 0) return null
    if (selected.length > 3) return <Badge>{selected.length}+</Badge>
    return selected.map((c) => (
      <Badge key={c} variant='outline' className='bg-background '>
        {c} seats
      </Badge>
    ))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' className=' justify-start border-dashed rounded-full'>
          <PlusCircleIcon />
          Seats
          {selected.length > 0 && <Separator orientation='vertical' className='mx-1' />}
          <span className='flex gap-1'>{renderLabel()}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[140px] p-1 text-sm' align='start'>
        <div className='flex flex-col gap-1 mb-1'>
          {seatCounts.map((count) => (
            <label
              key={count}
              className='flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground'
            >
              <Checkbox
                checked={selected.includes(String(count))}
                onCheckedChange={() => handleToggle(String(count))}
              />
              <span>{count} seats</span>
            </label>
          ))}
        </div>

        {selected.length > 0 && (
          <>
            <Separator />
            <Button variant='ghost' className='w-full px-2 py-1 mt-1' onClick={handleClear}>
              Clear filters
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
