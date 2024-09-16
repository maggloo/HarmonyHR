import { CircleUserRound, UsersRound } from 'lucide-react'
import { UserInfoCard } from '@/entities/profile/ui/userInfoCard/UserInfoCard'

type ReportsInfoCardPropsType = {
    reports: string[]
}
export const ReportsInfoCard = ({ reports }: ReportsInfoCardPropsType) => {
    const length = reports.length
    return (
        <UserInfoCard title="Direct Reports">
            {reports.map((el, i) => {
                if (i < 4)
                    return (
                        <div key={i} className="flex items-center gap-2">
                            <CircleUserRound className="w-4 h-4" />
                            {el}
                        </div>
                    )
            })}
            {length > 4 && (
                <div className="flex items-center gap-2">
                    <UsersRound className="w-4 h-4" />
                    {length - 4} More...{' '}
                </div>
            )}
        </UserInfoCard>
    )
}
