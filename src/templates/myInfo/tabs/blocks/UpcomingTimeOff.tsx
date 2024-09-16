import { Title } from '@/shared/ui/title'
import { Clock4 } from 'lucide-react'
import { UpcomingTimeOffCard } from '@/entities/profile/ui/upcomingTimeOffCard/UpcomingTimeOffCard'
import { Cross } from '@/shared/assets/icons/cross'
import { Pig } from '@/shared/assets/icons/pig'

const UPCOMING_TIMEOFF = [
    {
        icon: <Cross className="h-9 w-9" />,
        date: 'Jan 27',
        description: '1 dey of Sick',
        isNoted: true,
    },
    {
        icon: <Pig className="h-9 w-9" />,
        date: 'Jul 4',
        description: 'Independence Day',
        isNoted: false,
    },
]
export const UpcomingTimeOff = () => {
    return (
        <>
            <Title
                variant={'h3'}
                className="flex flex-row items-center gap-1 border-b-2 border-accent"
            >
                <Clock4 className="w-4 h-4" /> Upcoming Time Off
            </Title>
            {UPCOMING_TIMEOFF.map((el, i) => (
                <UpcomingTimeOffCard
                    key={i}
                    icon={el.icon}
                    date={el.date}
                    description={el.description}
                    isNoted={el.isNoted}
                />
            ))}
        </>
    )
}
