import { cn } from '@/libs/utils'
import { TriangleAlert } from 'lucide-react'
import { FieldError } from 'react-hook-form'

interface CustomFormMessageProps {
  error?: FieldError
  message?: string
  className?: string
}

export const CustomFormMessage = ({ error, message, className }: CustomFormMessageProps) => {
  const body = error ? String(error.message) : message
  if (!body) {
    return null
  }

  return (
    <span className={cn('flex items-center gap-1 w-full mt-1.5 text-sm font-medium text-destructive', className)}>
      <TriangleAlert size={12} />
      {body}
    </span>
  )
}
