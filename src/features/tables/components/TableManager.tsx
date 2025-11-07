// prettier-ignore
"use client"

import Table, { TableProps } from './Table'
import { filterTables } from '../utils/filterTable'
import { useDialogActions, useFilterOptions } from '@/stores/table.store'
import { TableDialogs } from './TableDialog'

const TableManager = ({ initialTables }: { initialTables: TableProps[] }) => {
  const filterOptions = useFilterOptions()
  const { openDialog } = useDialogActions()

  const filteredTables = filterTables(initialTables, filterOptions)

  const dialogMap: Record<TableProps['status'], (table: TableProps) => void> = {
    locked: (table) => openDialog('edit', table),
    reserved: (table) => openDialog('reservation', table),
    occupied: (table) => openDialog('occupied', table),
    cleaning: (table) => openDialog('cleaning', table),
    available: (table) => openDialog('available', table),
  }

  const handleTableClick = (table: TableProps) => {
    dialogMap[table.status]?.(table)
  }

  return (
    <>
      <div className='px-5 py-4 w-full flex-1 overflow-y-auto'>
        <div className='flex flex-wrap gap-x-10 gap-y-14 p-5 justify-evenly'>
          {filteredTables.map((table, _) => (
            <div key={table._id} onClick={() => handleTableClick(table)}>
              <Table {...table} />
            </div>
          ))}
        </div>
      </div>

      <TableDialogs />
    </>
  )
}

export default TableManager
