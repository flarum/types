export default class BasicsPage extends AdminPage {
    localeOptions: {};
    displayNameOptions: {};
    slugDriverOptions: {};
    /**
     * Build a list of options for the default homepage. Each option must be an
     * object with `path` and `label` properties.
     *
     * @return {ItemList}
     * @public
     */
    public homePageItems(): ItemList;
}
import AdminPage from "./AdminPage";
import ItemList from "../../common/utils/ItemList";
