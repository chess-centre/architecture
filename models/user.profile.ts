import { Club } from './shared';

/**
 * User Profile
 * @route /user/profile
 * @description key information presented. Navigation / CTAs do not need to be defined here
 */
interface UserProfile {
    name: string,
    email: string,
    playerInfo: {
        ecfNumber: number,
        ectMemberStatus: string,
        fideNumber: number,
    },
    club: Club
}