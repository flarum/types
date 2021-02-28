export default class DiscussionListState {
    constructor(params?: {}, app?: any);
    params: {};
    app: any;
    discussions: any[];
    moreResults: boolean;
    loading: boolean;
    /**
     * Get the parameters that should be passed in the API request to get
     * discussion results.
     *
     * @api
     */
    requestParams(): {
        include: string[];
        filter: {};
    };
    /**
     * Get a map of sort keys (which appear in the URL, and are used for
     * translation) to the API sort value that they represent.
     */
    sortMap(): {
        relevance: string;
        latest: string;
        top: string;
        newest: string;
        oldest: string;
    };
    /**
     * Get the search parameters.
     */
    getParams(): {};
    /**
     * Clear cached discussions.
     */
    clear(): void;
    /**
     * If there are no cached discussions or the new params differ from the
     * old ones, update params and refresh the discussion list from the database.
     */
    refreshParams(newParams: any): void;
    /**
     * Clear and reload the discussion list. Passing the option `deferClear: true`
     * will clear discussions only after new data has been received.
     * This can be used to refresh discussions without loading animations.
     */
    refresh({ deferClear }?: {
        deferClear?: boolean;
    }): any;
    /**
     * Load a new page of discussion results.
     *
     * @param offset The index to start the page at.
     */
    loadResults(offset: any): any;
    /**
     * Load the next page of discussion results.
     */
    loadMore(): void;
    /**
     * Parse results and append them to the discussion list.
     */
    parseResults(results: any): any;
    /**
     * Remove a discussion from the list if it is present.
     */
    removeDiscussion(discussion: any): void;
    /**
     * Add a discussion to the top of the list.
     */
    addDiscussion(discussion: any): void;
    /**
     * Are there discussions stored in the discussion list state?
     */
    hasDiscussions(): boolean;
    /**
     * Are discussions currently being loaded?
     */
    isLoading(): boolean;
    /**
     * In the last request, has the user searched for a discussion?
     */
    isSearchResults(): boolean;
    /**
     * Have the search results come up empty?
     */
    empty(): boolean;
}
