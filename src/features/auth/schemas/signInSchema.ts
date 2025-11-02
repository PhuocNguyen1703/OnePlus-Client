import { z } from 'zod'

export const SignInSchema = z.object({
  username: z
    .string()
    .min(8, 'Username must be at least 8 characters.')
    .max(20, 'Username must be less than 20 characters.')
    .trim(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(20, 'Password must be less than 20 characters.')
    .trim(),
})

export type SignInBodyType = z.infer<typeof SignInSchema>
