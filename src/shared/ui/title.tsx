import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

export type TypographyType<T extends ElementType = 'div'> = {
    as?: T
    children?: ReactNode
    className?: string
    variant?: VariantType
} & ComponentPropsWithoutRef<T>

type VariantType = 'h1' | 'h2' | 'h3'

const titleVariants = cva('text-accent', {
    variants: {
        variant: {
            h1: 'font-bold text-primary text-md md:text-2xl',
            h2: 'font-medium text-xl text-primary text-md md:text-xl pb-2',
            h3: 'font-medium text-sm text-primary text-sm md:text-sm pb-2',
        },
        size: {
            default: 'h-9 px-4 py-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'h-9 w-9',
        },
    },
})
export const Title = <T extends ElementType = 'span'>(
    props: TypographyType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>
) => {
    const { as: Component = 'div', className, variant, ...rest } = props

    return <Component className={cn(titleVariants({ variant, className }))} {...rest} />
}
