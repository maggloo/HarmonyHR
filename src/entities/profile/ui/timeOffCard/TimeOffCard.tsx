import { ReactElement } from 'react'
import { Title } from '@/shared/ui/title'

type TimeOffCardPropsType = {
    icon: ReactElement
    number: string
    title: string
    text: string
    subtext?: string
    bottomText: string
}
export const TimeOffCard = ({
    icon,
    number,
    title,
    text,
    subtext,
    bottomText,
}: TimeOffCardPropsType) => {
    return (
        <div className="relative w-1/3 min-w-[200px] flex-col h-40 flex justify-center items-center bg-primary-foreground p-7 rounded-md">
            <Title variant={'h2'} className="font-bold">
                {title}
            </Title>
            <div className="flex items-center gap-2">
                {icon}
                <span className="font-bold text-3xl">{number}</span>
            </div>
            <p className="font-bold pt-2">{text}</p>
            <p className="font-bold opacity-50">{subtext}</p>
            <span className="font-medium text-sm opacity-50 absolute bottom-[-25px]">
                {bottomText}
            </span>
        </div>
    )
}
