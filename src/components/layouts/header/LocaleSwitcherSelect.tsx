import Image, { StaticImageData } from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {
  defaultValue: String
  label: String
  items: Array<{ icon: StaticImageData; label: String; value: String }>
}

export function LocaleSwitcherSelect({ defaultValue, label, items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>open</DropdownMenuTrigger>
      <DropdownMenuContent className='mt-2'>
        <DropdownMenuLabel className='text-center'>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item, idx) => (
          <DropdownMenuItem key={idx} className='gap-2 cursor-pointer'>
            <Image src={item.icon} width={25} height={25} alt='localeIcon' />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
