import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormValues, loginSchema } from '@/features/auth/login/lib/loginFormSchema'

export const useLoginForm = () =>
    useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginSchema),
    })
