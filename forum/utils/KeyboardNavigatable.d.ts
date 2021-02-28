/**
 * The `KeyboardNavigatable` class manages lists that can be navigated with the
 * keyboard, calling callbacks for each actions.
 *
 * This helper encapsulates the key binding logic, providing a simple fluent
 * API for use.
 */
export default class KeyboardNavigatable {
    /**
     * Callback to be executed for a specified input.
     *
     * @callback KeyboardNavigatable~keyCallback
     * @param {KeyboardEvent} event
     * @returns {boolean}
     */
    callbacks: {};
    /**
     * Callback that determines whether keyboard input should be handled.
     * By default, always handle keyboard navigation.
     *
     * @callback whenCallback
     * @param {KeyboardEvent} event
     * @returns {boolean}
     */
    whenCallback: (event: any) => boolean;
    /**
     * Provide a callback to be executed when navigating upwards.
     *
     * This will be triggered by the Up key.
     *
     * @public
     * @param {KeyboardNavigatable~keyCallback} callback
     * @return {KeyboardNavigatable}
     */
    public onUp(callback: any): KeyboardNavigatable;
    /**
     * Provide a callback to be executed when navigating downwards.
     *
     * This will be triggered by the Down key.
     *
     * @public
     * @param {KeyboardNavigatable~keyCallback} callback
     * @return {KeyboardNavigatable}
     */
    public onDown(callback: any): KeyboardNavigatable;
    /**
     * Provide a callback to be executed when the current item is selected..
     *
     * This will be triggered by the Return and Tab keys..
     *
     * @public
     * @param {KeyboardNavigatable~keyCallback} callback
     * @return {KeyboardNavigatable}
     */
    public onSelect(callback: any): KeyboardNavigatable;
    /**
     * Provide a callback to be executed when the navigation is canceled.
     *
     * This will be triggered by the Escape key.
     *
     * @public
     * @param {KeyboardNavigatable~keyCallback} callback
     * @return {KeyboardNavigatable}
     */
    public onCancel(callback: any): KeyboardNavigatable;
    /**
     * Provide a callback to be executed when previous input is removed.
     *
     * This will be triggered by the Backspace key.
     *
     * @public
     * @param {KeyboardNavigatable~keyCallback} callback
     * @return {KeyboardNavigatable}
     */
    public onRemove(callback: any): KeyboardNavigatable;
    /**
     * Provide a callback that determines whether keyboard input should be handled.
     *
     * @public
     * @param {KeyboardNavigatable~whenCallback} callback
     * @return {KeyboardNavigatable}
     */
    public when(callback: any): KeyboardNavigatable;
    /**
     * Set up the navigation key bindings on the given jQuery element.
     *
     * @public
     * @param {jQuery} $element
     */
    public bindTo($element: JQueryStatic): void;
    /**
     * Interpret the given keyboard event as navigation commands.
     *
     * @public
     * @param {KeyboardEvent} event
     */
    public navigate(event: KeyboardEvent): void;
}
