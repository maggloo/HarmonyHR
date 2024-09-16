import { Title } from '@/shared/ui/title'
import { RotateCcwSquare } from 'lucide-react'
import { TimeOffTable } from '@/entities/profile/ui/timeOffTable/TimeOffTable'

export const TimeOffHistory = () => {
    return (
        <>
            <Title variant={'h3'} className="flex flex-row items-center gap-1">
                <RotateCcwSquare className="w-4 h-4" /> History
            </Title>
            <TimeOffTable />
        </>
    )
}
