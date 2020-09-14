import { Event } from './shared';
/**
 * Dashboard Event
 * @route /dashboard/events
 * @description a full calendar of events
 */
interface DashboardEvent {
    searchQuery: string,
    filterQuery: string,
    events: Array<Event> // pagable
}