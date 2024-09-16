import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import { ChevronDown } from 'lucide-react'

export const TABS_NAMES = {
    PERSONAL: 'Personal',
    JOB: 'Job',
    TIME_OFF: 'Time Off',
    EMERGENCY: 'Emergency',
    DOCUMENTS: 'Documents',
    NOTES: 'Notes',
    BENEFITS: 'Benefits',
    TRAINING: 'Training',
    ASSETS: 'Assets',
    MORE: 'More',
}

const NAV_TABS = [
    {
        content: 'Personal',
        label: TABS_NAMES.PERSONAL,
        value: TABS_NAMES.PERSONAL,
        disabled: true,
    },
    {
        content: 'Job',
        label: TABS_NAMES.JOB,
        value: TABS_NAMES.JOB,
        disabled: true,
    },
    {
        content: 'Time Off',
        label: TABS_NAMES.TIME_OFF,
        value: TABS_NAMES.TIME_OFF,
        disabled: false,
    },
    {
        content: 'Emergency',
        label: TABS_NAMES.EMERGENCY,
        value: TABS_NAMES.EMERGENCY,
        disabled: true,
    },
    {
        content: 'Documents',
        label: TABS_NAMES.DOCUMENTS,
        value: TABS_NAMES.DOCUMENTS,
        disabled: true,
    },
    {
        content: 'Notes',
        label: TABS_NAMES.NOTES,
        value: TABS_NAMES.NOTES,
        disabled: true,
    },
    {
        content: 'Benefits',
        label: TABS_NAMES.BENEFITS,
        value: TABS_NAMES.BENEFITS,
        disabled: true,
    },
    {
        content: 'Training',
        label: TABS_NAMES.TRAINING,
        value: TABS_NAMES.TRAINING,
        disabled: true,
    },
    {
        content: 'Assets',
        label: TABS_NAMES.ASSETS,
        value: TABS_NAMES.ASSETS,
        disabled: true,
    },
    {
        content: 'More',
        label: (
            <div className="flex gap-1 items-center">
                {TABS_NAMES.MORE} <ChevronDown className="h-4 w-4" />
            </div>
        ),
        value: TABS_NAMES.MORE,
        disabled: true,
    },
]

type ProfileTabsPropsType = {
    setTab: (tab: string) => void
    tab: string
}
export const ProfileTabs = ({ setTab, tab }: ProfileTabsPropsType) => {
    const getLabelsTabs = NAV_TABS.map((el, i) => (
        <TabsTrigger
            value={el.value}
            key={i}
            disabled={el.disabled}
            onClick={() => setTab(el.value)}
            className="data-[state=active]:bg-popover"
        >
            {el.label}
        </TabsTrigger>
    ))
    return (
        <Tabs defaultValue={tab} className="w-full flex justify-end">
            <TabsList>{getLabelsTabs}</TabsList>
        </Tabs>
    )
}
