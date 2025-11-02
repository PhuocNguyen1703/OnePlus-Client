import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { OTPSchema, OTPBodyType } from '../schemas/otpSchema'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { verifyEmail } from '../actions/auth'

export const useOTP = () => {
  const router = useRouter()
  const [isPending, setIsPending] = useState<boolean>(false)

  const form = useForm<OTPBodyType>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      _id: '',
      code: '',
    },
  })

  const onSubmit = async (formData: OTPBodyType) => {
    if (isPending) return

    setIsPending(true)
    try {
      const res = await verifyEmail(formData)

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
    } catch (error: any) {
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
