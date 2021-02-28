export default class SearchState {
    constructor(cachedSearches?: any[]);
    cachedSearches: any[];
    getValue(): any;
    setValue(value: any): void;
    value: any;
    /**
     * Clear the search value.
     */
    clear(): void;
    /**
     * Mark that we have already searched for this query so that we don't
     * have to ping the endpoint again.
     */
    cache(query: any): void;
    /**
     * Check if this query has been searched before.
     */
    isCached(query: any): boolean;
}
