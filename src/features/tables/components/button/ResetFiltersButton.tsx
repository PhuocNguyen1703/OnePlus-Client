'use client'

import { Button } from '@/components/ui/button'
import { useFilterActions, useFilterOptions } from '@/stores/table.store'
import { extractCheckedKeys } from '../../utils/extractCheckedKeys'
import { CircleXIcon } from 'lucide-react'

export const ResetFiltersButton = () => {
  const filterOptions = useFilterOptions()
  const { clearFilterOptions } = useFilterActions()

  const hasFilters =
    extractCheckedKeys(filterOptions.status).length > 0 || extractCheckedKeys(filterOptions.seatCount).length > 0

  const handleReset = () => {
    clearFilterOptions('status')
    clearFilterOptions('seatCount')
  }

  if (!hasFilters) return null

  return (
    <Button variant='destructive' size='sm' className='rounded-full' onClick={handleReset}>
      Reset
      <CircleXIcon />
    </Button>
  )
}
