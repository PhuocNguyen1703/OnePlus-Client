'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/libs/utils'
import {
  BabyIcon,
  BeefIcon,
  CupSodaIcon,
  DrumstickIcon,
  EllipsisIcon,
  FishIcon,
  FlameIcon,
  IceCreamIcon,
  LayoutGridIcon,
  LeafIcon,
  PackageIcon,
  PlusIcon,
  SaladIcon,
  SoupIcon,
  StarIcon,
  UtensilsCrossedIcon,
} from 'lucide-react'
import { useState } from 'react'

export const foodCategories = [
  { key: 'all', label: 'All Dishes', icon: LayoutGridIcon, count: 120 },
  {
    key: 'appetizers',
    label: 'Appetizers',
    icon: UtensilsCrossedIcon,
    count: 12,
  },
  { key: 'main_dishes', label: 'Main Dishes', icon: DrumstickIcon, count: 25 },
  { key: 'noodles_rice', label: 'Noodles & Rice', icon: SoupIcon, count: 18 },
  { key: 'hot_pots', label: 'Hot Pots', icon: FlameIcon, count: 10 },
  { key: 'grills', label: 'Grilled', icon: BeefIcon, count: 14 },
  { key: 'seafood', label: 'Seafood', icon: FishIcon, count: 11 },
  { key: 'vegetarian', label: 'Vegetarian', icon: LeafIcon, count: 9 },
  { key: 'soup', label: 'Soups', icon: SoupIcon, count: 7 },
  { key: 'desserts', label: 'Desserts', icon: IceCreamIcon, count: 8 },
  { key: 'drinks', label: 'Drinks', icon: CupSodaIcon, count: 20 },
  { key: 'specials', label: 'Specials', icon: StarIcon, count: 5 },
  { key: 'combos', label: 'Combos / Sets', icon: PackageIcon, count: 6 },
  { key: 'kids_menu', label: 'Kids Menu', icon: BabyIcon, count: 4 },
  { key: 'side_dishes', label: 'Side Dishes', icon: SaladIcon, count: 6 },
  { key: 'others', label: 'Others', icon: EllipsisIcon, count: 5 },
]

const DishesCategory = () => {
  const [activeKey, setActiveKey] = useState('all')

  return (
    <aside className='w-60 h-full p-4 space-y-1 border-r'>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-lg font-semibold'>Dishes Category</p>
        <Button size='icon' className='!rounded-full h-6 w-6'>
          <PlusIcon />
        </Button>
      </div>
      {foodCategories.map((cat) => {
        const Icon = cat.icon
        const isActive = cat.key === activeKey

        return (
          <button
            key={cat.key}
            onClick={() => setActiveKey(cat.key)}
            className={cn(
              'flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all',
              isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground',
            )}
          >
            <div className='flex items-center gap-2'>
              <Icon className={cn(isActive && 'text-primary')} size={20} />
              <span>{cat.label}</span>
            </div>

            <Badge
              variant={isActive ? 'default' : 'secondary'}
              className={cn('rounded-full px-2 py-0.5 text-xs', !isActive && 'text-muted-foreground')}
            >
              {cat.count}
            </Badge>
          </button>
        )
      })}
    </aside>
  )
}

export default DishesCategory
