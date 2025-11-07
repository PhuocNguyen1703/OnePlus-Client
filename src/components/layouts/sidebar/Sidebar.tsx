// prettier-ignore
"use client"

import { SmallSidebar } from './smallSidebar'
import { LargeSidebar } from './largeSidebar'
import { ClipboardListIcon, GraduationCap, LayoutPanelLeftIcon, type LucideIcon } from 'lucide-react'

export type Item = {
  title: string
  url: string
  icon?: LucideIcon
}

export type NavMain = Item & {
  items?: Item[]
}

const Sidebar = () => {
  // const t = useTranslations("Components.Sidebar.item");

  const navMain: NavMain[] = [
    {
      title: 'Playground',
      icon: LayoutPanelLeftIcon,
      url: '#',
      items: [
        { icon: LayoutPanelLeftIcon, title: 'History', url: '#' },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Play',
      icon: LayoutPanelLeftIcon,
      url: '#',
    },
  ]

  return (
    <section className='border-r z-999'>
      {/* <SmallSidebar nav={navMain} /> */}
      <LargeSidebar nav={navMain} />
    </section>
  )
}

export default Sidebar
