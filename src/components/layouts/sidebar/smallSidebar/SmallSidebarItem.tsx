import { Item } from '../Sidebar'
import { SidebarItem } from '../SidebarItem'

export const SmallSidebarItem = ({ item }: { item: Item }) => {
  return <SidebarItem item={item} variant='small' />
}
