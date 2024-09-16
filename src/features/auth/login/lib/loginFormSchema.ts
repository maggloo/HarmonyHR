import { z } from 'zod'
export const loginSchema = z.object({
    email: z.string().email({ message: 'Email must contain A-Z, a-z , @' }),
    password: z.string().min(1, 'Password must contain at least 1 character'),
})

export type LoginFormValues = z.infer<typeof loginSchema>
