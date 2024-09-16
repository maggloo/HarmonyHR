import { UserInfoCard } from '@/entities/profile/ui/userInfoCard/UserInfoCard'
type WorkInfoCardPropsType = {
    hireDate: string
    totalWork: string
}
export const WorkInfoCard = ({ hireDate, totalWork }: WorkInfoCardPropsType) => {
    return (
        <UserInfoCard title="Hire Date">
            <div className="flex items-center gap-2">{hireDate}</div>
            <div className="flex items-center gap-2">{totalWork}</div>
        </UserInfoCard>
    )
}
