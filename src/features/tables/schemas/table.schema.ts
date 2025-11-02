import { z } from 'zod'

const statusEnum = z.enum(['available', 'reserved', 'occupied', 'cleaning', 'locked'])

export const TableSchema = z.object({
  label: z.string(),
  area: z.string(),
  seatCount: z.number(),
  status: statusEnum,
  qrCode: z.string().optional(),
})

export type TableSchemaType = z.infer<typeof TableSchema>
