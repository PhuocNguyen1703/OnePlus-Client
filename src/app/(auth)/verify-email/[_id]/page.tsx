import BackToSignIn from '@/components/layouts/BackToSignIn'
import OtpForm from '@/features/auth/components/OtpForm'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const VerifyAccount = async ({ params }: { params: Promise<{ _id: string }> }) => {
  const { _id } = await params
  return (
    <div className='p-5 prose'>
      <span className='flex items-center justify-center w-fit mx-auto p-3 border rounded-xl shadow-lg'>
        <ShieldCheck size={28} />
      </span>
      <h2 className='mt-5 text-center mb-0'>Check your email</h2>
      <p className='mt-2 text-base text-center'>
        We&apos;ve emailed a 6-digit confirmation code. Please enter the code in below box to verify your account.
      </p>
      <OtpForm userId={_id} />
      <span className='block mt-5 text-center'>
        Don&apos;t receive code?{' '}
        <Link href='' className='no-underline hover:underline hover:underline-offset-2 hover:text-blue-800'>
          Resend code
        </Link>
      </span>
      <BackToSignIn />
    </div>
  )
}

export default VerifyAccount
