import { z } from 'zod'

export const ForgotPasswordSchema = z.object({
  // email: z.email("Invalid email")
  // .min(1, "Email is required"),
})

export type ForgotPasswordBodyType = z.infer<typeof ForgotPasswordSchema>
