export default class ExtensionsWidget extends DashboardWidget {
    categorizedExtensions: {};
    extensionCategory(category: any): JSX.Element;
    extensionWidget(extension: any): JSX.Element;
}
import DashboardWidget from "./DashboardWidget";
