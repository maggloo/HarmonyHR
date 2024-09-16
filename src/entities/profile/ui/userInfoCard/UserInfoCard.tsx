import { ReactNode } from 'react'

type UserInfoCardPropsType = {
    title?: string
    children: ReactNode
}
export const UserInfoCard = ({ title, children }: UserInfoCardPropsType) => {
    return (
        <div className="w-[225px] text-sm p-6 bg-popover rounded-lg">
            {title && <div className="pb-2">{title}</div>}
            <div className="flex flex-col gap-2">{children}</div>
        </div>
    )
}
