import {
  CalendarClockIcon,
  HandPlatterIcon,
  type LucideIcon,
  ShieldAlertIcon,
  SmilePlusIcon,
  SprayCanIcon,
} from 'lucide-react'
import { Option, TableStatus } from '../types'

export const areaOptions: Option[] = [
  { key: 'floor1', label: '1st Floor' },
  { key: 'floor2', label: '2nd Floor' },
  { key: 'floor3', label: '3rd Floor' },
]

export const tableStatus: Record<TableStatus, { icon: LucideIcon; color: string }> = {
  available: {
    icon: SmilePlusIcon,
    color: '#008000',
  },
  reserved: {
    icon: CalendarClockIcon,
    color: '#ff7b00',
  },
  occupied: {
    icon: HandPlatterIcon,
    color: '#0077b6',
  },
  cleaning: {
    icon: SprayCanIcon,
    color: '#212529',
  },
  locked: {
    icon: ShieldAlertIcon,
    color: '#d00000',
  },
}

export const seatCountOptions: Option[] = [
  { key: 2, label: '2 seats' },
  { key: 4, label: '4 seats' },
  { key: 6, label: '6 seats' },
  { key: 8, label: '8 seats' },
]
