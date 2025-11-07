// prettier-ignore
"use client"

import { PanelLeftIcon } from 'lucide-react'
import useSidebarStore from '@/stores/sidebar.store'
import { Button } from '@/components/ui/button'

export const SidebarToggle = () => {
  const { isLargeSidebarOpen, toggleSidebar } = useSidebarStore()
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleSidebar}
      aria-pressed={isLargeSidebarOpen}
      aria-label={isLargeSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
    >
      <PanelLeftIcon />
    </Button>
  )
}
