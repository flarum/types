declare namespace _default {
    /**
     * Get a list of controls for a user.
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @public
     */
    export function controls(user: any, context: any): ItemList;
    /**
     * Get a list of controls for a user.
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @public
     */
    export function controls(user: any, context: any): ItemList;
    /**
     * Get controls for a user pertaining to the current user (e.g. poke, follow).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function userControls(): ItemList;
    /**
     * Get controls for a user pertaining to the current user (e.g. poke, follow).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function userControls(): ItemList;
    /**
     * Get controls for a user pertaining to moderation (e.g. suspend, edit).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function moderationControls(user: any): ItemList;
    /**
     * Get controls for a user pertaining to moderation (e.g. suspend, edit).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function moderationControls(user: any): ItemList;
    /**
     * Get controls for a user which are destructive (e.g. delete).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function destructiveControls(user: any): ItemList;
    /**
     * Get controls for a user which are destructive (e.g. delete).
     *
     * @param {User} user
     * @param {*} context The parent component under which the controls menu will
     *     be displayed.
     * @return {ItemList}
     * @protected
     */
    export function destructiveControls(user: any): ItemList;
    /**
     * Delete the user.
     *
     * @param {User} user
     */
    export function deleteAction(user: any): void;
    /**
     * Delete the user.
     *
     * @param {User} user
     */
    export function deleteAction(user: any): void;
    /**
     * Show deletion alert of user.
     *
     * @param {User} user
     * @param {string} type
     */
    export function showDeletionAlert(user: any, type: string): void;
    /**
     * Show deletion alert of user.
     *
     * @param {User} user
     * @param {string} type
     */
    export function showDeletionAlert(user: any, type: string): void;
    /**
     * Edit the user.
     *
     * @param {User} user
     */
    export function editAction(user: any): void;
    /**
     * Edit the user.
     *
     * @param {User} user
     */
    export function editAction(user: any): void;
}
export default _default;
import ItemList from "../../common/utils/ItemList";
