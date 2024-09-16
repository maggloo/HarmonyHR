import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { X } from 'lucide-react'
import * as React from 'react'

export const TableFilters = () => {
    return (
        <div className="flex flex-row justify-between pb-4 gap-6 flex-wrap">
            <div className="flex flex-row gap-6 flex-wrap">
                <Select>
                    <SelectTrigger className="w-[256px]">
                        <SelectValue placeholder="Sick" />
                        <X className="h-4 w-4 absolute right-12" />
                    </SelectTrigger>
                </Select>
                <Select>
                    <SelectTrigger className="w-[96px]">
                        <SelectValue placeholder="All" />
                        <X className="h-4 w-4 absolute right-12" />
                    </SelectTrigger>
                </Select>
            </div>
            <Select>
                <SelectTrigger className="w-[176px]">
                    <SelectValue placeholder="Balance History" />
                </SelectTrigger>
            </Select>
        </div>
    )
}
