import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'
import { MoveDown } from 'lucide-react'
import * as React from 'react'
import { TableFilters } from '@/widgets/profile/tableFilters/TableFilters'
const TIME_OFF_COLUMNS = [
    {
        name: 'Date',
        selected: true,
        id: 0,
    },
    {
        name: 'Description',
        selected: false,
        id: 1,
    },
    {
        name: 'Used Days (-)',
        selected: false,
        id: 2,
    },
    {
        name: 'Earned Days (+)',
        selected: false,
        id: 3,
    },
    {
        name: 'Balance',
        selected: false,
        id: 4,
    },
]

const TIME_OFF_DATA = [
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: null,
        earnedDays: '3.00',
        balance: '3.00',
        id: 0,
    },
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: '-6',
        earnedDays: null,
        balance: '3.00',
        id: 1,
    },
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: null,
        earnedDays: '3.00',
        balance: '3.00',
        id: 2,
    },
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: null,
        earnedDays: '3.00',
        balance: '3.00',
        id: 3,
    },
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: '-6',
        earnedDays: null,
        balance: '3.00',
        id: 4,
    },
    {
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        usedDays: null,
        earnedDays: '3.00',
        balance: '3.00',
        id: 5,
    },
]
export const TimeOffTable = () => {
    return (
        <>
            <TableFilters />
            <Table>
                <TableHeader className={'bg-dark-500'}>
                    <TableRow>
                        {TIME_OFF_COLUMNS.map((el) => (
                            <TableHead key={el.id}>
                                {el.name}
                                {el.selected && <MoveDown className="w-4 h-4 inline" />}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TIME_OFF_DATA.map((el) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.date}</TableCell>
                            <TableCell>{el.description}</TableCell>
                            <TableCell>{el.usedDays}</TableCell>
                            <TableCell>{el.earnedDays}</TableCell>
                            <TableCell>{el.balance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
