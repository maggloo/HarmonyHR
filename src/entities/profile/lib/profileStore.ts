import { create } from 'zustand'
import { User } from '@/shared/lib/apollo/schema.types'

export type ProfileType = Pick<User, 'avatar' | 'id' | 'name'>
type ProfileState = {
    profile: ProfileType | null
    setProfile: (profileData: ProfileType) => void
}
export const useStore = create<ProfileState>((set) => ({
    profile: null,
    setProfile: (profileData: ProfileType) => set({ profile: profileData }),
}))
