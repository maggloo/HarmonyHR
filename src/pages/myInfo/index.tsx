import { HeadMeta } from '@/shared/config/HeadMeta'
import { WithAuth } from '@/shared/config/WithAuth'
import { ReactElement } from 'react'
import { Layout } from '@/shared/layout/layout'
import { UserProfile } from '@/templates/myInfo/userProfile/UserProfile'

export default function MyInfo() {
    return (
        <>
            <HeadMeta title={'MyInfo'} />
            <main className="mb-[5%]">
                <UserProfile />
            </main>
        </>
    )
}

MyInfo.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            <WithAuth>{page}</WithAuth>
        </Layout>
    )
}
