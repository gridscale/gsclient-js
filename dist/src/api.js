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
exports.api = exports.APIClass = exports.GSError = void 0;
var lodash_1 = require("lodash");
require('es6-promise').polyfill();
require('isomorphic-fetch');
var GSError = /** @class */ (function (_super) {
    __extends(GSError, _super);
    function GSError(message, result) {
        var _this = _super.call(this) || this;
        _this.success = false;
        _this.name = 'GridscaleError';
        // try to assemble message with more details from result
        if (result.response
            && result.response.request
            && result.response.request.method
            && typeof (result.response.status) !== 'undefined' && result.response.request.url) {
            _this.message = 'Error : ' + result.response.request.method
                + ' | ' + result.response.status
                + ' | ' + result.response.request.url.split('?')[0];
        }
        else {
            _this.message = message || 'Default Message';
        }
        _this.result = result;
        _this.response = result.response || undefined;
        return _this;
    }
    return GSError;
}(Error));
exports.GSError = GSError;
var APIClass = /** @class */ (function () {
    function APIClass() {
        var _this = this;
        // Local Settings
        this.settings = {
            endpoint: 'https://api.gridscale.io',
            endpointOverrides: {},
            token: '',
            userId: '',
            limit: 25,
            watchdelay: 51,
            apiClient: 'gs_api_node'
        };
        /**
         * Update local Request Options
         *
         * @param _option
         */
        this.setOptions = function (_option) {
            // Assign new Values
            lodash_1.assignIn(_this.settings, _option);
        };
        this.callbacks = [];
        this.addLogger = function (_callback) {
            _this.callbacks.push(_callback);
        };
        this.log = function (_error) {
            for (var i = 0; i < _this.callbacks.length; i++) {
                _this.callbacks[i](_error);
            }
        };
    }
    /**
     * Store api client in current session
     * @param _client  String
     */
    APIClass.prototype.storeClient = function (_client) {
        this.settings.apiClient = _client;
    };
    /**
     * Store Token for Current Session
     * @param _token Secret Token
     */
    APIClass.prototype.storeToken = function (_token, _userId) {
        // Store Token
        this.settings.token = _token;
        this.settings.userId = _userId;
    };
    APIClass.prototype.request = function (_path, _options, _callback) {
        if (_path === void 0) { _path = ''; }
        if (_callback === void 0) { _callback = function () { }; }
        return this.makeRequest(_path, _options, _callback);
    };
    /**
     * Start the API Request
     *
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {Promise}
     */
    APIClass.prototype.makeRequest = function (_path, _options, _callback) {
        var _this = this;
        if (_path === void 0) { _path = ''; }
        if (_callback === void 0) { _callback = function () { }; }
        /**
         * Build Request Object
         * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
         */
        var options = !lodash_1.isObject(_options) ? {} : lodash_1.assignIn({}, _options);
        // check if we should use another endpoint for this path (mocking)
        var endpoint = this.settings.endpoint;
        if (this.settings.endpointOverrides && typeof (this.settings.endpointOverrides) === 'object') {
            lodash_1.forEach(this.settings.endpointOverrides, function (_overrideEndpoint, _overridePath) {
                if (_overridePath.match(/^\/(.*)\/$/) && _path.split('?')[0].match(new RegExp(RegExp.$1))) {
                    endpoint = _overrideEndpoint;
                }
                else if (_path.split('?')[0] === _overridePath) {
                    endpoint = _overrideEndpoint;
                }
                else {
                    return true;
                }
                return false;
            });
        }
        // Build Options
        var url = _path.search('https://') === 0 ? _path : endpoint + _path; // on Links there is already
        options.headers = options.headers ? options.headers : {};
        options.headers['X-Auth-UserId'] = this.settings.userId;
        options.headers['X-Auth-Token'] = this.settings.token;
        options.headers['X-Api-Client'] = this.settings.apiClient;
        // return results as object or text
        var getResult = function (_response, _rejectOnJsonFailure) {
            if (_rejectOnJsonFailure === void 0) { _rejectOnJsonFailure = true; }
            return new Promise(function (_resolve, _reject) {
                if (_response.status !== 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type').indexOf('application/json') === 0) {
                    _response.json()
                        .then(function (json) {
                        _resolve(_this.camelify(json));
                    })
                        .catch(function () {
                        if (_rejectOnJsonFailure) {
                            _reject();
                        }
                        else {
                            // try text
                            _response.text().then(function (text) { return _resolve(text); })
                                .catch(function (e) { return _resolve(null); });
                        }
                    });
                }
                else {
                    _response.text().then(function (text) { return _resolve(text); })
                        .catch(function (e) { return _resolve(null); });
                }
            });
        };
        // Setup DEF
        var def = new Promise(function (_resolve, _reject) {
            // Fire Request
            var onSuccess = function (_response, _request, _requestInit) {
                getResult(_response.clone()).then(function (_result) {
                    var result = {
                        success: true,
                        result: _result,
                        response: _response.clone(),
                        id: null,
                        requestInit: _requestInit
                    };
                    // Check for Links and generate them as Functions
                    if (_result && _result._links) {
                        var links_1 = {};
                        lodash_1.forEach(_result._links, function (link, linkname) {
                            links_1[linkname] = _this.link(_result._links[linkname]);
                        });
                        result.links = links_1;
                    }
                    if (_result && _result._meta) {
                        result.meta = _result._meta;
                    }
                    /**
                     * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                     */
                    if (options['method'] === 'POST' || options['method'] === 'PATCH' || options['method'] === 'DELETE') {
                        if (result.response.headers.has('x-request-id')) {
                            result.watch = function () { return _this.watchRequest(result.response.headers.get('x-request-id')); };
                        }
                    }
                    _resolve(result);
                    setTimeout(function () { return _callback(_response.clone(), result); });
                })
                    .catch(function () {
                    // tslint:disable-next-line: no-use-before-declare
                    onFail(_response, _request, _requestInit, 'json');
                });
            };
            var onFail = function (_response, _request, _requestInit, _failType) {
                if (_failType === void 0) { _failType = 'request'; }
                getResult(_response.clone(), false).then(function (_result) {
                    var result = {
                        success: false,
                        result: _result,
                        response: lodash_1.assign(_response.clone(), { request: _request }),
                        links: {},
                        watch: null,
                        id: lodash_1.uniqueId('apierror_' + (new Date()).getTime() + '_'),
                        requestInit: _requestInit,
                        failureType: _failType
                    };
                    _this.log({
                        result: result,
                        response: _response.clone(),
                        id: result.id,
                        requestInit: result.requestInit
                    });
                    _reject(new GSError('Request Error', result));
                    setTimeout(function () { return _callback(_response.clone(), result); });
                });
            };
            var request = new Request(url, options);
            var promise = (_this.settings.fetch || fetch)(request);
            promise
                .then(function (_response) {
                if (_response.ok) {
                    // The promise does not reject on HTTP errors
                    onSuccess(_response, request, options);
                }
                else {
                    onFail(_response, request, options);
                }
            })
                .catch(function (_response) {
                _reject(new GSError('Network failure', _response));
            });
            // Return promise
            return promise;
        });
        // Catch all Errors and
        // Return DEF
        return def;
    };
    /**
     * Build Option URL to expand URL
     * @param _options
     * @returns {string}
     */
    APIClass.prototype.buildRequestURL = function (_options) {
        // Push Valued
        var url = [];
        // Add Options to URL
        lodash_1.forEach(_options, function (val, key) {
            if (lodash_1.isArray(_options[key])) {
                if (_options[key].length > 0) {
                    url.push(key + '=' + _options[key].join(','));
                }
            }
            else {
                url.push(key + '=' + _options[key]);
            }
        });
        return url.length > 0 ? ('?' + url.join('&')) : '';
    };
    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
    APIClass.prototype.get = function (_path, _options, _callback) {
        if (lodash_1.isObject(_options)) {
            _path += this.buildRequestURL(_options);
        }
        // If No Options but Callback is given
        if (lodash_1.isUndefined(_callback) && lodash_1.isFunction(_options)) {
            _callback = _options;
        }
        return this.makeRequest(_path, { method: 'GET' }, _callback);
    };
    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    APIClass.prototype.remove = function (_path, _callback) {
        return this.makeRequest(_path, { method: 'DELETE' }, _callback);
    };
    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    APIClass.prototype.post = function (_path, _attributes, _callback) {
        return this.makeRequest(_path, { method: 'POST', body: JSON.stringify(this.lodashify(_attributes)), headers: { 'Content-Type': 'application/json' } }, _callback);
    };
    /**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    APIClass.prototype.patch = function (_path, _attributes, _callback) {
        return this.makeRequest(_path, { method: 'PATCH', body: JSON.stringify(this.lodashify(_attributes)), headers: { 'Content-Type': 'application/json' } }, _callback);
    };
    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {Function}
     */
    APIClass.prototype.link = function (_link) {
        var _this = this;
        /**
         * generate Function that has an Optional Callback
         */
        return function (_callback) {
            return _this.makeRequest(_link.href, { method: 'GET' }, _callback);
        };
    };
    /**
     * Start Pooling on Request Endpoint
     *
     *
     * @param _requestid
     * @param _callback
     * @returns {Promise}
     */
    APIClass.prototype.requestpooling = function (_requestid, _callback) {
        return this.makeRequest('/requests/' + _requestid, { method: 'GET' }, _callback);
    };
    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    APIClass.prototype.buildAndStartRequestCallback = function (_requestid, _resolve, _reject) {
        var _this = this;
        /**
         * Start new Request
         */
        this.requestpooling(_requestid).then(function (_result) {
            // Check Request Status to Decide if we start again
            if (_result.result[_requestid].status === 'pending') {
                setTimeout(function () {
                    _this.buildAndStartRequestCallback(_requestid, _resolve, _reject);
                }, _this.settings.watchdelay);
            }
            else if (_result.response.status === 200) {
                // Job done
                _resolve(_result);
            }
            else {
                // IF
                _reject(_result);
            }
        }, function (_result) { return _reject(_result); });
    };
    /**
     * Watch a Single Request until it is ready or failed
     *
     * @param _requestid
     * @param _callback
     */
    APIClass.prototype.watchRequest = function (_requestid) {
        var _this = this;
        return new Promise(function (_resolve, _reject) {
            _this.buildAndStartRequestCallback(_requestid, _resolve, _reject);
        });
    };
    /**
     * transform camel case attribute names to lodashed names
     * @param _attributes
     */
    APIClass.prototype.lodashify = function (_attributes) {
        var _this = this;
        var tmp = {};
        lodash_1.forEach(_attributes, function (_val, _key) {
            if (lodash_1.isPlainObject(_val)) {
                tmp[_key.replace(/([a-z0-9]+)([A-Z])/g, '$1_$2').toLowerCase()] = _this.lodashify(_val);
            }
            else {
                tmp[_key.replace(/([a-z0-9]+)([A-Z])/g, '$1_$2').toLowerCase()] = _val;
            }
        });
        return tmp;
    };
    /**
     * transform lodashed attribute names to camel case names
     * @param _attributes
     */
    APIClass.prototype.camelify = function (_attributes) {
        var _this = this;
        var tmp;
        var arrayMode = false;
        if (lodash_1.isArray(_attributes)) {
            tmp = [];
            arrayMode = true;
        }
        else {
            tmp = {};
        }
        lodash_1.forEach(_attributes, function (_val, _key) {
            if (String(_key).indexOf('_') === 0) {
                tmp[_key] = _val;
                return true;
            }
            if (arrayMode) {
                if (lodash_1.isPlainObject(_val) || lodash_1.isArray(_val)) {
                    tmp.push(_this.camelify(_val));
                }
                else {
                    tmp.push(_val);
                }
            }
            else {
                var newKey = String(_key).replace(/_([a-z0-9])/g, function (all, letter) { return letter.toUpperCase(); });
                if (lodash_1.isPlainObject(_val) || lodash_1.isArray(_val)) {
                    tmp[newKey] = _this.camelify(_val);
                }
                else {
                    tmp[newKey] = _val;
                }
            }
        });
        return tmp;
    };
    return APIClass;
}());
exports.APIClass = APIClass;
exports.api = new APIClass();

//# sourceMappingURL=api.js.map
