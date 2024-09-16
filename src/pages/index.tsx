import { ReactElement } from 'react'

import { WithAuth } from '@/shared/config/WithAuth'

export default function Home() {
    return null
}

Home.getLayout = (page: ReactElement) => {
    return <WithAuth>{page}</WithAuth>
}
