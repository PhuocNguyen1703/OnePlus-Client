'use client'

import { cn } from '@/libs/utils'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'

const initialVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
}

type FadeAnimationProps = {
  children: React.ReactNode
  className?: string
  variants?: typeof initialVariants
  transition?: any
}

export const FadeAnimation = ({
  children,
  className,
  variants = initialVariants,
  transition = { duration: 0.3, ease: 'easeInOut' },
}: FadeAnimationProps) => {
  const pathname = usePathname()
  return (
    <motion.div
      key={pathname}
      {...variants}
      transition={transition}
      className={cn('flex flex-col w-[470px] p-5 pb-0 border rounded-lg shadow-2xl', className)}
    >
      {children}
    </motion.div>
  )
}
