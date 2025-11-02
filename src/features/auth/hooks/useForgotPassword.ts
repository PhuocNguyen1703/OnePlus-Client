import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ForgotPasswordBodyType, ForgotPasswordSchema } from '../schemas/forgotPasswordSchema'
import { useState } from 'react'
import { forgotPassword } from '../actions/auth'

export const useForgotPassword = () => {
  const [isPending, setIsPending] = useState<boolean>(false)

  const form = useForm<ForgotPasswordBodyType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (formData: ForgotPasswordBodyType) => {
    if (isPending) return

    setIsPending(true)
    try {
      const res = await forgotPassword(formData)

      if (!res.success) {
        form.setError('root', {
          type: res.type,
          message: res.message,
        })
        return
      }
    } catch (error) {
      form.setError('root', {
        type: 'server',
        message: 'Something went wrong!',
      })
    } finally {
      setIsPending(false)
    }
  }

  return { form, isPending, onSubmit }
}
