import { DOTS } from '@/libs/constants'
import { Table } from '@/tanstack/react-table'
import _ from 'lodash'

interface PaginationProps<TData> {
  table: Table<TData>
  siblingCount?: number
}

export function PaginationRange<TData>({ table, siblingCount = 1 }: PaginationProps<TData>) {
  const totalPageCount = table.getPageCount()
  const currentPage = table.getState().pagination.pageIndex + 1

  const range = (start: number, end: number) => {
    let length = end - start + 1

    return Array.from({ length }, (_, idx) => idx + start)
  }

  console.log('totalPage', totalPageCount)
  console.log('currentPage', currentPage)

  const totalPageNumbers = siblingCount + 5

  if (totalPageNumbers >= totalPageCount) {
    console.log(range(1, totalPageCount))
    return range(1, totalPageCount)
  }

  const leftSiblingIdx = Math.max(currentPage - siblingCount, 1)
  const showLeftDots = leftSiblingIdx > 2
  console.log(leftSiblingIdx)

  const rightSiblingIdx = Math.min(currentPage + siblingCount, totalPageCount)
  const showRightDots = rightSiblingIdx < totalPageCount - 1
  console.log(rightSiblingIdx)

  const firstPageIdx = 1
  const lastPageIdx = totalPageCount

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 1 + 2 * siblingCount
    let leftRange = range(1, leftItemsCount)

    return [...leftRange, DOTS, totalPageCount]
  }

  if (showLeftDots && !showRightDots) {
    let rightItemsCount = 1 + 2 * siblingCount
    let rightRange = range(totalPageCount - rightItemsCount + 1, totalPageCount)
    return [firstPageIdx, DOTS, ...rightRange]
  }

  let middleRange = range(leftSiblingIdx, rightSiblingIdx)
  return [firstPageIdx, DOTS, ...middleRange, DOTS, lastPageIdx]
}
