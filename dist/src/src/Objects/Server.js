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
var lodash_1 = require("lodash");
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(_api) {
        return _super.call(this, _api, '/objects/servers', 'servers') || this;
    }
    /**
     * Start/Stop Server
     *
     * @param _uuid
     * @param _power
     * @param _callback
     * @returns {any|TRequest}
     */
    Server.prototype.power = function (_uuid, _power, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/power', { power: _power }, _callback);
    };
    /**
     * Send ACPI-Shutdown to User
     *
     * @param _uuid
     * @param _callback
     * @returns {any|TRequest}
     */
    Server.prototype.shutdown = function (_uuid, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/shutdown', {}, _callback);
    };
    /**
     *  IP Adress Handling
     *
     */
    /**
     *  Get IPs for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    Server.prototype.ips = function (_uuid, _options, _callback) {
        return this._sub('ips', _uuid, _options, _callback);
    };
    /**
     * Get IP that is in Relation with Server
     *
     * @param _uuid
     * @param _ip_uuid
     * @param _callback
     * @returns {any}
     */
    Server.prototype.ip = function (_uuid, _ip_uuid, _callback) {
        return this._sub_get('ips', _uuid, _ip_uuid, _callback);
    };
    /**
     * Relate an IP with the Server
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    Server.prototype.addIp = function (_uuid, _ip_uuid, _callback) {
        return this._sub_post('ips', _uuid, { 'object_uuid': _ip_uuid }, _callback);
    };
    /**
     * Remove IP-Adress from Server
     *
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    Server.prototype.removeIp = function (_uuid, _ip_uuid, _callback) {
        return this._sub_remove('ips', _uuid, _ip_uuid, _callback);
    };
    /**
     *  Storages
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    Server.prototype.storages = function (_uuid, _options, _callback) {
        return this._sub('storages', _uuid, _options, _callback);
    };
    /**
     *  Get Metrics for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    Server.prototype.metrics = function (_uuid, _options, _callback) {
        return this._sub('metrics', _uuid, _options, _callback);
    };
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {any}
     */
    Server.prototype.storage = function (_uuid, _storage_uuid, _callback) {
        return this._sub_get('storages', _uuid, _storage_uuid, _callback);
    };
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    Server.prototype.patchStorage = function (_uuid, _storage_uuid, _attribute, _callback) {
        return this._sub_patch('storages', _uuid, _storage_uuid, _attribute, _callback);
    };
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    Server.prototype.addStorage = function (_uuid, _storage_uuid, _callback) {
        return this._sub_post('storages', _uuid, { 'object_uuid': _storage_uuid }, _callback);
    };
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    Server.prototype.removeStorage = function (_uuid, _storage_uuid, _callback) {
        return this._sub_remove('storages', _uuid, _storage_uuid, _callback);
    };
    /**
     *  Isoimages
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    Server.prototype.isoimages = function (_uuid, _options, _callback) {
        return this._sub('isoimages', _uuid, _options, _callback);
    };
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _callback
     * @returns {any}
     */
    Server.prototype.isoimage = function (_uuid, _isoimage_uuid, _callback) {
        return this._sub_get('isoimages', _uuid, _isoimage_uuid, _callback);
    };
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    Server.prototype.patchIsoimage = function (_uuid, _isoimage_uuid, _attribute, _callback) {
        return this._sub_patch('isoimages', _uuid, _isoimage_uuid, _attribute, _callback);
    };
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    Server.prototype.addIsoimage = function (_uuid, _isoimage_uuid, _callback) {
        return this._sub_post('isoimages', _uuid, { 'object_uuid': _isoimage_uuid }, _callback);
    };
    /**
     * Remove Isoimage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    Server.prototype.removeIsoimage = function (_uuid, _isoimage_uuid, _callback) {
        return this._sub_remove('isoimages', _uuid, _isoimage_uuid, _callback);
    };
    /**
     *  Networks
     *
     */
    /**
     *  Get NEtworks for this Object
     *
     * @param _uuid Server UUID
     * @param _callback Callback Function
     */
    Server.prototype.networks = function (_uuid, _options, _callback) {
        return this._sub('networks', _uuid, _options, _callback);
    };
    /**
     * Get single NEtwork <=> Server Relation
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any}
     */
    Server.prototype.network = function (_uuid, _network_uuid, _callback) {
        return this._sub_get('networks', _uuid, _network_uuid, _callback);
    };
    /**
     * Patch Network that is related to a Server
     *
     * Attributes:
     *   bootdevice
     *   l3security
     *   ordering
     *
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    Server.prototype.patchNetwork = function (_uuid, _network_uuid, _attribute, _callback) {
        return this._sub_patch('networks', _uuid, _network_uuid, _attribute, _callback);
    };
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    Server.prototype.addNetwork = function (_uuid, _network_uuid, _additionalOptions, _callback) {
        if (_additionalOptions === undefined) {
            _additionalOptions = {};
        }
        var _options = lodash_1.assignIn({ 'object_uuid': _network_uuid }, _additionalOptions);
        return this._sub_post('networks', _uuid, _options, _callback);
    };
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    Server.prototype.removeNetwork = function (_uuid, _network_uuid, _callback) {
        return this._sub_remove('networks', _uuid, _network_uuid, _callback);
    };
    return Server;
}(GridscaleObjects_1.GridscaleObjects));
exports.Server = Server;

//# sourceMappingURL=Server.js.map
