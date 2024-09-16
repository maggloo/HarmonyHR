import Cookies from 'js-cookie'
import { TOKENS } from '@/shared/const/tokens'

const isTokenExpired = (token: string): boolean => {
    try {
        // Декодируем JWT токен
        const decodedToken = JSON.parse(atob(token.split('.')[1])) // Разделяем и декодируем полезную часть
        const expiry = decodedToken.exp // Время истечения (в секундах)
        return expiry * 1000 < Date.now() // Сравниваем с текущим временем
    } catch (error) {
        console.error('Error decoding token', error)
        return true // Если ошибка, считаем токен истекшим
    }
}
export const useCheckAccessToken = () => {
    const accessToken = Cookies.get(TOKENS.ACCESS_TOKEN)
    if (accessToken) {
        const isAuth = !isTokenExpired(accessToken)
        return isAuth
    }

    return false
}
