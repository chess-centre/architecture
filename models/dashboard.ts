import { Event, Result, User } from './shared';

/**
 * Dashboard
 * @route /dashboard
 * @description a summary of all key information after user login
 */
interface Dashboard {
    events: Array<Event>,   // limit 
    results: Array<Result>, // limit
    user: User
}