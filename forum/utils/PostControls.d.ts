declare namespace _default {
    /**
     * Get a list of controls for a post.
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @public
     */
    export function controls(post: any, context: any): ItemList;
    /**
     * Get a list of controls for a post.
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @public
     */
    export function controls(post: any, context: any): ItemList;
    /**
     * Get controls for a post pertaining to the current user (e.g. report).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function userControls(post: any, context: any): ItemList;
    /**
     * Get controls for a post pertaining to the current user (e.g. report).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function userControls(post: any, context: any): ItemList;
    /**
     * Get controls for a post pertaining to moderation (e.g. edit).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function moderationControls(post: any, context: any): ItemList;
    /**
     * Get controls for a post pertaining to moderation (e.g. edit).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function moderationControls(post: any, context: any): ItemList;
    /**
     * Get controls for a post that are destructive (e.g. delete).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function destructiveControls(post: any, context: any): ItemList;
    /**
     * Get controls for a post that are destructive (e.g. delete).
     *
     * @param {Post} post
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function destructiveControls(post: any, context: any): ItemList;
    /**
     * Open the composer to edit a post.
     *
     * @return {Promise}
     */
    export function editAction(): Promise<any>;
    /**
     * Open the composer to edit a post.
     *
     * @return {Promise}
     */
    export function editAction(): Promise<any>;
    /**
     * Hide a post.
     *
     * @return {Promise}
     */
    export function hideAction(): Promise<any>;
    /**
     * Hide a post.
     *
     * @return {Promise}
     */
    export function hideAction(): Promise<any>;
    /**
     * Restore a post.
     *
     * @return {Promise}
     */
    export function restoreAction(): Promise<any>;
    /**
     * Restore a post.
     *
     * @return {Promise}
     */
    export function restoreAction(): Promise<any>;
    /**
     * Delete a post.
     *
     * @return {Promise}
     */
    export function deleteAction(context: any): Promise<any>;
    /**
     * Delete a post.
     *
     * @return {Promise}
     */
    export function deleteAction(context: any): Promise<any>;
}
export default _default;
import ItemList from "../../common/utils/ItemList";
