/**
 * The `DiscussionsSearchSource` finds and displays discussion search results in
 * the search dropdown.
 *
 * @implements SearchSource
 */
export default class DiscussionsSearchSource {
    results: {};
    search(query: any): Promise<any>;
    view(query: any): any[];
}
