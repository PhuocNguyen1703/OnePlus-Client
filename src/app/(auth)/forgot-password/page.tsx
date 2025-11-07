// prettier-ignore
"use client"

import BackToSignIn from '@/components/layouts/BackToSignIn'
import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm'
import { Fingerprint } from 'lucide-react'
import { useState } from 'react'

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  return (
    <div className='p-5 prose'>
      <span className='flex items-center justify-center w-fit mx-auto p-3 border rounded-xl shadow-lg'>
        <Fingerprint size={28} />
      </span>
      {isSubmitted ? (
        <>
          <h2 className='text-center mt-5 mb-0'>Recovery link sent!</h2>
          <p className='mt-2 text-2xl text-center'>Now, check your email.</p>
        </>
      ) : (
        <>
          <h2 className='text-center mt-5 mb-0'>Forgot Password?</h2>
          <p className='mt-2 text-base text-center'>No worries,We&apos;ll send you a link to reset your password.</p>
          <ForgotPasswordForm setIsSubmitted={setIsSubmitted} />
        </>
      )}
      <BackToSignIn />
    </div>
  )
}

export default ForgotPassword
