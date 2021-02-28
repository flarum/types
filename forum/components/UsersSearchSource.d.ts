/**
 * The `UsersSearchSource` finds and displays user search results in the search
 * dropdown.
 *
 * @implements SearchSource
 */
export default class UsersSearchResults {
    results: {};
    search(query: any): Promise<void>;
    view(query: any): any[] | "";
}
