/**
 * The `AffixedSidebar` component uses Bootstrap's "affix" plugin to keep a
 * sidebar navigation at the top of the viewport when scrolling.
 *
 * ### Children
 *
 * The component must wrap an element that itself wraps an <ul> element, which
 * will be "affixed".
 *
 * @see https://getbootstrap.com/docs/3.4/javascript/#affix
 */
export default class AffixedSidebar extends Component<import("../../common/Component").ComponentAttrs> {
    boundOnresize: any;
    onremove(): void;
    onresize(): void;
    bottom: number;
}
import Component from "../../common/Component";
