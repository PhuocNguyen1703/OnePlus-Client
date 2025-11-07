// prettier-ignore
"use client"

import { LargeSidebarItem } from './LargeSidebarItem'
import { HeaderLogo } from '@/components/layouts/header/HeaderLogo'
import { cn } from '@/libs/utils'
import useSidebarStore from '@/stores/sidebar.store'
import { Fragment, useState } from 'react'
import { Item, NavMain } from '../Sidebar'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  nav: NavMain[]
}

export const LargeSidebar = ({ nav }: Props) => {
  const { isLargeSidebarOpen, isSmallSidebarOpen, closeSidebar } = useSidebarStore()

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (key: string) => setOpenGroups((s) => ({ ...s, [key]: !s[key] }))

  return (
    <>
      {isSmallSidebarOpen && <div onClick={closeSidebar} className='lg:hidden fixed inset-0 bg-black/20' />}
      <div
        className={cn(
          'lg:sticky absolute top-0 bottom-0 flex-col w-52 h-full overflow-y-auto scrollbar-hidden px-2 pb-2 bg-background',
          isLargeSidebarOpen ? 'lg:flex' : 'lg:hidden',
          isSmallSidebarOpen ? 'flex max-h-screen' : 'hidden',
        )}
      >
        <div className='sticky top-0 flex h-[56px] ml-[5px] border-b border-secondary'>
          <HeaderLogo />
        </div>
        {nav.map((navGroup: NavMain, idx) => {
          const key = navGroup.title ?? String(idx)
          const isOpen = !!openGroups[key]
          const hasItems = Array.isArray(navGroup.items) && navGroup.items.length > 0

          return (
            <Fragment key={key}>
              {hasItems ? (
                <div
                  onClick={() => toggleGroup(key)}
                  aria-expanded={isOpen}
                  aria-controls={`sidebar-group-${idx}`}
                  className='w-full flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-accent/40'
                >
                  {navGroup.icon && <navGroup.icon size={20} />}
                  <span className='flex-1 select-none'>{navGroup.title}</span>
                  <ChevronRightIcon
                    size={16}
                    className={cn('transition-transform', isOpen ? 'rotate-90' : 'rotate-0')}
                  />
                </div>
              ) : (
                <Link href={navGroup.url} className='flex items-center gap-2 p-2 rounded-md hover:bg-accent/40'>
                  {navGroup.icon && <navGroup.icon size={20} />}
                  <span className=''>{navGroup.title}</span>
                </Link>
              )}

              <div
                id={`sidebar-group-${idx}`}
                className={cn(
                  'flex flex-col gap-0.5 pl-2 ml-4.5 overflow-hidden transition-[max-height] duration-200',
                  isOpen ? 'max-h-auto border-l' : 'max-h-0',
                )}
                aria-hidden={!isOpen}
              >
                {navGroup.items?.map((item: Item) => (
                  <LargeSidebarItem key={item.title} item={item} />
                ))}
              </div>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}
