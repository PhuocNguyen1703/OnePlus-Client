'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '../../../components/ui/checkbox'
import { PasswordInput } from '@/components/ui/password-input'
import { useSignUp } from '../hooks/useSignUp'
import { SignUpBodyType } from '../schemas'

const SignUpForm = () => {
  const { form, signUp } = useSignUp()

  const onSubmit = async (signUpData: SignUpBodyType) => {
    await signUp(signUpData)
  }

  return (
    <Form {...form}>
      <form className='mt-10' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex-center gap-5'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>First Name</FormLabel>
                <FormControl>
                  <Input className='h-12 rounded-[8px] text-base' placeholder='First Name' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Last Name</FormLabel>
                <FormControl>
                  <Input className='h-12 rounded-[8px] text-base' placeholder='last Name' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='mt-5'>
              <FormLabel className='text-base'>Email</FormLabel>
              <FormControl>
                <Input className='h-12 rounded-[8px] text-base' placeholder='Enter your email' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mt-5'>
              <FormLabel className='text-base'>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className='h-12 rounded-[8px] text-base pr-10'
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex-center space-x-2 mt-5 text-sm leading-none'>
          <Checkbox id='remember' />
          <span>
            I agree to the <strong>Terms &amp; Conditions</strong>
          </span>
        </div>
        <Button className='w-full h-12 mt-10 text-base' type='submit'>
          Continue
        </Button>
      </form>
    </Form>
  )
}

export default SignUpForm
