// prettier-ignore
"use client"

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { type LucideIcon, PlusCircleIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { TableStatus } from '../../types'
import { tableStatus } from '../../constants'
import { useFilterActions, useFilterOptions } from '@/stores/table.store'
import { extractCheckedKeys } from '../../utils/extractCheckedKeys'

export const SelectStatusButton = () => {
  const [open, setOpen] = useState(false)
  const filterOptions = useFilterOptions()
  const { setFilterOptions, clearFilterOptions } = useFilterActions()
  const selected = extractCheckedKeys<TableStatus>(filterOptions.status)

  const handleToggle = (key: TableStatus) => {
    setFilterOptions('status', {
      ...filterOptions.status,
      [key]: !filterOptions.status[key],
    })
  }

  const handleClear = () => {
    clearFilterOptions('status')
    setOpen(false)
  }

  const renderLabel = () => {
    if (selected.length === 0) return null
    if (selected.length > 2) return <Badge>{selected.length}+</Badge>
    return selected.map((s) => {
      const { color } = tableStatus[s]

      return (
        <Badge
          key={s}
          variant='outline'
          style={{
            border: `1px solid ${color}50`,
            backgroundColor: `${color}30`,
          }}
          className='flex items-center gap-1'
        >
          <span className='capitalize'>{s}</span>
        </Badge>
      )
    })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' className='justify-start border-dashed rounded-full'>
          <PlusCircleIcon />
          Status
          {selected.length > 0 && <Separator orientation='vertical' className='mx-1' />}
          <span className='flex gap-1'>{renderLabel()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[180px] p-1 text-sm' align='start'>
        <div className='flex flex-col gap-1 mb-1'>
          {(Object.entries(tableStatus) as [TableStatus, { icon: LucideIcon; color: string; bgColor: string }][]).map(
            ([status, { icon: Icon, color }]) => (
              <label
                key={status}
                className='flex items-center p-2 rounded-md cursor-pointer  hover:bg-accent hover:text-accent-foreground '
              >
                <Checkbox
                  checked={selected.includes(status)}
                  onCheckedChange={() => handleToggle(status)}
                  className='mr-2'
                />
                <Icon size={18} color={color} />
                <span className='ml-1 capitalize'>{status}</span>
              </label>
            ),
          )}
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
