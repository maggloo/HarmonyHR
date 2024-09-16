import { ReactNode } from 'react'
import { Header } from '@/widgets/header/ui/Header'

type Props = { children: ReactNode }

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
