"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GridscaleObjects_1 = require("./GridscaleObjects");
var Storage = /** @class */ (function (_super) {
    __extends(Storage, _super);
    function Storage(_api) {
        return _super.call(this, _api, '/objects/storages') || this;
    }
    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    Storage.prototype.clone = function (_uuid, _callback) {
        return this._api.post(this._basepath + '/' + _uuid + '/clone', _callback);
    };
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
    Storage.prototype.snapshots = function (_uuid, _options, _callback) {
        return this._sub('snapshots', _uuid, _options, _callback);
    };
    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotGetResponse>>}
     */
    Storage.prototype.snapshot = function (_uuid, _snapshot_uuid, _callback) {
        return this._sub_get('snapshots', _uuid, _snapshot_uuid, _callback);
    };
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
    Storage.prototype.patchSnapshot = function (_uuid, _snapshot_uuid, _attribute, _callback) {
        return this._sub_patch('snapshots', _uuid, _snapshot_uuid, _attribute, _callback);
    };
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
    Storage.prototype.rollbackSnapshot = function (_uuid, _snapshot_uuid, _callback) {
        return this._api.patch('/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/rollback', { rollback: true }, _callback);
    };
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
    Storage.prototype.exportSnapshot = function (_uuid, _snapshot_uuid, _data, _callback) {
        return this._api.patch('/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/export_to_s3', _data, _callback);
    };
    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    Storage.prototype.createSnapshot = function (_uuid, _attribute, _callback) {
        return this._sub_post('snapshots', _uuid, _attribute, _callback);
    };
    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    Storage.prototype.removeSnapshot = function (_uuid, _snapshot_uuid, _callback) {
        return this._sub_remove('snapshots', _uuid, _snapshot_uuid, _callback);
    };
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
    Storage.prototype.snapshotSchedulers = function (_uuid, _options, _callback) {
        return this._sub('snapshot_schedules', _uuid, _options, _callback);
    };
    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotScheduleGetResponse>>}
     */
    Storage.prototype.snapshotScheduler = function (_uuid, _snapshot_scheduler_uuid, _callback) {
        return this._sub_get('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    };
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
    Storage.prototype.patchSnapshotScheduler = function (_uuid, _snapshot_scheduler_uuid, _attribute, _callback) {
        return this._sub_patch('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _attribute, _callback);
    };
    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    Storage.prototype.createSnapshotScheduler = function (_uuid, _attribute, _callback) {
        return this._sub_post('snapshot_schedules', _uuid, _attribute, _callback);
    };
    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    Storage.prototype.removeSnapshotScheduler = function (_uuid, _snapshot_scheduler_uuid, _callback) {
        return this._sub_remove('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    };
    /**
     * List all backup schedules for the storage
     *
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback
     * @returns {Promise<ApiResult<models.StorageBackupSchedulesGetResponse>>}
     */
    Storage.prototype.backupSchedules = function (_uuid, _options, _callback) {
        return this._sub('backup_schedules', _uuid, _options, _callback);
    };
    /**
     * Fetches one backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback
     */
    Storage.prototype.backupScheduler = function (_uuid, _backup_schedule_uuid, _callback) {
        return this._sub_get('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    };
    /**
     * Creates a new backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_options
     * @param _callback
     */
    Storage.prototype.createBackupScheduler = function (_uuid, _backup_schedule_options, _callback) {
        return this._sub_post('backup_schedules', _uuid, _backup_schedule_options, _callback);
    };
    /**
     * Modifies existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options
     * @param callback
     */
    Storage.prototype.patchBackupSchedule = function (_uuid, _backup_schedule_uuid, _backup_schedule_options, _callback) {
        return this._sub_patch('backup_schedules', _uuid, _backup_schedule_uuid, _backup_schedule_options, _callback);
    };
    /**
     * Remove existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback
     */
    Storage.prototype.removeStorageBackupSchedule = function (_uuid, _backup_schedule_uuid, _callback) {
        return this._sub_remove('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    };
    /**
     * List all backups of the storage
     *
     * @param _uuid Storage UUID
     * @param _callback
     */
    Storage.prototype.backups = function (_uuid, _options, _callback) {
        return this._sub('backups', _uuid, _options, _callback);
    };
    /**
     * Remove existing backup
     *
     * @param _uuid Storage UUID
     * @param _backup_uuid
     * @param _callback
     */
    Storage.prototype.deleteStorageBackup = function (_uuid, _backup_uuid, _callback) {
        return this._sub_remove('backups', _uuid, _backup_uuid, _callback);
    };
    Storage.prototype.rollbackStorageBackup = function (_uuid, _backup_uuid, _attributes, _callback) {
        return this._sub_patch('backups', _uuid, _backup_uuid + '/rollback', _attributes, _callback);
    };
    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback
     */
    Storage.prototype.createFromBackup = function (_name, _backup_uuid, _callback) {
        return this._api.post(this._basepath + '/import', { backup: {
                name: _name,
                backup_uuid: _backup_uuid,
            } }, _callback);
    };
    return Storage;
}(GridscaleObjects_1.GridscaleObjects));
exports.Storage = Storage;

//# sourceMappingURL=Storage.js.map
