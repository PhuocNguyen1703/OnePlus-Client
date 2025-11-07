// prettier-ignore
"use client"

import { useTokenManager } from '@/hooks/useTokenManager'

export default function CheckToken() {
  useTokenManager()
  return null
}
