"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var api_1 = require("./api");
var Server_1 = require("./Objects/Server");
var Storage_1 = require("./Objects/Storage");
var Network_1 = require("./Objects/Network");
var IP_1 = require("./Objects/IP");
var ISOImage_1 = require("./Objects/ISOImage");
var SSHKey_1 = require("./Objects/SSHKey");
var Template_1 = require("./Objects/Template");
var Location_1 = require("./Objects/Location");
var ObjectStorage_1 = require("./Objects/ObjectStorage");
var Label_1 = require("./Objects/Label");
var Loadbalancer_1 = require("./Objects/Loadbalancer");
var Events_1 = require("./Objects/Events");
var Firewall_1 = require("./Objects/Firewall");
var PAAS_1 = require("./Objects/PAAS");
var Deleted_1 = require("./Objects/Deleted");
var PaasServiceTemplate_1 = require("./Objects/PaasServiceTemplate");
var PaasService_1 = require("./Objects/PaasService");
var PaasSecurityZone_1 = require("./Objects/PaasSecurityZone");
var PaasServiceMetrics_1 = require("./Objects/PaasServiceMetrics");
var Marketplace_1 = require("./Objects/Marketplace");
var lodash_1 = require("lodash");
/**
 * generate Client Class for all Connections
 * test
 */
var GridscaleClient = /** @class */ (function () {
    /**
     * Init Client with Default Values
     *
     *
     * @param _token Security Token
     * @param _userId UUID of User
     * @param _options
     */
    function GridscaleClient(_token, _userId, _options) {
        if (_options === void 0) { _options = {}; }
        // Store Security Tokens
        api_1.api.storeToken(_token, _userId);
        // Store advanced Options
        api_1.api.setOptions(_options);
        // Call Subtypes
        this.Server = new Server_1.Server(api_1.api);
        this.Storage = new Storage_1.Storage(api_1.api);
        this.Network = new Network_1.Network(api_1.api);
        this.IP = new IP_1.IP(api_1.api);
        this.ISOImage = new ISOImage_1.ISOImage(api_1.api);
        this.SSHKey = new SSHKey_1.SSHKey(api_1.api);
        this.Template = new Template_1.Template(api_1.api);
        this.Location = new Location_1.Location(api_1.api);
        this.ObjectStorage = new ObjectStorage_1.ObjectStorage(api_1.api);
        this.Label = new Label_1.Label(api_1.api);
        this.Loadbalancer = new Loadbalancer_1.Loadbalancer(api_1.api);
        this.Events = new Events_1.Events(api_1.api);
        this.Firewall = new Firewall_1.Firewall(api_1.api);
        this.PAAS = new PAAS_1.PAAS(api_1.api);
        this.PaasServiceTemplate = new PaasServiceTemplate_1.PaasServiceTemplate(api_1.api);
        this.PaasService = new PaasService_1.PaasService(api_1.api);
        this.PaasSecurityZone = new PaasSecurityZone_1.PaasSecurityZone(api_1.api);
        this.Deleted = new Deleted_1.Deleted(api_1.api);
        this.MarketplaceApplication = new Marketplace_1.MarketplaceApplication(api_1.api);
        this.watchRequest = api_1.api.watchRequest.bind(api_1.api);
    }
    /**
     * Set the identifier of the client (used in X-Api-Client Header)
     * @param _client
     */
    GridscaleClient.prototype.setApiClient = function (_client) {
        api_1.api.storeClient(_client);
    };
    /**
     * Set a new Token and User-UUID
     * @param _token
     * @param _userId
     */
    GridscaleClient.prototype.setToken = function (_token, _userUUID) {
        api_1.api.storeToken(_token, _userUUID);
    };
    /**
     * Set the HTTP endpoint of the API
     * @param _endpoint
     */
    GridscaleClient.prototype.setEndpoint = function (_endpoint) {
        api_1.api.setOptions({ endpoint: _endpoint });
    };
    /**
     * Inject a custom fetch method, otherwise the API will decide if to use the browser's fetch method or a polyfill
     * @param _fetch
     */
    GridscaleClient.prototype.setFetch = function (_fetch) {
        api_1.api.setOptions({ fetch: fetch });
    };
    /**
     * Add an additional logger callback, called whenever an error is happening
     * @param _callback
     */
    GridscaleClient.prototype.addLogger = function (_callback) {
        api_1.api.addLogger(_callback);
    };
    /**
     * Get the paas service metrics API which is a special one as the service-uuid is required early in the URL
     * @param _serviceUUID
     */
    GridscaleClient.prototype.PaasServiceMetrics = function (_serviceUUID) {
        return new PaasServiceMetrics_1.PaasServiceMetrics(api_1.api, _serviceUUID);
    };
    /**
     * Stringifies all non string-values of a HTTP Response (e.g. headers)
     * @param object
     * @deprecated
     */
    GridscaleClient.prototype.stringifyResponseRequest = function (object) {
        var _this = this;
        // tslint:disable-next-line: no-any
        var tmp = {};
        lodash_1.forEach(object, function (_val, _key) {
            if (_val instanceof Headers) {
                tmp[_key] = {};
                _val.forEach(function (_h, _k) {
                    tmp[_key][_k] = _h;
                });
            }
            else if (_val instanceof Request) {
                tmp[_key] = _this.stringifyResponseRequest(_val);
            }
            else if (['string', 'number', 'object', 'boolean'].indexOf(typeof (_val)) >= 0) {
                tmp[_key] = _val;
            }
        });
        return tmp;
    };
    return GridscaleClient;
}());
exports.Client = GridscaleClient;

//# sourceMappingURL=client.js.map
