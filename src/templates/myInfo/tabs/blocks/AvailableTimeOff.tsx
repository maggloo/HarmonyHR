import { Title } from '@/shared/ui/title'
import { CalendarClock } from 'lucide-react'
import { TimeOffCard } from '@/entities/profile/ui/timeOffCard/TimeOffCard'
import { Cross } from '@/shared/assets/icons/cross'
import { Leave } from '@/shared/assets/icons/leave'
import { CompTime } from '@/shared/assets/icons/compTime'
import { Button } from '@/shared/ui/button'

const CARDS = [
    {
        title: 'Sick',
        icon: <Cross className="h-9 w-9" />,
        number: '3',
        text: 'Days Available',
        subtext: '1 dey scheduled',
        bottomText: 'Sick Full-Time',
    },
    {
        title: 'Annual Leave',
        icon: <Leave className="h-9 w-9" />,
        number: '10.3',
        text: 'Days Available',
        bottomText: 'Holiday Full-Time',
    },
    {
        title: 'Comp/in Lieu Time',
        icon: <CompTime className="h-9 w-9" />,
        number: '0',
        text: 'Human Used(YTD)',
        bottomText: 'Comp/in Lieu Time Flexible Policy',
    },
]
export const AvailableTimeOff = () => {
    return (
        <>
            <Title
                variant={'h2'}
                className="flex flex-row items-center w-full gap-1 justify-between border-b-2 border-accent"
            >
                <div className="flex items-center gap-1">
                    <CalendarClock className="w-6 h-6" /> Time Off
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-sm">
                        Accrual Level Start Date <span className="text-sky-600"> 03/09-2020 </span>
                    </div>
                    <Button variant={'outline'}> Add Time Off Policy </Button>
                </div>
            </Title>
            <div className="flex w-full p-8 gap-10 justify-center items-center flex-col md:flex-row md:gap-6">
                {CARDS.map((el, i) => (
                    <TimeOffCard
                        key={i}
                        title={el.title}
                        icon={el.icon}
                        number={el.number}
                        text={el.text}
                        subtext={el.subtext}
                        bottomText={el.bottomText}
                    />
                ))}
            </div>
        </>
    )
}
