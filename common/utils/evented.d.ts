declare namespace _default {
    export const handlers: any;
    /**
     * Get all of the registered handlers for an event.
     *
     * @param {String} event The name of the event.
     * @return {Array}
     * @protected
     */
    export function getHandlers(event: string): any[];
    /**
     * Get all of the registered handlers for an event.
     *
     * @param {String} event The name of the event.
     * @return {Array}
     * @protected
     */
    export function getHandlers(event: string): any[];
    /**
     * Trigger an event.
     *
     * @param {String} event The name of the event.
     * @param {...*} args Arguments to pass to event handlers.
     * @public
     */
    export function trigger(event: string, ...args: any[]): void;
    /**
     * Trigger an event.
     *
     * @param {String} event The name of the event.
     * @param {...*} args Arguments to pass to event handlers.
     * @public
     */
    export function trigger(event: string, ...args: any[]): void;
    /**
     * Register an event handler.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function to handle the event.
     */
    export function on(event: string, handler: Function): void;
    /**
     * Register an event handler.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function to handle the event.
     */
    export function on(event: string, handler: Function): void;
    /**
     * Register an event handler so that it will run only once, and then
     * unregister itself.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function to handle the event.
     */
    export function one(event: string, handler: Function): void;
    /**
     * Register an event handler so that it will run only once, and then
     * unregister itself.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function to handle the event.
     */
    export function one(event: string, handler: Function): void;
    /**
     * Unregister an event handler.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function that handles the event.
     */
    export function off(event: string, handler: Function): void;
    /**
     * Unregister an event handler.
     *
     * @param {String} event The name of the event.
     * @param {function} handler The function that handles the event.
     */
    export function off(event: string, handler: Function): void;
}
export default _default;
