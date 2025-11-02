'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForgotPassword } from '../hooks/useForgotPassword'
import { CustomFormMessage } from '@/components/ui/custom-form-message'
import { GradientButton } from '@/components/ui/gradient-button'
import Loader from '@/components/ui/loader'
import { useEffect } from 'react'

type ForgotPasswordProps = {
  setIsSubmitted: (value: boolean) => void
}

const ForgotPasswordForm = ({ setIsSubmitted }: ForgotPasswordProps) => {
  const { form, isPending, onSubmit } = useForgotPassword()
  const { errors, isSubmitSuccessful } = form.formState

  useEffect(() => {
    if (isSubmitSuccessful) return setIsSubmitted(true)
  }, [isSubmitSuccessful, setIsSubmitted])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-5 items-center'>
        <FormField
          control={form.control}
          name='email'
          render={({ field, fieldState }) => (
            <FormItem className='space-y-1 w-full'>
              <FormLabel className='text-primary'>Email</FormLabel>
              <FormControl>
                <Input className={errors?.email && 'input-err'} placeholder='Enter your email.' {...field} />
              </FormControl>
              <CustomFormMessage error={fieldState.error} />
            </FormItem>
          )}
        />
        {errors?.root && (
          <CustomFormMessage
            message={errors?.root?.message}
            className='px-2 py-3 mt-4 border border-destructive rounded-sm bg-destructive/5'
          />
        )}
        <GradientButton className='w-1/2 h-12 mt-8 text-base' type='submit' disabled={isPending}>
          {isPending ? <Loader /> : 'Send reset link'}
        </GradientButton>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
