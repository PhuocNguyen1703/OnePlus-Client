import { FilterState } from '@/stores/table.store'
import { TableProps } from '../components/Table'
import { extractCheckedKeys } from './extractCheckedKeys'
import { TableStatus } from '../types'

export const filterTables = (tables: TableProps[], filters: FilterState): TableProps[] => {
  const activeStatuses = extractCheckedKeys<TableStatus>(filters.status)
  const activeSeats = extractCheckedKeys(filters.seatCount)
  const activeAreas = extractCheckedKeys(filters.area)

  return tables.filter((table) => {
    const matchStatus = activeStatuses.length === 0 || activeStatuses.includes(table.status)

    const matchSeat = activeSeats.length === 0 || activeSeats.includes(String(table.seatCount))

    const matchArea = activeAreas.length === 0 || activeAreas.includes(table.area)

    return matchStatus && matchSeat && matchArea
  })
}
