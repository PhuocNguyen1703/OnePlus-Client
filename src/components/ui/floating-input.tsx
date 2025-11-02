import * as React from 'react'

import { cn } from '@/libs/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <Input placeholder=' ' className={cn('peer h-12', className)} ref={ref} {...props} />
})
FloatingInput.displayName = 'FloatingInput'

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => {
    return (
      <Label
        className={cn(
          'peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-3 z-10 origin-[0] -translate-y-6 scale-[0.85] transform bg-background px-2 text-base text-gray-500 duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-3 peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background peer-focus:rtl:left-auto peer-focus:rtl:translate-x-1/4 cursor-text',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
FloatingLabel.displayName = 'FloatingLabel'

type FloatingLabelInputProps = InputProps & { label?: string }

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className='relative'>
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingInput, FloatingLabel, FloatingLabelInput }
