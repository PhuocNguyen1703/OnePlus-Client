import Image from 'next/image'
import { logo } from '../../public/images'
import { cn } from '@/libs/utils'

const Logo = ({ size = 30, styleText = '', className }: { size?: number; styleText?: string; className?: string }) => {
  return (
    <div className={cn('flex items-center gap-1 select-none', className)}>
      <Image className='object-cover' alt='logo' height={size} width={size} src={logo} priority quality={100} />
      <p className={cn('text-xl font-semibold', styleText)}>
        One
        <span className=' bg-[linear-gradient(100deg,_#40ddff_-6.08%,_#7612fa_25.08%,_#fa12e3)] bg-clip-text text-transparent'>
          Plus
        </span>
      </p>
    </div>
  )
}

export default Logo
