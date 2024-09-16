import { HeadMeta } from '@/shared/config/HeadMeta'
import { LoginForm } from '@/features/auth/login/ui/LoginForm'

export default function Login() {
    return (
        <>
            <HeadMeta title={'Log In'} />
            <main className={'w-[100vw] h-[100vh] flex items-center justify-center'}>
                <LoginForm />
            </main>
        </>
    )
}
