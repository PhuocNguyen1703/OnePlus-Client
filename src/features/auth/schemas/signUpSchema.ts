import { z } from 'zod'

export const SignUpSchema = z.object({
  firstName: z.string().min(2, 'Username must be at least 2 characters.'),
  lastName: z.string().min(2, 'Username must be at least 2 characters.'),
  username: z
    .string()
    .min(8, 'Username must be at least 8 characters.')
    .max(20, 'Username must be less than 20 characters.')
    .trim(),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(20, 'Password must be less than 20 characters'),
})

export type SignUpBodyType = z.infer<typeof SignUpSchema>
