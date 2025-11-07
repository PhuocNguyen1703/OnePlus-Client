// prettier-ignore
"use client"

import Link from 'next/link'
import { Item } from './Sidebar'
import { usePathname } from 'next/navigation'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/libs/utils'

type Props = {
  item: Item
  variant?: 'large' | 'small'
  onClick?: () => void
}

export const SidebarItem = ({ item, variant = 'large', onClick }: Props) => {
  const pathname = usePathname() || '/'
  const isActive = pathname === item.url || pathname.startsWith(item.url + '/')

  const largeBase =
    'flex-center gap-2 p-2 rounded-md select-none whitespace-pre hover:bg-accent hover:text-accent-foreground transition-colors'
  const largeActive = 'bg-primary text-primary-foreground font-medium hover:bg-primary hover:text-primary-foreground'

  const smallBase =
    'flex flex-col p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors'
  const smallActive = 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'

  const className =
    variant === 'large' ? cn(largeBase, isActive ? largeActive : '') : cn(smallBase, isActive ? smallActive : '')

  const Icon = item.icon as any

  const link = (
    <div className='relative'>
      <Link href={item.url} className={className} onClick={onClick} aria-current={isActive ? 'page' : undefined}>
        {Icon ? <Icon size={16} /> : null}
        {variant === 'large' ? <span className='text-sm'>{item.title}</span> : null}
      </Link>
    </div>
  )

  if (variant === 'small') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{link}</TooltipTrigger>
          <TooltipContent side='right'>
            <p>{item.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return link
}
