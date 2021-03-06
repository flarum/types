export default class ExtensionPage extends AdminPage {
    extension: any;
    changingState: boolean;
    infoFields: {
        discuss: string;
        documentation: string;
        support: string;
        website: string;
        donate: string;
        source: string;
    };
    className(): string;
    sections(): ItemList;
    topItems(): ItemList;
    infoItems(): ItemList;
    toggle(): void;
    isEnabled(): any;
    onerror(e: any): void;
}
import AdminPage from "./AdminPage";
import ItemList from "../../common/utils/ItemList";
