import { Settings } from 'lucide-react'
import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select'
import * as React from 'react'

export const ProfileSettings = () => {
    return (
        <>
            <Select>
                <SelectTrigger className="w-[162px] before:hidden border border-muterBorder">
                    <SelectValue placeholder="Request a Change" />
                </SelectTrigger>
            </Select>
            <Select>
                <SelectTrigger className="w-[56px] before:hidden border border-muterBorder">
                    <SelectValue placeholder="" />
                    <Settings className="w-4 h-4" />
                </SelectTrigger>
            </Select>
        </>
    )
}
