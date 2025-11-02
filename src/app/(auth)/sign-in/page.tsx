import SignInForm from '@/features/auth/components/SignInForm'

const SignIn = () => {
  return (
    <div className='p-5 mt-5 prose'>
      <h1 className='text-center mb-0'>Welcome back!</h1>
      <p className='mt-2 text-base text-center'>Please sign in to continue.</p>
      <SignInForm />
    </div>
  )
}

export default SignIn
