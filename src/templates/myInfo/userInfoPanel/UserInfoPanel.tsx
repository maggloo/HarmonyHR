import { ContactsCard } from '@/entities/profile/ui/userInfoCards/ContactsCard'
import { WorkInfoCard } from '@/entities/profile/ui/userInfoCards/WorkInfoCard'
import { GeneralInfoCard } from '@/entities/profile/ui/userInfoCards/GeneralInfoCard'
import { ReportsInfoCard } from '@/entities/profile/ui/userInfoCards/ReportsInfoCard'
export const USER_INFO_DATA = {
    contacts: {
        phone: '07911 654321',
        email: 'avd.yana@videorollnet',
    },
    workInfo: {
        hireDate: 'Sep. 3,2020',
        totalWork: '3y - 9m - 20d',
    },
    generalInfo: {
        '#': '5',
        workDay: 'Full-Time',
        team: 'Operations',
        area: 'Europe',
        location: 'London, UK',
    },
    reports: ['Shane', 'Nathan', 'Mitchell', 'Philip', 'Rose', 'Anonym', 'Me', 'You'],
}

export const UserInfoPanel = () => {
    return (
        <div className="flex flex-col gap-4">
            <ContactsCard
                email={USER_INFO_DATA.contacts.email}
                phone={USER_INFO_DATA.contacts.phone}
            />
            <WorkInfoCard
                hireDate={USER_INFO_DATA.workInfo.hireDate}
                totalWork={USER_INFO_DATA.workInfo.totalWork}
            />
            <GeneralInfoCard
                area={USER_INFO_DATA.generalInfo.area}
                location={USER_INFO_DATA.generalInfo.location}
                number={USER_INFO_DATA.generalInfo['#']}
                team={USER_INFO_DATA.generalInfo.team}
                workDay={USER_INFO_DATA.generalInfo.workDay}
            />
            <ReportsInfoCard reports={USER_INFO_DATA.reports} />
        </div>
    )
}
