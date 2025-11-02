import * as React from 'react'

import { cn } from '@/libs/utils'
import { EyeIcon, EyeClosed } from 'lucide-react'

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className='relative'>
      <input
        type={showPassword ? 'text' : 'password'}
        className={cn(
          'peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
      <span
        className='absolute top-1/2 -translate-y-1/2 right-2 p-1 rounded-full  cursor-pointer hover:bg-accent peer-placeholder-shown:hidden'
        onClick={() => setShowPassword((prevState) => !prevState)}
      >
        {showPassword ? <EyeIcon size={20} /> : <EyeClosed size={20} />}
      </span>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
