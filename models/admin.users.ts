import { User } from './shared';
/**
 * Admin Users
 * @route /admin/users
 * @description privelidged access to see user information, membership status, etc
 */
interface AdminUser {
    searchQuery: string,
    filterQuery: string,
    users: Array<User> // pagable
}