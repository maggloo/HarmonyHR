import { Clock4, Globe, Hash, MapPin, UsersRound } from 'lucide-react'
import { UserInfoCard } from '@/entities/profile/ui/userInfoCard/UserInfoCard'
type GeneralInfoCardPropsType = {
    number: string
    workDay: string
    team: string
    area: string
    location: string
}
export const GeneralInfoCard = ({
    number,
    workDay,
    team,
    area,
    location,
}: GeneralInfoCardPropsType) => {
    return (
        <UserInfoCard>
            <div className="flex items-center gap-2">
                <Hash className="w-4 h-4" /> {number}
            </div>
            <div className="flex items-center gap-2">
                <Clock4 className="w-4 h-4" />
                {workDay}
            </div>
            <div className="flex items-center gap-2">
                <UsersRound className="w-4 h-4" />
                {team}
            </div>
            <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {area}
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {location}
            </div>
        </UserInfoCard>
    )
}
