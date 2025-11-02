'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import { GradientButton } from '@/components/ui/gradient-button'
import { CustomFormMessage } from '@/components/ui/custom-form-message'
import Loader from '@/components/ui/loader'
import { useSignIn } from '../hooks/useSignIn'
import { Button } from '@/components/ui/button'

const SignInForm = () => {
  const { form, isPending, onSubmit } = useSignIn()
  const { errors } = form.formState

  return (
    <Form {...form}>
      <form className=' mt-10' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='space-y-0.5'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className={errors?.username && 'input-err'} placeholder='Enter your username' {...field} />
              </FormControl>
              <CustomFormMessage error={errors?.username} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mt-5 space-y-0.5'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className={cn('pr-10', errors?.password && 'input-err')}
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
              <CustomFormMessage error={errors?.password} />
            </FormItem>
          )}
        />
        <Link
          href='/forgot-password'
          className='block w-fit mt-2 ml-auto no-underline hover:underline hover:underline-offset-2 hover:text-primary'
        >
          <span className=' text-sm font-medium'>Forgot Password?</span>
        </Link>
        {errors?.root && (
          <CustomFormMessage
            message={errors?.root?.message}
            className='px-2 py-3 border border-destructive rounded-sm bg-destructive/5'
          />
        )}
        <Button className='w-full h-12 my-8 text-base shadow-multilayer' type='submit' disabled={isPending}>
          {isPending ? <Loader /> : 'Sign In'}
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm
