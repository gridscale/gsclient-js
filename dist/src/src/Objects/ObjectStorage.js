"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectStorage = /** @class */ (function () {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    function ObjectStorage(_api) {
        this._api = _api;
    }
    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    ObjectStorage.prototype.accessKeys = function (_options, _callback) {
        return this._api.get('/objects/objectstorages/access_keys', _options, _callback);
    };
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    ObjectStorage.prototype.accessKey = function (_access_key, _callback) {
        return this._api.get('/objects/objectstorages/access_keys/' + _access_key, _callback);
    };
    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    ObjectStorage.prototype.removeAccessKey = function (_access_key, _callback) {
        return this._api.remove('/objects/objectstorages/access_keys/' + _access_key, _callback);
    };
    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    ObjectStorage.prototype.createAccessKey = function (_callback) {
        return this._api.post('/objects/objectstorages/access_keys', _callback);
    };
    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     *
     * @deprecated
     */
    ObjectStorage.prototype.buckets = function (_options, _callback) {
        return this._api.get('/objects/objectstorages/buckets', _options, _callback);
    };
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     *
     * @deprecated
     */
    ObjectStorage.prototype.bucket = function (_bucket_name, _callback) {
        return this._api.get('/objects/objectstorages/buckets/' + _bucket_name, _callback);
    };
    return ObjectStorage;
}());
exports.ObjectStorage = ObjectStorage;

//# sourceMappingURL=ObjectStorage.js.map
