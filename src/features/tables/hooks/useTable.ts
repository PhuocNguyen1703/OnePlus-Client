import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TableSchema, TableSchemaType } from '../schemas'

export const useTable = (defaultValues?: Partial<TableSchemaType> & { _id?: string }) => {
  const form = useForm<TableSchemaType>({
    resolver: zodResolver(TableSchema),
    defaultValues: {
      label: '',
      area: 'floor1',
      seatCount: 2,
      status: 'locked',
      ...defaultValues,
    },
  })

  const addTable = async (formData: TableSchemaType) => {
    console.log(formData)
  }

  const editTable = async (formData: TableSchemaType) => {
    console.log(formData)
  }

  const deleteTable = async (tableId: string | undefined) => {
    console.log(tableId)
  }

  return { form, addTable, editTable, deleteTable }
}
