import { useMyProfileQuery } from '@/entities/profile/api/myProfile.types'
import { useStore } from '@/entities/profile/lib/profileStore'
import { ProfileHeader } from '@/entities/profile/ui/profileHeader/ProfileHeader'
import { ProfileTabs, TABS_NAMES } from '@/widgets/profile/tabs/ProfileTabs'
import { useState } from 'react'
import { TimeOff } from '@/templates/myInfo/tabs/TimeOff'
import { Loader } from '@/shared/ui/loader'
export const UserProfile = () => {
    const setProfile = useStore((state) => state.setProfile)
    const [tab, setTab] = useState(TABS_NAMES.TIME_OFF)
    const { loading } = useMyProfileQuery({
        onCompleted: (data) => {
            if (data && data.profile) {
                setProfile(data.profile)
            }
        },
    })
    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div className="bg-accent pt-10 pb-5 pr-[10%] pl-[8%]">
                <>
                    <ProfileHeader />
                </>
                <div className="w-full">
                    <ProfileTabs setTab={setTab} tab={tab} />
                </div>
            </div>
            <div className="flex flex-row xl:mr-[8%] xl:ml-[25%] justify-center">
                <div className="flex flex-col bg-popover w-full py-7 px-5 mr-0 xl:mr-6">
                    <TimeOff />
                </div>
            </div>
        </div>
    )
}
