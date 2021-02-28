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
        username: any;
        relationships: {
            groups: any[];
        };
    };
}
import Modal from "../../common/components/Modal";
import Stream from "../../common/utils/Stream";
import ItemList from "../../common/utils/ItemList";
