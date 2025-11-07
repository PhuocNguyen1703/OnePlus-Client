// prettier-ignore
"use client"

import { Blend, Languages, LifeBuoy, MonitorCog, MoonStar, Power, Settings, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { useSignOut } from '@/features/auth/hooks/useSignOut'

const UserMenu = () => {
  const t = useTranslations('Components.UserMenu')
  const { setTheme } = useTheme()
  const { signOut } = useSignOut()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-hidden'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className='rounded-full shadow-md'>
                <AvatarImage
                  src='https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='avatar'
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('tooltip')}</p>
            </TooltipContent>
          </Tooltip>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-fit min-w-60 mr-1 p-2'>
          <div className='border rounded-sm p-2 mb-3 shadow-md'>
            <div className='flex-center gap-2 border-b p-1'>
              <Avatar className='h-9 w-9'>
                <AvatarImage
                  src='https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='avatar'
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
              <div>
                <p className='font-semibold'>{t('username')}</p>
                <p className='text-xs'>{t('role')}</p>
              </div>
            </div>
            <Button variant='secondary' size='sm' className='w-full mt-1'>
              {t('Button.profile')}
            </Button>
          </div>
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className='p-2'>
                <Blend size={20} className='mr-2' />
                <span>{t('Dropdown.title')}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem className='space-x-1.5' onClick={() => setTheme('light')}>
                    <Sun size={16} />
                    <span>{t('Dropdown.item.light')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='space-x-1.5' onClick={() => setTheme('dark')}>
                    <MoonStar size={16} />
                    <span>{t('Dropdown.item.dark')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='space-x-1.5' onClick={() => setTheme('system')}>
                    <MonitorCog size={16} />
                    <span>{t('Dropdown.item.system')}</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className='p-2 space-x-2'>
              <Settings size={20} />
              <span>{t('Button.setting')}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='p-2 space-x-2'>
              <LifeBuoy size={20} />
              <span>{t('Button.support')}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='p-2 space-x-2' onClick={signOut}>
            <Power size={20} />
            <span>{t('Button.signout')}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserMenu
