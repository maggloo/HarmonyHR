import { Avatar } from '@/shared/ui/avatar'
import { useStore } from '@/entities/profile/lib/profileStore'
import Image from 'next/image'
import { ProfileSettings } from '@/widgets/profile/settings/ProfileSettings'
import { UserInfoPanel } from '@/templates/myInfo/userInfoPanel/UserInfoPanel'
import { EllipsisVertical } from 'lucide-react'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { IMAGES_SIZES } from '@/shared/const/imgSize'

export const ProfileHeader = () => {
    const profile = useStore((state) => state.profile)
    const matchesMobile = useMediaQuery(650)
    let currentSize: number

    if (matchesMobile) {
        currentSize = IMAGES_SIZES.SMALL_AVATAR
    } else {
        currentSize = IMAGES_SIZES.BIG_AVATAR
    }
    return (
        <>
            <div className="flex flex-row items-center w-full ">
                <div className="w-[250px] relative flex justify-center">
                    {profile && (
                        <Avatar
                            size={currentSize}
                            image={<Image src={profile?.avatar} fill alt={'main-avatar'} />}
                        />
                    )}
                    <div className="w-[200px] absolute transform top-[90%] -translate-x-1/2 left-[45%] z-10 hidden xl:block">
                        <UserInfoPanel />
                    </div>
                </div>
                {profile && (
                    <div className="flex gap-9 items-center w-full p-6 ml-6 justify-between flex-wrap">
                        <h2 className="font-semibold text-lg md:text-2xl">{profile.name}</h2>
                        <div className="flex-row hidden lg:flex gap-3">
                            <ProfileSettings />
                        </div>
                        <div className="lg:hidden p-2">
                            <EllipsisVertical className="w-6 h-6" />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
