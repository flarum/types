export default class NotificationListState {
    constructor(app: any);
    app: any;
    notificationPages: any[];
    loading: boolean;
    moreResults: boolean;
    clear(): void;
    getNotificationPages(): any[];
    isLoading(): boolean;
    hasMoreResults(): boolean;
    /**
     * Load notifications into the application's cache if they haven't already
     * been loaded.
     */
    load(): void;
    /**
     * Load the next page of notification results.
     *
     * @public
     */
    public loadMore(): any;
    /**
     * Parse results and append them to the notification list.
     *
     * @param {Notification[]} results
     * @return {Notification[]}
     */
    parseResults(results: Notification[]): Notification[];
    /**
     * Mark all of the notifications as read.
     */
    markAllAsRead(): void;
}
