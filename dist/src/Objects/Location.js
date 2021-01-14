"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var lodash_1 = require("lodash");
var Location = /** @class */ (function () {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    function Location(_api) {
        this._api = _api;
        this._defaults = {
            'page': 0,
            'limit': 25
        };
        this._basepath = '/objects/locations';
    }
    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    Location.prototype.setDefaults = function (_options) {
        lodash_1.assignIn(this._defaults, _options);
    };
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    Location.prototype._buildRequestOptions = function (_options) {
        // Clone Defaults
        var defaults = lodash_1.assignIn({}, this._defaults);
        // Add Options
        if (!lodash_1.isUndefined(_options) && !lodash_1.isFunction(_options)) {
            lodash_1.assignIn(defaults, _options);
        }
        // Return Default Values
        return defaults;
    };
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.LocationsGetResponse>>}
     */
    Location.prototype.list = function (_options, _callback) {
        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (lodash_1.isFunction(_options) && lodash_1.isUndefined(_callback)) {
            _callback = _options;
        }
        return this._api.get(this._basepath, requestOptions, _callback);
    };
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    Location.prototype.get = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid, _callback);
    };
    /**
    Return all IP Adresses for this locations
    */
    Location.prototype.getLocationIPs = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/ips', _callback);
    };
    /**
    Return all isoimages for this location
    */
    Location.prototype.getLocationISOImages = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/isoimages', _callback);
    };
    /**
    Return all networks for this location
    */
    Location.prototype.getLocationNetworks = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/networks', _callback);
    };
    /**
    Return all servers for this location
    */
    Location.prototype.getLocationServers = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/servers', _callback);
    };
    /**
    Return all snapshots for this location
    */
    Location.prototype.getLocationSnapshots = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/snapshots', _callback);
    };
    /**
    Return all storages for this location
    */
    Location.prototype.getLocationStorages = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/storages', _callback);
    };
    /**
    Return all storages for this location
    */
    Location.prototype.getLocationTemplates = function (_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/templates', _callback);
    };
    return Location;
}());
exports.Location = Location;

//# sourceMappingURL=Location.js.map
