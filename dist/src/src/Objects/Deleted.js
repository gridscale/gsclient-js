"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Deleted = /** @class */ (function () {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    function Deleted(_api) {
        this._api = _api;
        this._defaults = {
            'page': 0,
            'limit': 25
        };
    }
    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    Deleted.prototype.setDefaults = function (_options) {
        lodash_1.assignIn(this._defaults, _options);
    };
    Deleted.prototype._buildRequestOptions = function (_options) {
        // Clone Defaults
        var defaults = lodash_1.assignIn({}, this._defaults);
        // Add Options
        if (!lodash_1.isUndefined(_options) && !lodash_1.isFunction(_options)) {
            lodash_1.assignIn(defaults, _options);
        }
        // Return Default Values
        return defaults;
    };
    Deleted.prototype._deleted = function (_key, _options, _callback) {
        var requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (lodash_1.isFunction(_options) && lodash_1.isUndefined(_callback)) {
            _callback = _options;
        }
        return this._api.get('/objects/deleted/' + _key, _options, _callback);
    };
    Deleted.prototype._pipe_result = function (_originalPromise, _key) {
        return new Promise(function (_resolve, _reject) {
            _originalPromise.then(function (_originalResult) {
                if (typeof (_originalResult.result[_key]) !== 'undefined') {
                    _originalResult.result = _originalResult.result[_key];
                }
                _resolve(_originalResult);
            }, function (_e) { return _reject(_e); });
        });
    };
    Deleted.prototype.ips = function (_options, _callback) {
        return this._pipe_result(this._deleted('ips', _options, _callback), 'deleted_ips');
    };
    Deleted.prototype.isoimages = function (_options, _callback) {
        return this._pipe_result(this._deleted('isoimages', _options, _callback), 'deleted_isoimages');
    };
    Deleted.prototype.networks = function (_options, _callback) {
        return this._pipe_result(this._deleted('networks', _options, _callback), 'deleted_networks');
    };
    Deleted.prototype.servers = function (_options, _callback) {
        return this._pipe_result(this._deleted('servers', _options, _callback), 'deleted_servers');
    };
    Deleted.prototype.snapshots = function (_options, _callback) {
        return this._pipe_result(this._deleted('snapshots', _options, _callback), 'deleted_snapshots');
    };
    Deleted.prototype.storages = function (_options, _callback) {
        return this._pipe_result(this._deleted('storages', _options, _callback), 'deleted_storages');
    };
    Deleted.prototype.templates = function (_options, _callback) {
        return this._pipe_result(this._deleted('templates', _options, _callback), 'deleted_templates');
    };
    Deleted.prototype.loadbalancers = function (_options, _callback) {
        return this._pipe_result(this._deleted('loadbalancers', _options, _callback), 'deleted_loadbalancers');
    };
    Deleted.prototype.paasServices = function (_options, _callback) {
        return this._pipe_result(this._deleted('paas_services', _options, _callback), 'deleted_paas_services');
    };
    return Deleted;
}());
exports.Deleted = Deleted;

//# sourceMappingURL=Deleted.js.map
