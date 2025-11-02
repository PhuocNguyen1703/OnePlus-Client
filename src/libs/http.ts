import envConfig from '@/config'
import { redirect } from 'next/navigation'

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

type EntityErrorPayload = {
  success: boolean
  message: string
  fields: {
    field: string
    message: string
  }[]
}

const ENTITY_ERR_STATUS_CODE = 422
const AUTHENTICATION_ERR_STATUS_CODE = 401

export class HttpError extends Error {
  status: number
  payload: {
    message: string
    [key: string]: any
  }
  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error')
    this.status = status
    this.payload = payload
  }
}

export class EntityError extends HttpError {
  status: 422
  payload: EntityErrorPayload
  constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
    super({ status, payload })
    this.status = status
    this.payload = payload
  }
}

let clientLogoutRequest: Promise<any> | null = null
const isClient = () => typeof window !== 'undefined'
const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options: CustomOptions | undefined,
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined

  const baseHeaders = {
    'Content-Type': 'application/json',
  }
  const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl

  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method,
  })

  const payload: Response = await res.json()

  const data = {
    status: res.status,
    payload,
  }

  const handleClientAuthError = async () => {
    if (clientLogoutRequest) return

    clientLogoutRequest = fetch('/api/auth/sign-out', {
      method: 'POST',
      body: JSON.stringify({ force: true }),
      headers: { ...baseHeaders } as any,
    })

    try {
      await clientLogoutRequest
    } catch (error) {
      console.error('Logout request failed:', error)
    } finally {
      localStorage.removeItem('tokenExp')
      clientLogoutRequest = null
      // location.href = "/sign-in";
    }
  }

  const handleServerAuthError = () => {
    fetch('/api/auth/sign-out', {
      method: 'POST',
      headers: { ...baseHeaders } as any,
    }).catch(() => {})
    // redirect("/sign-in");
  }

  //Interceptor
  if (!res.ok) {
    switch (res.status) {
      case ENTITY_ERR_STATUS_CODE:
        throw new EntityError(data as { status: 422; payload: EntityErrorPayload })

      case AUTHENTICATION_ERR_STATUS_CODE:
        if (isClient()) {
          handleClientAuthError()
        } else {
          handleServerAuthError()
        }
        break

      default:
        throw new HttpError(data)
    }
  }

  return data
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('GET', url, options)
  },
  post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('DELETE', url, { ...options, body })
  },
}

export default http
