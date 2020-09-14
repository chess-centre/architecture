import { Result } from './shared';
/**
 * Dashboard Results
 * @route /dashboard/results 
 * @description event results which are searchable, filterable, pagable
 */
interface DashboardResults {
    searchQuery: string,
    filterQuery: string,
    results: Array<Result>
}