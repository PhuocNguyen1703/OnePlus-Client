import SignUpForm from '@/app/(auth)/_components/SignUpForm'

const SignUp = () => {
  return (
    <div className='relative w-[470px] p-10 rounded-md bg-white'>
      <h1 className='text-4xl font-bold text-center'>Create Your Account</h1>
      <p className='text-base text-center'>Welcome! Please fill in the details to get started.</p>
      <SignUpForm />
      <span className='block mt-5 text-center'>
        Already have an account? <strong>Sign In</strong>
      </span>
    </div>
  )
}

export default SignUp
