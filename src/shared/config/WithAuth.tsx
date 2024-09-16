import { ReactElement, useEffect } from 'react'

import { useRouter } from 'next/router'
import { useCheckAccessToken } from '@/shared/lib/useCheckAccessToken'
import Cookies from 'js-cookie'
import { HOME_ROUTE, ROUTES_URL } from '@/shared/const/routes'
import { TOKENS } from '@/shared/const/tokens'
import { useRefreshTokenMutation } from '@/features/auth/login/api/refreshToken.types'

export const WithAuth = ({ children }: { children: ReactElement }) => {
    const isAuth = useCheckAccessToken()
    const router = useRouter()
    const [refreshTokenMutation] = useRefreshTokenMutation()
    const refreshToken = Cookies.get(TOKENS.REFRESH_TOKEN)
    const getRefreshToken = async () => {
        try {
            if (refreshToken) {
                const variables = {
                    refreshToken,
                }
                const { data } = await refreshTokenMutation({
                    variables,
                })
                if (data) {
                    const { access_token, refresh_token } = data.refreshToken
                    Cookies.set(TOKENS.ACCESS_TOKEN, access_token)
                    Cookies.set(TOKENS.REFRESH_TOKEN, refresh_token)
                    router.push(HOME_ROUTE)
                }
            } else {
                router.push(ROUTES_URL.LOGIN)
            }
        } catch (e) {
            console.log(e)
            router.push(ROUTES_URL.LOGIN)
        }
    }

    useEffect(() => {
        if (!isAuth) {
            getRefreshToken()
        } else {
            router.push(HOME_ROUTE)
        }
    }, [])

    return children
}
