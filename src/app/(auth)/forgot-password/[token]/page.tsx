import BackToSignIn from '@/components/layouts/BackToSignIn'
import ResetPasswordForm from '@/features/auth/components/ResetPasswordForm'
import { KeyRound } from 'lucide-react'

const ResetPassword = async ({ params }: { params: Promise<{ token: string }> }) => {
  const { token } = await params

  return (
    <div className='p-5 prose'>
      <span className='flex items-center justify-center w-fit mx-auto p-3 border rounded-xl shadow-lg'>
        <KeyRound size={28} />
      </span>
      <h2 className='text-center mt-5 mb-0'>New password</h2>
      <p className='mt-2 text-base text-center'>You can set new password for your account.</p>
      <ResetPasswordForm token={token} />
      <BackToSignIn />
    </div>
  )
}

export default ResetPassword
