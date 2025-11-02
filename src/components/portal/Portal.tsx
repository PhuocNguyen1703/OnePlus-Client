'use client'

import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement>()

  useEffect(() => {
    const portal = document.createElement('div')
    document.body.appendChild(portal)

    setWrapper(portal)

    return () => {
      document.body.removeChild(portal)
    }
  }, [])

  if (!wrapper) return null

  return ReactDOM.createPortal(children, wrapper)
}

export default Portal
