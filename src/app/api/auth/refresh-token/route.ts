import authApiRequest from '@/apiRequests/auth'
import { HttpError } from '@/libs/http'
import { setAuthCookie } from '@/libs/setAuthCookie'
import { cookies } from 'next/headers'

export const POST = async () => {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get('refreshToken')?.value

  if (!refreshToken) {
    return Response.json(
      {
        status: 401,
        message: 'Can not receive refreshToken.',
      },
      { status: 401 },
    )
  }

  try {
    const result = await authApiRequest.refreshTokenFromNextServerToServer(refreshToken)

    const { newAccessToken, newRefreshToken } = (result.payload as any).data
    if (newAccessToken && newRefreshToken) {
      const tokenExp = await setAuthCookie('accessToken', newAccessToken)
      await setAuthCookie('refreshToken', newRefreshToken)

      return Response.json({
        status: 200,
        data: { tokenExp },
      })
    }
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, { status: error.status })
    } else {
      return Response.json({ status: 500, message: 'Internal server error.' }, { status: 500 })
    }
  }
}
