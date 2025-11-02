import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const BackToSignIn = () => {
  return (
    <Link
      href={'/sign-in'}
      className='flex items-center gap-1 w-fit mx-auto mt-5 opacity-65 no-underline hover:opacity-100'
    >
      <ArrowLeft size={16} />
      Back to sign in
    </Link>
  )
}

export default BackToSignIn
