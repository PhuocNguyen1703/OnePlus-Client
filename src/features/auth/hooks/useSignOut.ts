import authApiRequest from '@/apiRequests/auth'
import { useRouter } from 'next/navigation'

export const useSignOut = () => {
  const router = useRouter()

  const signOut = async () => {
    localStorage.removeItem('tokenExp')

    try {
      await authApiRequest.signOutFromNextClientToNextServer()

      // router.push("/sign-in");
    } catch (error) {
      console.error('Error during sign out:', error)
    }
  }
  return { signOut }
}
