'use client'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useOTP } from '../hooks/useOTP'
import { GradientButton } from '@/components/ui/gradient-button'
import { CustomFormMessage } from '@/components/ui/custom-form-message'
import { useEffect } from 'react'
import Loader from '@/components/ui/loader'

const OtpForm = ({ userId }: { userId: string }) => {
  const { form, isPending, onSubmit } = useOTP()
  const { errors } = form.formState

  useEffect(() => {
    form.setValue('_id', userId)
  }, [userId, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-5 items-center'>
        <FormField
          control={form.control}
          name='code'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className='h-[60px] gap-4'>
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={0} />
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={1} />
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={2} />
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={3} />
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={4} />
                    <InputOTPSlot className='h-full text-2xl border-l rounded-md' index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <CustomFormMessage error={errors?.code} />
            </FormItem>
          )}
        />
        {errors?.root && (
          <CustomFormMessage
            message={errors?.root?.message}
            className='w-5/6 mt-4 px-2 py-3 border border-destructive rounded-sm bg-destructive/5'
          />
        )}
        <GradientButton className='w-2/3 h-12 mt-8 text-base' type='submit' disabled={isPending}>
          {isPending ? <Loader /> : 'Send OTP'}
        </GradientButton>
      </form>
    </Form>
  )
}

export default OtpForm
