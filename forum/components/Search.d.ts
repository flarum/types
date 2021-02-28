/**
 * The `Search` component displays a menu of as-you-type results from a variety
 * of sources.
 *
 * The search box will be 'activated' if the app's search state's
 * getInitialSearch() value is a truthy value. If this is the case, an 'x'
 * button will be shown next to the search field, and clicking it will clear the search.
 *
 * ATTRS:
 *
 * - state: SearchState instance.
 */
export default class Search extends Component<import("../../common/Component").ComponentAttrs> {
    static MIN_SEARCH_LEN: number;
    state: any;
    /**
     * Whether or not the search input has focus.
     *
     * @type {Boolean}
     */
    hasFocus: boolean;
    /**
     * An array of SearchSources.
     *
     * @type {SearchSource[]}
     */
    sources: any[];
    /**
     * The number of sources that are still loading results.
     *
     * @type {Integer}
     */
    loadingSources: any;
    /**
     * The index of the currently-selected <li> in the results list. This can be
     * a unique string (to account for the fact that an item's position may jump
     * around as new results load), but otherwise it will be numeric (the
     * sequential position within the list).
     *
     * @type {String|Integer}
     */
    index: string | any;
    onupdate(): void;
    navigator: KeyboardNavigatable;
    /**
     * Navigate to the currently selected search result and close the list.
     */
    selectResult(): void;
    /**
     * Clear the search
     */
    clear(): void;
    /**
     * Build an item list of SearchSources.
     *
     * @return {ItemList}
     */
    sourceItems(): ItemList;
    /**
     * Get all of the search result items that are selectable.
     *
     * @return {jQuery}
     */
    selectableItems(): JQueryStatic;
    /**
     * Get the position of the currently selected search result item.
     *
     * @return {Integer}
     */
    getCurrentNumericIndex(): any;
    /**
     * Get the <li> in the search results with the given index (numeric or named).
     *
     * @param {String} index
     * @return {DOMElement}
     */
    getItem(index: string): any;
    /**
     * Set the currently-selected search result item to the one with the given
     * index.
     *
     * @param {Integer} index
     * @param {Boolean} scrollToItem Whether or not to scroll the dropdown so that
     *     the item is in view.
     */
    setIndex(index: any, scrollToItem: boolean): void;
}
import Component from "../../common/Component";
import KeyboardNavigatable from "../utils/KeyboardNavigatable";
import ItemList from "../../common/utils/ItemList";
