import { z } from 'zod'

export const OTPSchema = z.object({
  _id: z.string().min(1),
  code: z
    .string()
    .min(6, 'Your one-time password must be 6 characters.')
    .max(6, 'Your one-time password must be 6 characters.'),
})

export type OTPBodyType = z.infer<typeof OTPSchema>
