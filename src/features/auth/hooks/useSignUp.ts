import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, SignUpBodyType } from '../schemas/signUpSchema'

export const useSignUp = () => {
  const form = useForm<SignUpBodyType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
  })

  const signUp = async (data: SignUpBodyType) => {
    console.log(data)
  }

  return { form, signUp }
}
