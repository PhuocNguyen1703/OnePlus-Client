import { ForgotPasswordBodyType, OTPBodyType, ResetPasswordBodyType, SignInBodyType } from '@/features/auth/schemas'
import http from '@/libs/http'

const authApiRequest = {
  signIn: (body: SignInBodyType) => http.post('/api/v1/auth/login', body),
  verifyEmail: (body: OTPBodyType) => http.post(`/api/v1/auth/verify-email/${body._id}`, { code: body.code }),
  forgotPassword: (body: ForgotPasswordBodyType) => http.post('/api/v1/auth/forgot-password', body),
  resetPassword: (body: ResetPasswordBodyType) =>
    http.post(`/api/v1/auth/reset-password/${body.token}`, {
      password: body.password,
    }),
  refreshTokenFromNextServerToServer: (refreshToken: string) =>
    http.post(
      '/api/v1/auth/refresh-token',
      {},
      {
        headers: {
          Cookie: refreshToken,
        },
      },
    ),
  refreshTokenFromNextClientToNextServer: () => http.post('/api/v1/auth/refresh-token', {}, { baseUrl: '' }),
  signOutFromNextServerToServer: (refreshToken: string) =>
    http.post(
      '/api/v1/auth/logout',
      {},
      {
        headers: {
          Cookie: refreshToken,
        },
      },
    ),
  signOutFromNextClientToNextServer: () =>
    http.post(
      '/api/v1/auth/sign-out',
      {},
      {
        baseUrl: '',
      },
    ),
}

export default authApiRequest
