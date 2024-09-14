import { Input } from '@/shared/ui/input'
import { Search } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

type SearchComponentPropsType = {
    placeholder?: string
    className?: string
}
export const SearchComponent = ({ placeholder, className }: SearchComponentPropsType) => {
    return (
        <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder={placeholder || 'Search'}
                className={cn('pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]', className)}
            />
        </div>
    )
}
