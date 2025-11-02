import authApiRequest from '@/apiRequests/auth'
import { useAuthStore } from '@/stores/auth.store'
import { useEffect, useRef } from 'react'

const REFRESH_THRESHOLD_SECONDS = 15
const CHECK_INTERVAL = 20 * 1000 // 10 seconds

export const useTokenManager = () => {
  const { setAuth, isTokenValid, willExpireSoon, isRefreshing, setRefreshing } = useAuthStore()

  const refreshFailedRef = useRef(false)

  // const bcRef = useRef<BroadcastChannel | null>(null);

  const refreshToken = async () => {
    if (isRefreshing || refreshFailedRef.current) return
    setRefreshing(true)

    try {
      const res = await authApiRequest.refreshTokenFromNextClientToNextServer()
      const newTokenExp = (res.payload as any)?.data?.tokenExp

      if (newTokenExp) {
        setAuth(newTokenExp)
        refreshFailedRef.current = false

        // bcRef.current?.postMessage({
        //   type: "tokenRefreshed",
        //   tokenExp: newTokenExp,
        // });
      } else {
        console.error('Invalid token response:', res)
        refreshFailedRef.current = true
      }
    } catch (error) {
      console.error('Refresh error:', error)
      refreshFailedRef.current = true
    } finally {
      setRefreshing(false)
    }
  }

  // Initial check to see if the token is valid
  useEffect(() => {
    if (!isTokenValid()) {
      refreshToken()
    }
  }, [])

  // Silently refresh the token at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      if (willExpireSoon(REFRESH_THRESHOLD_SECONDS)) {
        refreshToken()
      }
    }, CHECK_INTERVAL)

    return () => clearInterval(interval)
  }, [willExpireSoon])

  // Check if the token is valid when the component mounts (or when the user focuses the window)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!isTokenValid()) {
          refreshToken()
        }
        console.log('Token refreshed on visibility change')
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isTokenValid])

  // Listen for messages from the BroadcastChannel (sync across tabs)

  // useEffect(() => {
  //   bcRef.current = new BroadcastChannel("auth_channel");

  //   bcRef.current.onmessage = (e) => {
  //     if (e.data?.tokenExp) {
  //       setAuth(e.data.tokenExp);
  //     }
  //   };
  //   return () => bcRef.current?.close();
  // }, []);
}
