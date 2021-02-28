export default class AdminApplication extends Application {
    extensionData: ExtensionData;
    extensionCategories: {
        discussion: number;
        moderation: number;
        feature: number;
        formatting: number;
        theme: number;
        authentication: number;
        language: number;
        other: number;
    };
    history: {
        canGoBack: () => boolean;
        getPrevious: () => void;
        backUrl: () => any;
        back: () => void;
    };
    getRequiredPermissions(permission: any): string[];
}
import Application from "../common/Application";
import ExtensionData from "./utils/ExtensionData";
