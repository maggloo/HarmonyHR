import { ReactElement } from 'react'
import { Dot } from 'lucide-react'

type TimeOffCardPropsType = {
    icon: ReactElement
    date: string
    description: string
    isNoted: boolean
}
export const UpcomingTimeOffCard = ({ icon, date, description, isNoted }: TimeOffCardPropsType) => {
    return (
        <div className="flex-row flex py-7 gap-4 border-b-2 border-accent font-medium">
            <div className="flex items-center">{icon}</div>
            <div>
                <div>{date}</div>
                <div className="flex flex-row">
                    {isNoted && <Dot />}
                    {description}
                </div>
            </div>
        </div>
    )
}
