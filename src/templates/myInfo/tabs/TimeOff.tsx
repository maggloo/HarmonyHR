import { AvailableTimeOff } from '@/templates/myInfo/tabs/blocks/AvailableTimeOff'
import { UpcomingTimeOff } from '@/templates/myInfo/tabs/blocks/UpcomingTimeOff'
import { TimeOffHistory } from '@/templates/myInfo/tabs/blocks/TimeOffHistory'

export const TimeOff = () => {
    return (
        <>
            <div className="w-full">
                <AvailableTimeOff />
            </div>
            <div className="w-full pt-6">
                <UpcomingTimeOff />
            </div>
            <div className="w-full pt-6">
                <TimeOffHistory />
            </div>
        </>
    )
}
