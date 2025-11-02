import React from 'react'
import { TableStatus } from '../types'
import { tableStatus } from '../constants'

export interface TableProps {
  _id: string
  label: string
  seatCount: number
  status: TableStatus
  area: string
}

const Table: React.FC<TableProps> = ({ label, seatCount, status }) => {
  const tableHeight = 80
  const baseTableWidth = tableHeight
  const tableWidth = (baseTableWidth * Math.max(2, seatCount - 2)) / 2
  const padding = 4

  const sideSeats = Math.min(seatCount, 2)
  const leftSeats = sideSeats >= 1 ? 1 : 0
  const rightSeats = sideSeats >= 2 ? 1 : 0

  const remain = Math.max(seatCount - sideSeats, 0)
  const topSeats = Math.ceil(remain / 2)
  const bottomSeats = Math.floor(remain / 2)

  const distributeChairs = (count: number, side: 'top' | 'bottom' | 'left' | 'right') => {
    if (count <= 0) return []

    return Array.from({ length: count }, (_, i) => {
      if (side === 'top' || side === 'bottom') {
        const pos = (tableWidth / (count + 1)) * (i + 1)
        return {
          width: `calc(${tableHeight}px * 0.6)`,
          height: '8px',
          left: `${pos}px`,
          [side]: `calc(-${padding}px - 8px)`,
          transform: 'translateX(-50%)',
        }
      }

      if (side === 'left' || side === 'right') {
        return {
          height: `calc(${tableHeight}px * 0.6)`,
          width: '8px',
          top: '50%',
          [side]: `calc(-${padding}px - 8px)`,
          transform: 'translateY(-50%)',
        }
      }

      return {}
    })
  }

  const chairs = [
    ...distributeChairs(topSeats, 'top'),
    ...distributeChairs(bottomSeats, 'bottom'),
    ...distributeChairs(leftSeats, 'left'),
    ...distributeChairs(rightSeats, 'right'),
  ]

  const normalizedStatus = String(status).toLowerCase().trim()
  const statusMeta = (tableStatus as Record<string, any>)[normalizedStatus]

  const renderStatusIcon = () => {
    if (!statusMeta?.icon) return null
    const Icon = statusMeta.icon
    return <Icon size={20} color={statusMeta.color} />
  }

  return (
    <div style={{ width: `${tableWidth}px` }} className='relative h-fit'>
      <div
        style={{
          width: `${tableWidth}px`,
          height: `${tableHeight}px`,
          border: `1px solid ${statusMeta.color}50`,
          backgroundColor: `${statusMeta.color}30`,
        }}
        className='relative rounded-md flex flex-col items-center justify-center shadow-md cursor-pointer hover:opacity-70'
      >
        <span className=' font-medium'>{label}</span>
        {statusMeta && <div className='absolute top-1.5 right-1.5'>{renderStatusIcon()}</div>}
      </div>

      {chairs.map((chair, index) => (
        <div
          key={index}
          className='absolute rounded-md bg-gray-100 border border-gray-300'
          style={{
            ...chair,
          }}
        />
      ))}
    </div>
  )
}

export default Table
