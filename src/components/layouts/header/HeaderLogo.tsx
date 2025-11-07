// prettier-ignore
"use client"

import Link from 'next/link'
import Logo from '../../Logo'
import useSidebarStore from '@/stores/sidebar.store'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const HeaderLogo = ({ hideText = false }: { hideText?: boolean }) => {
  const t = useTranslations('Components.Header')
  return (
    <div className='flex-center block gap-2 shrink-0 '>
      <Link href='/'>
        <Logo size={30} styleText={hideText ? 'hidden' : ''} />
      </Link>
    </div>
  )
}
