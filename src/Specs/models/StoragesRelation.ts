/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServerinStrorage } from './ServerinStrorage';
import type { SnapshotSchedulesinStorage } from './SnapshotSchedulesinStorage';

/**
 * The information about other object which are related to this storage. the object could be servers and/or snapshots snapshot schedules
 */
export type StoragesRelation = {
    servers?: ServerinStrorage;
    snapshot_schedules?: SnapshotSchedulesinStorage;
}