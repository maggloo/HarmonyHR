import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import Link from 'next/link'
import { ROUTES_URL } from '@/shared/const/routes'
import { EllipsisVertical, Menu } from 'lucide-react'

const TABS_NAMES = {
    HOME: 'Home',
    MY_INFO: 'My info',
    PEOPLE: 'People',
    HIRING: 'Hiring',
    REPORTS: 'Reports',
    FILES: 'Files',
}

const NAV_TABS = [
    { content: 'Home', label: TABS_NAMES.HOME, value: 'tab1', route: '#', disabled: true },
    {
        content: 'My info',
        label: TABS_NAMES.MY_INFO,
        value: 'tab2',
        route: ROUTES_URL.MY_INFO,
        disabled: false,
    },
    {
        content: 'People',
        label: TABS_NAMES.PEOPLE,
        value: 'tab3',
        route: '#',
        disabled: true,
    },
    {
        content: 'Hiring',
        label: TABS_NAMES.HIRING,
        value: 'tab4',
        route: '#',
        disabled: true,
    },
    {
        content: 'Reports',
        label: TABS_NAMES.REPORTS,
        value: 'tab5',
        route: '#',
        disabled: true,
    },
    {
        content: 'Files',
        label: TABS_NAMES.FILES,
        value: 'tab6',
        route: '#',
        disabled: true,
    },
]
export const HeaderTabs = () => {
    const getLabelsTabs = NAV_TABS.map((el, i) => (
        <TabsTrigger
            value={el.value}
            key={i}
            disabled={el.disabled}
            className="hidden lg:flex lg:w-[80px]"
        >
            <Link href={el.route}>{el.label}</Link>
        </TabsTrigger>
    ))
    return (
        <>
            <Tabs defaultValue={NAV_TABS[1].value}>
                <TabsList>{getLabelsTabs}</TabsList>
            </Tabs>
        </>
    )
}
