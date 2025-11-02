import { Table } from '@/tanstack/react-table'
import { Button } from '../ui/button'
import { SelectItem, Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { PaginationRange } from '@/hooks/usePagination'
import { cn } from '@/libs/utils'
import { DOTS } from '@/libs/constants'

interface PaginationProps<TData> {
  table: Table<TData>
}

export function Pagination<TData>({ table }: PaginationProps<TData>) {
  const paginationRange = PaginationRange({ table })

  const handleOnClickPage = (pageNumber: number | string) => {
    if (typeof pageNumber === 'number') {
      const pageIdx = pageNumber - 1
      table.setPageIndex(pageIdx)
    }
  }

  return (
    <div className='flex-center justify-between px-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className='flex-center space-x-6 lg:space-x-8'>
        <div className='flex-center space-x-2'>
          <p className='text-sm font-medium'>Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[5, 10, 20, 30].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className='flex-center gap-1'>
          <Button
            variant='outline'
            className='h-7 w-7 p-0'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Go to previous page</span>
            <ChevronLeftIcon size={18} />
          </Button>
          <div className='flex-center gap-1'>
            {paginationRange?.map((pageNumber, idx) => {
              // If the pageItem is a DOT, render the DOTS unicode character
              if (pageNumber === DOTS) {
                return (
                  <span key={idx} className='cursor-default select-none'>
                    &#8230;
                  </span>
                )
              }

              // Render our Page Pills
              return (
                <div
                  key={idx}
                  className={cn(
                    'flex-center justify-center w-7 h-7 leading-none border rounded-full cursor-pointer select-none hover:bg-blue-100',
                    pageNumber === table.getState().pagination.pageIndex + 1 &&
                      'bg-blue-500 text-white hover:bg-blue-500',
                  )}
                  onClick={() => handleOnClickPage(pageNumber)}
                >
                  {pageNumber}
                </div>
              )
            })}
          </div>
          <Button
            variant='outline'
            className='h-7 w-7 p-0'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
