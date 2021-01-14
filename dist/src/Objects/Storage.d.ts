import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, VoidApiResult, RequestOptions } from '../api';
import * as models from './../Specs/index';
import { CreateResponse, StorageCreate, StorageUpdate, SnapshotUpdate, SnapshotExportToS3Payload, SnapshotCreate, SnapshotScheduleUpdate, SnapshotScheduleCreate } from './../Specs';
interface Storage {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StoragesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.StorageGetResponse>>;
    create(_attributes: StorageCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: StorageUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class Storage extends GridscaleObjects {
    constructor(_api: APIClass);
    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    clone(_uuid: string, _callback?: Function): Promise<ApiResult<CreateResponse>>;
    /**
     *  Snapshots
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshots(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.SnapshotsGetResponse>>;
    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotGetResponse>>}
     */
    snapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<models.SnapshotGetResponse>>;
    /**
     * Patch Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchSnapshot(_uuid: string, _snapshot_uuid: string, _attribute: SnapshotUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    rollbackSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  - name
     *  - labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    exportSnapshot(_uuid: string, _snapshot_uuid: string, _data: SnapshotExportToS3Payload, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshot(_uuid: string, _attribute: SnapshotCreate, _callback?: Function): Promise<ApiResult<CreateResponse>>;
    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     *  Snapshots Scheduler
     *
     */
    /**
     *  Get Snapshot Schedler for this Storage
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshotSchedulers(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.SnapshotSchedulesGetResponse>>;
    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotScheduleGetResponse>>}
     */
    snapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: Function): Promise<ApiResult<models.SnapshotScheduleGetResponse>>;
    /**
     * Patch Snapshot Schedler
     *
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _attribute: SnapshotScheduleUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshotScheduler(_uuid: string, _attribute: SnapshotScheduleCreate, _callback?: Function): Promise<ApiResult<CreateResponse>>;
    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * List all backup schedules for the storage
     *
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback
     * @returns {Promise<ApiResult<models.StorageBackupSchedulesGetResponse>>}
     */
    backupSchedules(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageBackupSchedulesGetResponse>>;
    /**
     * Fetches one backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback
     */
    backupScheduler(_uuid: string, _backup_schedule_uuid: string, _callback?: Function): Promise<ApiResult<models.StorageBackupScheduleGetResponse>>;
    /**
     * Creates a new backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_options
     * @param _callback
     */
    createBackupScheduler(_uuid: string, _backup_schedule_options: models.StorageBackupScheduleCreate, _callback?: Function): Promise<ApiResult<CreateResponse>>;
    /**
     * Modifies existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options
     * @param callback
     */
    patchBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _backup_schedule_options: models.StorageBackupScheduleUpdate, _callback?: Function): Promise<ApiResult<models.StorageBackupScheduleUpdate>>;
    /**
     * Remove existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback
     */
    removeStorageBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * List all backups of the storage
     *
     * @param _uuid Storage UUID
     * @param _callback
     */
    backups(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageBackupsGetResponse>>;
    /**
     * Remove existing backup
     *
     * @param _uuid Storage UUID
     * @param _backup_uuid
     * @param _callback
     */
    deleteStorageBackup(_uuid: string, _backup_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    rollbackStorageBackup(_uuid: string, _backup_uuid: string, _attributes: models.StorageRollback, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback
     */
    createFromBackup(_name: string, _backup_uuid: string, _callback?: Function): Promise<ApiResult<CreateResponse>>;
}
export { Storage };
