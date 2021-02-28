export default class GlobalSearchState extends SearchState {
    constructor(cachedSearches?: any[]);
    /**
     * Get URL parameters that stick between filter changes.
     *
     * @return {Object}
     */
    stickyParams(): any;
    /**
     * Get parameters to pass to the DiscussionList component.
     *
     * @return {Object}
     */
    params(): any;
    /**
     * Redirect to the index page using the given sort parameter.
     *
     * @param {String} sort
     */
    changeSort(sort: string): void;
    /**
     * Return the current search query, if any. This is implemented to activate
     * the search box in the header.
     *
     * @see Search
     * @return {String}
     */
    getInitialSearch(): string;
    /**
     * Redirect to the index page without a search filter. This is called when the
     * 'x' is clicked in the search box in the header.
     *
     * @see Search
     */
    clearInitialSearch(): void;
}
import SearchState from "./SearchState";
