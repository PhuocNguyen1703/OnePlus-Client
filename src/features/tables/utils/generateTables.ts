type TableStatus = 'available' | 'occupied' | 'reserved' | 'locked' | 'cleaning'
type TableArea = 'floor1' | 'floor2' | 'floor3'

interface TableProps {
  _id: string
  label: string
  status: TableStatus
  seatCount: number
  area: TableArea
}

const statuses: TableStatus[] = ['available', 'occupied', 'reserved', 'locked', 'cleaning']
const areas: TableArea[] = ['floor1', 'floor2', 'floor3']
const seatCounts = [2, 4, 6, 8, 10]

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateTables(n: number): TableProps[] {
  return Array.from({ length: n }, (_, i) => {
    const id = i + 1
    return {
      _id: `t-${id.toString().padStart(3, '0')}`,
      label: `T-${id.toString().padStart(2, '0')}`,
      status: getRandom(statuses),
      seatCount: getRandom(seatCounts),
      area: getRandom(areas),
    }
  })
}
