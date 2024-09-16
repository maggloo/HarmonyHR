import { Button } from '@/shared/ui/button'
import { Bell, CircleHelp, Menu, Settings } from 'lucide-react'
import { Avatar } from '@/shared/ui/avatar'
import { useStore } from '@/entities/profile/lib/profileStore'
import Image from 'next/image'

export const UserMenu = () => {
    const profile = useStore((state) => state.profile)
    const USER_MENU_ITEMS = [
        {
            id: 0,
            icon: <Settings className="h-5 w-5 pointer" />,
        },
        {
            id: 1,
            icon: <CircleHelp className="h-5 w-5 pointer" />,
        },
        {
            id: 2,
            icon: <Bell className="h-5 w-5 pointer" />,
        },
        {
            id: 3,
            icon: (
                <Avatar
                    size={38}
                    image={profile && <Image src={profile?.avatar} fill alt={'avatar'} />}
                />
            ),
        },
    ]

    return (
        <>
            <div className="hidden lg:flex">
                {USER_MENU_ITEMS.map((el) => (
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full bg-transparent shadow-none"
                        key={el.id}
                    >
                        {el.icon}
                    </Button>
                ))}
            </div>
            <div className="lg:hidden p-2">
                <Menu className="w-6 h-6" />
            </div>
        </>
    )
}
