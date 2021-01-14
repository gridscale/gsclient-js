/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SnapshotScheduleUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The interval at which the schedule will run (in minutes)
     */
    run_interval?: number;
    /**
     * The amount of Snapshots to keep before overwriting the last created Snapshot.
     */
    keep_snapshots?: number;
    /**
     * The date and time that the snapshot schedule will be run.
     */
    next_runtime?: string;
}
