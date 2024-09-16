import { CircleUser } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { ReactNode } from 'react'

type Props = {
    className?: string
    image?: ReactNode
    size: number
}
export const Avatar = ({ className, image, size }: Props) => {
    return (
        <div
            className={cn(
                'relative overflow-hidden flex items-center justify-center rounded-full z-40',
                className
            )}
            style={{ height: `${size}px`, width: `${size}px` }}
        >
            {!image && <CircleUser />}
            {image}
        </div>
    )
}
