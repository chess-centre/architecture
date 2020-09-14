import { Member } from './shared';
/**
 * Dashboard Members
 * @route /dashboard/members
 * @description information about other users including their rating, club, link to results*
 */
interface DashboardMembers {
    members: Array<Member> // pagable
}