import Cookies from 'js-cookie'
import { TOKENS } from '@/shared/const/tokens'
import { HOME_ROUTE } from '@/shared/const/routes'
import { useRouter } from 'next/router'
import { useLoginMutation } from '@/features/auth/login/api/login.types'
import { LoginFormValues } from '@/features/auth/login/lib/loginFormSchema'

export const useSubmitForm = () => {
    const router = useRouter()
    const [login, { loading }] = useLoginMutation()
    const onFormSubmit = async (data: LoginFormValues) => {
        try {
            const variables = {
                email: data.email,
                password: data.password,
            }
            await login({
                variables,
                onCompleted: (loginData) => {
                    const { access_token, refresh_token } = loginData.login
                    router.push(HOME_ROUTE)
                    Cookies.set(TOKENS.ACCESS_TOKEN, access_token)
                    Cookies.set(TOKENS.REFRESH_TOKEN, refresh_token)
                },
            })
        } catch (e) {
            console.log(e)
        }
    }
    return {
        onFormSubmit,
        loading,
    }
}
