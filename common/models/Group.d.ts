export default Group;
declare class Group extends Model {
    constructor(data?: any, store?: any);
}
declare namespace Group {
    export const ADMINISTRATOR_ID: string;
    export const GUEST_ID: string;
    export const MEMBER_ID: string;
}
import Model from "../Model";
