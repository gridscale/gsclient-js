"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var GridscaleObjects = /** @class */ (function () {
    /**
     * Create Object Endpoint
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    function GridscaleObjects(_api, _path, _listKey, _getKey) {
        this._listKey = _listKey;
        this._getKey = _getKey;
        this._api = _api;
        this._defaults = {
            'page': 0,
            'limit': 25
        };
        this._basepath = _path;
    }
    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    GridscaleObjects.prototype.setDefaults = function (_options) {
        lodash_1.assignIn(this._defaults, _options);
    };
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {any}
     * @private
     */
    GridscaleObjects.prototype._buildRequestOptions = function (_options) {
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
     * @returns {any}
     */
    GridscaleObjects.prototype.list = function (_options, _callback) {
        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (lodash_1.isFunction(_options) && lodash_1.isUndefined(_callback)) {
            _callback = _options;
        }
        if (this._listKey) {
            // TODO: auch noch für sub lists..
            return this._pipe_result(this._api.get(this._basepath, requestOptions, _callback), this._listKey);
        }
        return this._api.get(this._basepath, requestOptions, _callback);
    };
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    GridscaleObjects.prototype.get = function (_uuid, _callback) {
        if (this._getKey) {
            return this._pipe_result(this._api.get(this._basepath + '/' + _uuid, {}, _callback), this._getKey);
        }
        return this._api.get(this._basepath + '/' + _uuid, {}, _callback);
    };
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    GridscaleObjects.prototype.remove = function (_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _uuid, _callback);
    };
    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    GridscaleObjects.prototype.create = function (_attributes, _callback) {
        return this._api.post(this._basepath, _attributes, _callback);
    };
    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    GridscaleObjects.prototype.patch = function (_uuid, _attributes, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid, _attributes, _callback);
    };
    /**
     * Wrapper for Subtypes to save some lines of code
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    GridscaleObjects.prototype._sub = function (_type, _uuid, _options, _callback) {
        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (lodash_1.isFunction(_options) && lodash_1.isUndefined(_callback)) {
            _callback = _options;
        }
        return this._api.get(this._basepath + '/' + _uuid + '/' + _type, requestOptions, _callback);
    };
    /**
     * Get Single Sub Object by UUID
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @private
     */
    GridscaleObjects.prototype._sub_get = function (_type, _uuid, _sub_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, {}, _callback);
    };
    /**
     * Post to Subtype ob Object
     *
     * @param _type
     * @param _uuid
     * @param _attributes
     * @param _callback
     * @returns {TRequest|any}
     * @private
     */
    GridscaleObjects.prototype._sub_post = function (_type, _uuid, _attributes, _callback) {
        return this._api.post(this._basepath + '/' + _uuid + '/' + _type, _attributes, _callback);
    };
    /**
     * Patch Subobject
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest}
     * @private
     */
    GridscaleObjects.prototype._sub_patch = function (_type, _uuid, _sub_uuid, _attributes, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, _attributes, _callback);
    };
    /**
     * Remove Sub Type from Object
     *
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     * @private
     */
    GridscaleObjects.prototype._sub_remove = function (_type, _uuid, _sub_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, _callback);
    };
    GridscaleObjects.prototype._pipe_result = function (_originalPromise, _key) {
        var _this = this;
        return new Promise(function (_resolve, _reject) {
            _originalPromise.then(function (_originalResult) {
                if (typeof (_originalResult.result[_key]) !== 'undefined') {
                    _originalResult.result = _originalResult.result[_key];
                }
                // modify links...
                if (_originalResult.links) {
                    var newLinks_1 = {};
                    lodash_1.forEach(_originalResult.links, function (_link, _key) {
                        newLinks_1[_key] = function () {
                            return _this._pipe_result(_link(), _this._listKey);
                        };
                    });
                    _originalResult.links = newLinks_1;
                }
                _resolve(_originalResult);
            }, function (_e) { return _reject(_e); });
        });
    };
    /**
     *  Get Events for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    GridscaleObjects.prototype.events = function (_uuid, _options, _callback) {
        return this._sub('events', _uuid, _options, _callback);
    };
    return GridscaleObjects;
}());
exports.GridscaleObjects = GridscaleObjects;

//# sourceMappingURL=GridscaleObjects.js.map
