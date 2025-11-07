// prettier-ignore
"use client"

import React from 'react'
import Portal from '../portal/Portal'
import { cn } from '@/libs/utils'

const Modal = ({
  children,
  overlay = true,
  itemCenter = true,
}: {
  children: React.ReactNode
  overlay?: boolean
  itemCenter?: boolean
}) => {
  return (
    <Portal>
      <div
        className={cn(
          'absolute left-0 top-0 w-screen h-screen z-50',
          overlay && 'bg-black/50',
          itemCenter && 'flex-center justify-center',
        )}
      >
        {children}
      </div>
    </Portal>
  )
}

export default Modal
