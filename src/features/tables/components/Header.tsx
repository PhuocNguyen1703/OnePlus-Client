import React from 'react'
import ViewButton from './button/ViewButton'
import { AddTableDialog } from './dialog'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { SelectStatusButton } from './button/SelectStatusButton'
import { SelectSeatCountButton } from './button/SelectSeatCountButton'
import { SearchIcon } from 'lucide-react'
import { tableStatus } from '../constants'
import { ResetFiltersButton } from './button/ResetFiltersButton'

const Header = () => {
  return (
    <header className='sticky top-0 left-0 right-0 p-5 pb-2 bg-background z-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='hidden relative sm:flex items-center w-[300px] rounded-full shadow-xs border'>
            <Input
              type='text'
              placeholder='Search...'
              className='h-9 pr-12 border border-accent rounded-full focus-visible:ring-0'
            />
            <Separator orientation='vertical' className='absolute top-1/2 -translate-y-1/2 right-9 h-4/6 w-[2px]' />
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-0 right-0 bottom-0 rounded-l-none rounded-r-full'
            >
              <SearchIcon size={20} />
            </Button>
          </div>
          <SelectStatusButton />
          <SelectSeatCountButton />
          <ResetFiltersButton />
        </div>
        <div className='flex-center space-x-3'>
          <ViewButton />
          <AddTableDialog />
        </div>
      </div>
      <div className='flex-center justify-center h-9 px-3 mt-2 space-x-6'>
        {Object.entries(tableStatus).map(([status, { icon: Icon, color }]) => (
          <div key={status} className='flex-center space-x-1'>
            <Icon size={18} color={color} />
            <span className='capitalize'>{status}</span>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
