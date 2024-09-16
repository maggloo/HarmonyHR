import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { LoginFormValues } from '@/features/auth/lib/loginFormSchema'

type FormInputField = {
    control: Control<LoginFormValues>
    name: FieldPath<LoginFormValues>
    placeholder?: string
}

function capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}
export function FormInputField({ control, name, placeholder }: FormInputField) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{capitalizeFirstLetter(name)}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
