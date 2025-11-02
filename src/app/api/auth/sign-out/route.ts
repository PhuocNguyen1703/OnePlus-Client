import authApiRequest from '@/apiRequests/auth'
import { HttpError } from '@/libs/http'
import { cookies } from 'next/headers'

export const POST = async (request: Request) => {
  const cookieStore = await cookies()
  const refreshToken: string | undefined = cookieStore.get('refreshToken')?.value

  cookieStore.delete('accessToken')
  cookieStore.delete('refreshToken')

  const { force } = await request.json().catch(() => ({}))
  if (force) {
    return Response.json({ message: 'Forced logout successful.' }, { status: 200 })
  }

  if (refreshToken) {
    try {
      const result = await authApiRequest.signOutFromNextServerToServer(refreshToken as string)

      return Response.json(result.payload, {
        status: 200,
      })
    } catch (error) {
      console.log('lỗi>>>', error)

      if (error instanceof HttpError) {
        return Response.json(error.payload, { status: error.status })
      }

      return Response.json({ status: 500, message: 'Internal server error.' }, { status: 500 })
    }
  }

  return Response.json({ message: 'Logout successFul.' }, { status: 200 })
}
