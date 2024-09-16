import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Form } from '@/shared/ui/form'
import { FormInputField } from '@/shared/ui/formInputField'
import { useSubmitForm } from '@/features/auth/login/lib/useSubmitForm'
import { useLoginForm } from '@/features/auth/login/lib/useLoginForm'
import { Loader } from '@/shared/ui/loader'

export function LoginForm() {
    const formData = useLoginForm()
    const { onFormSubmit, loading } = useSubmitForm()

    if (loading) {
        return <Loader />
    }

    return (
        <Form {...formData}>
            <form className="w-full max-w-sm" onSubmit={formData.handleSubmit(onFormSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <FormInputField
                                control={formData.control}
                                name={'email'}
                                placeholder={'m@example.com'}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormInputField control={formData.control} name={'password'} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">
                            Sign in
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
