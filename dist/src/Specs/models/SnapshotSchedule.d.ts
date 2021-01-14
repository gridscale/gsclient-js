export declare type SnapshotSchedule = {
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The amount of Snapshots to keep before overwriting the last created Snapshot.
     */
    keep_snapshots?: number;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The date and time that the snapshot schedule will be run.
     */
    next_runtime?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    relations?: {
        snapshots?: Array<{
            /**
             * Defines the date and time the object was initially created.
             */
            create_time?: string;
            /**
             * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
             */
            name?: string;
            object_uuid?: string;
        }>;
    };
    /**
     * The interval at which the schedule will run (in minutes)
     */
    run_interval?: number;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    storage_uuid?: string;
};
