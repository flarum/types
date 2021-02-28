/**
 * The `PostEdited` component displays information about when and by whom a post
 * was edited.
 *
 * ### Attrs
 *
 * - `post`
 */
export default class PostEdited extends Component<import("../../common/Component").ComponentAttrs> {
    shouldUpdateTooltip: boolean;
    oldEditedInfo: any;
    onupdate(): void;
    rebuildTooltip(): void;
}
import Component from "../../common/Component";
