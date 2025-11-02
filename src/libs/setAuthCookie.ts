import envConfig from '@/config'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

export const setAuthCookie = async (name: 'accessToken' | 'refreshToken', token: string) => {
  const cookieStore = await cookies()
  const decodedToken = jwtDecode(token)
  const expiresAt = (decodedToken.exp as number) - Math.floor(Date.now() / 1000)

  cookieStore.set(name, token, {
    httpOnly: true,
    secure: envConfig.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: expiresAt,
  })

  return decodedToken.exp
}
