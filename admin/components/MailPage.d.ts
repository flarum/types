export default class MailPage extends AdminPage {
    sendingTest: boolean;
    refresh(): void;
    status: {
        sending: boolean;
        errors: {};
    };
    driverFields: any;
    sendTestEmail(): void;
    testEmailSuccessAlert: number;
}
import AdminPage from "./AdminPage";
