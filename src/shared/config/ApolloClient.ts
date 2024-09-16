import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'
import { TOKENS } from '@/shared/const/tokens'

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BASE_APP_URL,
})

const authLink = setContext((_, { headers }) => {
    const token = Cookies.get(TOKENS.ACCESS_TOKEN)
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})
