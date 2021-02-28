/**
 * The `TextEditor` component displays a textarea with controls, including a
 * submit button.
 *
 * ### Attrs
 *
 * - `composer`
 * - `submitLabel`
 * - `value`
 * - `placeholder`
 * - `disabled`
 * - `preview`
 */
export default class TextEditor extends Component<import("../../common/Component").ComponentAttrs> {
    /**
     * The value of the editor.
     *
     * @type {String}
     */
    value: string;
    /**
     * Whether the editor is disabled.
     */
    disabled: any;
    onupdate(): void;
    buildEditorParams(): {
        classNames: string[];
        disabled: any;
        placeholder: any;
        value: string;
        oninput: any;
        inputListeners: any[];
        onsubmit: () => void;
    };
    buildEditor(dom: any): BasicEditorDriver;
    /**
     * Build an item list for the text editor controls.
     *
     * @return {ItemList}
     */
    controlItems(): ItemList;
    /**
     * Build an item list for the toolbar controls.
     *
     * @return {ItemList}
     */
    toolbarItems(): ItemList;
    /**
     * Handle input into the textarea.
     *
     * @param {String} value
     */
    oninput(value: string): void;
    /**
     * Handle the submit button being clicked.
     */
    onsubmit(): void;
}
import Component from "../../common/Component";
import BasicEditorDriver from "../utils/BasicEditorDriver";
import ItemList from "../../common/utils/ItemList";
