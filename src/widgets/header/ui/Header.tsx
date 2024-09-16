import Link from 'next/link'

import { SearchComponent } from '@/shared/ui/search'
import { UserMenu } from '@/shared/ui/userMenu'
import { HeaderTabs } from '@/widgets/header/ui/HeaderTabs'
import { Logout } from '@/features/auth/logout/ui/Logout'

export const Header = () => {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-popover px-4 md:px-6 z-50">
            <nav className="gap-6 w-full text-lg font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
                <Link className="flex items-center gap-2 text-lg font-semibold" href={'/'}>
                    <h2>HarmonyHR</h2>
                </Link>
                <HeaderTabs />
                <div className="ml-auto flex-1 sm:flex-initial sm:mr-0">
                    <SearchComponent />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Logout />
                    <UserMenu />
                </div>
            </nav>
        </header>
    )
}
