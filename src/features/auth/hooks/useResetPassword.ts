import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResetPasswordBodyType, ResetPasswordSchema } from '../schemas/resetPasswordSchema'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { resetPassword } from '../actions/auth'

export const useResetPassword = () => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const router = useRouter()

  const form = useForm<ResetPasswordBodyType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      token: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (formData: ResetPasswordBodyType) => {
    if (isPending) return

    setIsPending(true)
    try {
      const res = await resetPassword(formData)

      if (!res.success) {
        form.setError('root', {
          type: res.type,
          message: res.message,
        })
        return
      }

      toast.success('Account verified successfully', {
        description: 'You can now login to your account',
        duration: 3000,
      })
      router.push('/sign-in')
    } catch (error: unknown) {
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
