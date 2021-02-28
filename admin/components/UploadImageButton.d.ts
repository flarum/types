export default class UploadImageButton extends Button {
    loading: boolean;
    /**
     * Prompt the user to upload an image.
     */
    upload(): void;
    /**
     * Remove the logo.
     */
    remove(): void;
    resourceUrl(): string;
    /**
     * After a successful upload/removal, reload the page.
     *
     * @param {Object} response
     * @protected
     */
    protected success(response: any): void;
    /**
     * If upload/removal fails, stop loading.
     *
     * @param {Object} response
     * @protected
     */
    protected failure(response: any): void;
}
import Button from "../../common/components/Button";
