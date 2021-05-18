/**
 * The `EditUserModal` component displays a modal dialog with a login form.
 */
export default class EditUserModal extends Modal {
    username: Stream<any>;
    email: Stream<any>;
    isEmailConfirmed: Stream<any>;
    setPassword: Stream<boolean>;
    password: Stream<any>;
    groups: {};
    fields(): ItemList;
    activate(): void;
    data(): {
        relationships: {};
    };
    nonAdminEditingAdmin(): boolean;
    /**
     * @internal
     * @protected
     */
    protected userIsAdmin(user: any): any;
}
import Modal from "./Modal";
import Stream from "../utils/Stream";
import ItemList from "../utils/ItemList";
