// prettier-ignore
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Settings2Icon } from 'lucide-react'
import { areaOptions } from '../../constants'
import { useFilterActions } from '@/stores/table.store'

const SelectAreaButton = () => {
  const { setFilterOptions, clearFilterOptions } = useFilterActions()
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  const handleToggle = (key: string, checked: boolean) => {
    const newSelected = checked ? [...selected, key] : selected.filter((s) => s !== key)

    setSelected(newSelected)
    setFilterOptions(
      'area',
      newSelected.reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    )
  }

  const handleClear = () => {
    setSelected([])
    clearFilterOptions('area')
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='rounded-full'>
          <Settings2Icon />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36'>
        <DropdownMenuLabel className='text-center'>Table Area</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {areaOptions.map((opt) => (
          <DropdownMenuCheckboxItem
            key={opt.key}
            checked={selected.includes(opt.key as string)}
            onCheckedChange={(checked) => handleToggle(opt.key as string, Boolean(checked))}
            className='cursor-pointer hover:bg-accent hover:text-accent-foreground'
          >
            {opt.label}
          </DropdownMenuCheckboxItem>
        ))}
        {selected.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <Button variant='ghost' className='w-full px-2 py-1' onClick={handleClear}>
              Clear filters
            </Button>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SelectAreaButton
