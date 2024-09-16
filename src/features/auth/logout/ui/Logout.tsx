import { Button } from '@/shared/ui/button'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { TOKENS } from '@/shared/const/tokens'
import { ROUTES_URL } from '@/shared/const/routes'

export const Logout = () => {
    const router = useRouter()
    const onClickHandler = () => {
        Cookies.remove(TOKENS.ACCESS_TOKEN)
        Cookies.remove(TOKENS.REFRESH_TOKEN)
        router.push(ROUTES_URL.LOGIN)
    }
    return (
        <Button className="hidden md:block" onClick={onClickHandler}>
            {' '}
            Log out{' '}
        </Button>
    )
}
