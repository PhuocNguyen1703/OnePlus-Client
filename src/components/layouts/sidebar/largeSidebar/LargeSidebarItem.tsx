'use client'

import { Item } from '../Sidebar'
import { SidebarItem } from '../SidebarItem'

export const LargeSidebarItem = ({ item }: { item: Item }) => {
  return <SidebarItem item={item} variant='large' />
}
