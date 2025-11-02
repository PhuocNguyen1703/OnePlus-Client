import { TableProps } from '../components/Table'

export const groupBySeatCount = (tables: TableProps[]): Record<number, TableProps[]> => {
  return tables.reduce<Record<number, TableProps[]>>((acc, t) => {
    if (!acc[t.seatCount]) acc[t.seatCount] = []
    acc[t.seatCount].push(t)
    return acc
  }, {})
}
