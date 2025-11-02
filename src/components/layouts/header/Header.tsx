import { Bell } from 'lucide-react'
import UserMenu from './UserMenu'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useTranslations } from 'next-intl'
import { SidebarToggle } from '../sidebar/SidebarToggle'

const Header = () => {
  const t = useTranslations('Components')

  return (
    <header
      className='sticky top-0 left-0 right-0 flex-center justify-between h-[56px] p-4 border-b z-50
    '
    >
      <SidebarToggle />
      <TooltipProvider>
        <div className='flex-center space-x-3'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='outline' size='icon' className='relative shadow-sm rounded-full'>
                <Bell size={20} />
                <span className='absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-800'></span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('Header.notificationTooltip')}</p>
            </TooltipContent>
          </Tooltip>
          <UserMenu />
        </div>
      </TooltipProvider>
    </header>
  )
}

export default Header
