// prettier-ignore
"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { PasswordInput } from '@/components/ui/password-input'
import { cn } from '@/libs/utils'
import { GradientButton } from '@/components/ui/gradient-button'
import { CustomFormMessage } from '@/components/ui/custom-form-message'
import { useResetPassword } from '../hooks/useResetPassword'
import { useEffect } from 'react'

const ResetPasswordForm = ({ token }: { token: string }) => {
  const { form, onSubmit } = useResetPassword()
  const { errors } = form.formState

  useEffect(() => {
    form.setValue('token', token)
  }, [token, form])

  return (
    <Form {...form}>
      <form className=' mt-10' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='password'
          render={({ field, fieldState }) => (
            <FormItem className='mt-5 space-y-0.5'>
              <FormLabel className='text-primary'>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className={cn('pr-10', errors?.password && 'input-err')}
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
              <CustomFormMessage error={fieldState.error} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field, fieldState }) => (
            <FormItem className='mt-5 space-y-0.5'>
              <FormLabel className='text-primary'>Confirm password</FormLabel>
              <FormControl>
                <PasswordInput
                  className={cn('pr-10', errors?.confirmPassword && 'input-err')}
                  placeholder='Enter confirm password'
                  {...field}
                />
              </FormControl>
              <CustomFormMessage error={fieldState.error} />
            </FormItem>
          )}
        />
        {errors?.root && (
          <CustomFormMessage
            message={errors?.root?.message}
            className='mt-4 px-2 py-3 border border-destructive rounded-sm bg-destructive/5'
          />
        )}
        <GradientButton className='w-full h-12 mt-8 text-base' type='submit'>
          Set new password
        </GradientButton>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
