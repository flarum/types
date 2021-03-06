/**
 * The `ChangeEmailModal` component shows a modal dialog which allows the user
 * to change their email address.
 */
export default class ChangeEmailModal extends Modal {
    /**
     * Whether or not the email has been changed successfully.
     *
     * @type {Boolean}
     */
    success: boolean;
    /**
     * The value of the email input.
     *
     * @type {function}
     */
    email: Function;
    /**
     * The value of the password input.
     *
     * @type {function}
     */
    password: Function;
}
import Modal from "../../common/components/Modal";
