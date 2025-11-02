import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPaths = ['/sign-in', '/verify', '/forgot-password']

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = request.cookies.get('accessToken')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  const isAuthPath = authPaths.some((path) => pathname.startsWith(path))
  const isLoggedIn = !!(accessToken || refreshToken)

  if (!isLoggedIn && !isAuthPath) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (isLoggedIn && isAuthPath) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
