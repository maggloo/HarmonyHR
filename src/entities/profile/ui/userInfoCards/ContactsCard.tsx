import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { UserInfoCard } from '@/entities/profile/ui/userInfoCard/UserInfoCard'

type ContactsCardPropsType = {
    phone: string
    email: string
}
export const ContactsCard = ({ phone, email }: ContactsCardPropsType) => {
    return (
        <UserInfoCard>
            <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {phone}
            </div>
            <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {email}
            </div>
            <div className="flex gap-2">
                <Linkedin className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
            </div>
        </UserInfoCard>
    )
}
