(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var process = {};
// browserify-ignore-end
var colors = require('colors');

var gridscale = require('@gridscale/gsclient-js').gridscale;
var client;



/**
 * creates the client and fires sample requests
 * @param _token string - the API Token
 * @param _user_uuid string - the User-UUID to which the token belongs
 */
function createClient(_token, _user_uuid) {
  client = new gridscale.Client(_token, _user_uuid);

  listServers(["power=false"], "Stopped Servers:");
  listServers(["power=true"], "Running Servers:");
  listStorages("Storages:");
  listMarketplaceApps("Marketplace Apps:");
}




/**
 * fetches the servers with given filters and outputs a list
 * @param _filters string[] - optional filters for the request. field + operator + testValue
 * @param _headline string - optional headline to display
 */
function listServers(_filters = [], _headline = "") {
  client.Server.list({
      page: 0,
      limit : 10,
      sort: "name",
      fields: ["name","object_uuid","power"],
      filter: _filters
  }).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.servers) {
      if (_request.result.servers.hasOwnProperty(x)) {
        let _server = _request.result.servers[x];
        output(_server.object_uuid + ": " + _server.name, _server.power ? 'green': 'red');
      }
    }
  }).
  catch((_error) => {
    // handle the error
    output("An error occured", 'bgRed');
    if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
      output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

    } else {
      output("Unknown error " + _error.message);
    }
  });
}

/**
 * fetches the marketplace applications and outputs a list
 * @param _headline string - optional headline to display
 */
function listMarketplaceApps(_headline = "") {
  client.MarketplaceApplication.list({}).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.applications) {
      if (_request.result.applications.hasOwnProperty(x)) {
        let _application = _request.result.applications[x];
        output(_application.object_uuid + ": " + _application.name, 'blue');
      }
    }
  }).
    catch((_error) => {
      // handle the error
      output("An error occured", 'bgRed');
      if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
        output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

      } else {
        output("Unknown error " + _error.message);
      }
    });
}

/**
 * fetches the servers and outputs a list
 * @param _headline string - optional headline to display
 */
function listStorages(_headline = "") {
  client.Storage.list({
      page: 0,
      limit : 10,
      sort: "name",
      fields: ["name","object_uuid"]
  }).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.storages) {
      if (_request.result.storages.hasOwnProperty(x)) {
        let _storage = _request.result.storages[x];
        output(_storage.object_uuid + ": " + _storage.name, 'magenta');
      }
    }
  }).
  catch((_error) => {
    // handle the error
    output("An error occured", 'bgRed');
    if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
      output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

    } else {
      output("Unknown error " + _error.message);
    }
  });
}



/**
 * outputs text with colors in browser or in console for node
 * @param txt string
 * @param color string
 */
function output(txt = "", color = "white") {
  if (typeof(document) !== 'undefined' && document.body) {
    var div = document.createElement('div');
    div.textContent = txt;

    if (color.indexOf('bg') === 0)          div.style.backgroundColor = color.substr(2).toLowerCase();
    else if (['bold'].indexOf(color) >= 0)  div.style.fontWeight = color;
    else                                    div.style.color = color;

    document.body.appendChild(div);

  } else {
    console.log(colors[color](txt));
  }
}



// ask for credentials
if (typeof(document) !== 'undefined' && document.body) {
  // for browser ...

  var intro = document.createElement('p');
  intro.innerHTML = 'Welcome to the gridscale API client example! You will now be asked for an API-Token and an User-UUID. Please log in to the gridscale panel (<a href="https://my.gridscale.io" target="_blank">https://my.gridscale.io</a>) and navigate to the "API-Keys" section to generate one. Read access is enough. The User-UUID is also displayed here.';
  intro.setAttribute('class', 'intro');
  document.body.appendChild(intro);

  var form = document.createElement('form');

  var inputToken = document.createElement('input');
  inputToken.setAttribute('name', 'token');
  inputToken.setAttribute('placeholder', 'API-Token');
  inputToken.setAttribute('required', true);

  var inputUser = document.createElement('input');
  inputUser.setAttribute('name', 'user');
  inputUser.setAttribute('placeholder', 'User-UUID');
  inputUser.setAttribute('required', true);

  var button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'Start request');

  form.appendChild(inputToken);
  form.appendChild(inputUser);
  form.appendChild(button);

  document.body.appendChild(form);

  form.onsubmit = function(e) {
    e.preventDefault();
    var p = document.createElement('p');
    p.textContent = "Fetching server list";
    document.body.appendChild(p);
    createClient(inputToken.value.trim(), inputUser.value.trim());
  }

} else {
  // for node
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  output('Welcome to the gridscale API client example! You will now be asked for an API-Token and an User-UUID. Please log in to the gridscale panel (https://my.gridscale.io) and navigate to the "API-Keys" section to generate one. Read access es enough. The User-UUID is also displayed here."', 'cyan');
  output();

  readline.question('Please enter an API-Token: ', (_token) => {
    readline.question('Please enter the User-UUID: ', (_uuid) => {
      readline.close();
      createClient(_token.trim(), _uuid.trim());
    });
  });
}

},{"@gridscale/gsclient-js":315,"colors":321,"readline":316}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupLocation = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class BackupLocation extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, "/objects/backup_locations");
    }
}
exports.BackupLocation = BackupLocation;

},{"./GridscaleObjects":8}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Certificate extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, "/objects/certificates");
    }
}
exports.Certificate = Certificate;

},{"./GridscaleObjects":8}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deleted = void 0;
class Deleted {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api) {
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
    setDefaults(_options) {
        this._defaults = Object.assign(Object.assign({}, this._defaults), _options);
    }
    _buildRequestOptions(_options) {
        // Clone Defaults
        let defaults = Object.assign(Object.assign({}, this._defaults), _options || {});
        // Return Default Values
        return defaults;
    }
    _deleted(_key, _options, _callback) {
        const requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }
        return this._api.get('/objects/deleted/' + _key, _options, _callback);
    }
    ips(_options, _callback) {
        return this._deleted('ips', _options, _callback);
    }
    isoimages(_options, _callback) {
        return this._deleted('isoimages', _options, _callback);
    }
    networks(_options, _callback) {
        return this._deleted('networks', _options, _callback);
    }
    servers(_options, _callback) {
        return this._deleted('servers', _options, _callback);
    }
    snapshots(_options, _callback) {
        return this._deleted('snapshots', _options, _callback);
    }
    storages(_options, _callback) {
        return this._deleted('storages', _options, _callback);
    }
    templates(_options, _callback) {
        return this._deleted('templates', _options, _callback);
    }
    loadbalancers(_options, _callback) {
        return this._deleted('loadbalancers', _options, _callback);
    }
    paasServices(_options, _callback) {
        return this._deleted('paas_services', _options, _callback);
    }
}
exports.Deleted = Deleted;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Events extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/events'); }
}
exports.Events = Events;

},{"./GridscaleObjects":8}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firewall = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Firewall extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/firewalls'); }
}
exports.Firewall = Firewall;

},{"./GridscaleObjects":8}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPU = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class GPU extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/gpus'); }
    listFlavors(_options, _callback) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }
        return this._api.get('/objects/gpu_flavors', Object.assign(Object.assign({}, requestOptions), { limit: 100 }), _callback);
    }
}
exports.GPU = GPU;

},{"./GridscaleObjects":8}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridscaleObjects = void 0;
class GridscaleObjects {
    /**
     * Create Object Endpoint
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api, _path) {
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
    setDefaults(_options) {
        this._defaults = Object.assign(Object.assign({}, this._defaults), _options);
    }
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions(_options) {
        // Clone Defaults
        const defaults = Object.assign(Object.assign({}, this._defaults), _options || {});
        // Return Default Values
        return defaults;
    }
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     */
    list(_options, _callback) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }
        return this._api.get(this._basepath, requestOptions, _callback);
    }
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid, {}, _callback);
    }
    /**
     * remove Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _uuid, _callback);
    }
    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<CreateResult>>}
     */
    create(_attributes, _callback) {
        return this._api.post(this._basepath, _attributes, _callback);
    }
    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patch(_uuid, _attributes, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid, _attributes, _callback);
    }
    /**
     * Wrapper for Subtypes to save some lines of code
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    _sub(_type, _uuid, _options, _callback) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }
        return this._api.get(this._basepath + '/' + _uuid + '/' + _type, requestOptions, _callback);
    }
    /**
     * Get Single Sub Object by UUID
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @private
     */
    _sub_get(_type, _uuid, _sub_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, {}, _callback);
    }
    /**
     * Post to Subtype ob Object
     *
     * @param _type
     * @param _uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_post(_type, _uuid, _attributes, _callback) {
        return this._api.post(this._basepath + '/' + _uuid + '/' + _type, _attributes, _callback);
    }
    /**
     * Patch Subobject
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_patch(_type, _uuid, _sub_uuid, _attributes, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, _attributes, _callback);
    }
    /**
     * Remove Sub Type from Object
     *
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_remove(_type, _uuid, _sub_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, _callback);
    }
    /**
     *  Get Events for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    events(_uuid, _options, _callback) {
        return this._sub('events', _uuid, _options, _callback);
    }
}
exports.GridscaleObjects = GridscaleObjects;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IP = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class IP extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/ips'); }
}
exports.IP = IP;

},{"./GridscaleObjects":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISOImage = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class ISOImage extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/isoimages'); }
}
exports.ISOImage = ISOImage;

},{"./GridscaleObjects":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Label extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/labels'); }
}
exports.Label = Label;

},{"./GridscaleObjects":8}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loadbalancer = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Loadbalancer extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/loadbalancers'); }
}
exports.Loadbalancer = Loadbalancer;

},{"./GridscaleObjects":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
class Location {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api) {
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
    setDefaults(_options) {
        this._defaults = Object.assign(Object.assign({}, this._defaults), _options);
    }
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions(_options) {
        // Clone Defaults
        const defaults = Object.assign(Object.assign({}, this._defaults), _options || {});
        // Return Default Values
        return defaults;
    }
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.LocationsGetResponse>>}
     */
    list(_options, _callback) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);
        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }
        return this._api.get(this._basepath, requestOptions, _callback);
    }
    /**
     * Create location
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<CreateResult>>}
     */
    create(_attributes, _callback) {
        return this._api.post(this._basepath, _attributes, _callback);
    }
    /**
     * Patch location
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patch(_uuid, _attributes, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid, _attributes, _callback);
    }
    /**
     * remove Single location by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _uuid, _callback);
    }
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid, _callback);
    }
    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/ips', _callback);
    }
    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/isoimages', _callback);
    }
    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/networks', _callback);
    }
    /**
    Return all servers for this location
    */
    getLocationServers(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/servers', _callback);
    }
    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/snapshots', _callback);
    }
    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/storages', _callback);
    }
    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _uuid + '/templates', _callback);
    }
}
exports.Location = Location;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceApplication = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class MarketplaceApplication extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/objects/marketplace/applications');
    }
}
exports.MarketplaceApplication = MarketplaceApplication;

},{"./GridscaleObjects":8}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Network extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/networks'); }
    /**
     * List pinned servers
     *
     * @param _network_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    pinnedServers(_network_uuid, _callback) {
        return this._api.get(this._basepath + '/' + _network_uuid + '/pinned_servers', _callback);
    }
    /**
     * Pin a server to an ip
     *
     * @param _network_uuid
     * @param _server_uuid
     * @param _ip
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    pinServerIp(_network_uuid, _server_uuid, _payload, _callback) {
        return this._api.patch(this._basepath + '/' + _network_uuid + '/pinned_servers/' + _server_uuid, _payload, _callback);
    }
    /**
     * Unpin a server from an ip
     *
     * @param _network_uuid
     * @param _server_uuid
     * @param _ip
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    unpinServerIp(_network_uuid, _server_uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _network_uuid + '/pinned_servers/' + _server_uuid, _callback);
    }
}
exports.Network = Network;

},{"./GridscaleObjects":8}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStorage = void 0;
class ObjectStorage {
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api) {
        this._api = _api;
    }
    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeysGetResponse>>}
     */
    accessKeys(_options, _callback) {
        return this._api.get('/objects/objectstorages/access_keys', _options, _callback);
    }
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key, _callback) {
        return this._api.get('/objects/objectstorages/access_keys/' + _access_key, _callback);
    }
    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key, _callback) {
        return this._api.remove('/objects/objectstorages/access_keys/' + _access_key, _callback);
    }
    /**
     * Creates new Access Key
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeyCreateResponse>>}
     */
    createAccessKey(_attributes, _callback) {
        return this._api.post('/objects/objectstorages/access_keys', _attributes, _callback);
    }
    /**
     * patches Access Key
     *
     * @param _options
     * @param _callback
     */
    patchAccessKey(_access_key, _attributes, _callback) {
        return this._api.patch('/objects/objectstorages/access_keys/' + _access_key, _attributes, _callback);
    }
    /**
     * List Buckets
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeysGetResponse>>}
     */
    buckets(_options, _callback) {
        return this._api.get('/objects/objectstorages/buckets', _options, _callback);
    }
}
exports.ObjectStorage = ObjectStorage;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAAS = void 0;
const PaasServiceTemplate_1 = require("./PaasServiceTemplate");
const PaasSecurityZone_1 = require("./PaasSecurityZone");
const PaasService_1 = require("./PaasService");
/**
 * this class is only a wrapper to the PaasService, PaasServiceTemplate and PaasSecurityZone classes, due to historical reasons...
 * @deprecated
 */
class PAAS {
    constructor(_api) {
        this._api = _api;
        this.serviceTemplates = new PaasServiceTemplate_1.PaasServiceTemplate(this._api);
        this.securityZones = new PaasSecurityZone_1.PaasSecurityZone(this._api);
        this.services = new PaasService_1.PaasService(this._api);
    }
}
exports.PAAS = PAAS;

},{"./PaasSecurityZone":18,"./PaasService":19,"./PaasServiceTemplate":21}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaasSecurityZone = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class PaasSecurityZone extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/paas/security_zones'); }
}
exports.PaasSecurityZone = PaasSecurityZone;

},{"./GridscaleObjects":8}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaasService = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
const PaasServiceMetrics_1 = require("./PaasServiceMetrics");
class PaasService extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/objects/paas/services');
        this.api = _api;
    }
    listMetrics(_uuid, _callback) {
        return new PaasServiceMetrics_1.PaasServiceMetrics(this._api, _uuid).list({}, _callback);
    }
    renewCredentials(_uuid) {
        return this._api.patch(this._basepath + '/' + _uuid + '/renew_credentials', {});
    }
}
exports.PaasService = PaasService;

},{"./GridscaleObjects":8,"./PaasServiceMetrics":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaasServiceMetrics = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class PaasServiceMetrics extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api, _serviceUUID) {
        super(_api, '/objects/paas/services/' + _serviceUUID + '/metrics');
        this._defaults = {};
    }
}
exports.PaasServiceMetrics = PaasServiceMetrics;

},{"./GridscaleObjects":8}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaasServiceTemplate = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class PaasServiceTemplate extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/paas/service_templates'); }
}
exports.PaasServiceTemplate = PaasServiceTemplate;

},{"./GridscaleObjects":8}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSHKey = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class SSHKey extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/sshkeys'); }
}
exports.SSHKey = SSHKey;

},{"./GridscaleObjects":8}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Server extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/servers'); }
    /**
     * Start/Stop Server
     *
     * @param _uuid
     * @param _power
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    power(_uuid, _power, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/power', { power: _power }, _callback);
    }
    /**
     * Send ACPI-Shutdown to User
     *
     * @param _uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    shutdown(_uuid, _callback) {
        return this._api.patch(this._basepath + '/' + _uuid + '/shutdown', {}, _callback);
    }
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
    ips(_uuid, _options, _callback) {
        return this._sub('ips', _uuid, _options, _callback);
    }
    /**
     * Get IP that is in Relation with Server
     *
     * @param _uuid
     * @param _ip_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedIpGetResponse>>}
     */
    ip(_uuid, _ip_uuid, _callback) {
        return this._sub_get('ips', _uuid, _ip_uuid, _callback);
    }
    /**
     * Relate an IP with the Server
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addIp(_uuid, _ip_uuid, _callback) {
        return this._sub_post('ips', _uuid, { 'object_uuid': _ip_uuid }, _callback);
    }
    /**
     * Remove IP-Adress from Server
     *
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeIp(_uuid, _ip_uuid, _callback) {
        return this._sub_remove('ips', _uuid, _ip_uuid, _callback);
    }
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
    storages(_uuid, _options, _callback) {
        return this._sub('storages', _uuid, _options, _callback);
    }
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedStorageGetResponse>>}
     */
    storage(_uuid, _storage_uuid, _callback) {
        return this._sub_get('storages', _uuid, _storage_uuid, _callback);
    }
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchStorage(_uuid, _storage_uuid, _attribute, _callback) {
        return this._sub_patch('storages', _uuid, _storage_uuid, _attribute, _callback);
    }
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addStorage(_uuid, _storage_uuid, _callback) {
        return this._sub_post('storages', _uuid, { 'object_uuid': _storage_uuid }, _callback);
    }
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeStorage(_uuid, _storage_uuid, _callback) {
        return this._sub_remove('storages', _uuid, _storage_uuid, _callback);
    }
    /**
     *  Metrics
     *
     */
    /**
     *  Get Metrics for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    metrics(_uuid, _options, _callback) {
        return this._sub('metrics', _uuid, _options, _callback);
    }
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
    isoimages(_uuid, _options, _callback) {
        return this._sub('isoimages', _uuid, _options, _callback);
    }
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedIsoimageGetResponse>>}
     */
    isoimage(_uuid, _isoimage_uuid, _callback) {
        return this._sub_get('isoimages', _uuid, _isoimage_uuid, _callback);
    }
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchIsoimage(_uuid, _isoimage_uuid, _attribute, _callback) {
        return this._sub_patch('isoimages', _uuid, _isoimage_uuid, _attribute, _callback);
    }
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addIsoimage(_uuid, _isoimage_uuid, _callback) {
        return this._sub_post('isoimages', _uuid, { 'object_uuid': _isoimage_uuid }, _callback);
    }
    /**
     * Remove Isoimage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeIsoimage(_uuid, _isoimage_uuid, _callback) {
        return this._sub_remove('isoimages', _uuid, _isoimage_uuid, _callback);
    }
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
    networks(_uuid, _options, _callback) {
        return this._sub('networks', _uuid, _options, _callback);
    }
    /**
     * Get single NEtwork <=> Server Relation
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedNetworkGetResponse>>}
     */
    network(_uuid, _network_uuid, _callback) {
        return this._sub_get('networks', _uuid, _network_uuid, _callback);
    }
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
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchNetwork(_uuid, _network_uuid, _attribute, _callback) {
        return this._sub_patch('networks', _uuid, _network_uuid, _attribute, _callback);
    }
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addNetwork(_uuid, _network_uuid, _additionalOptions, _callback) {
        if (_additionalOptions === undefined) {
            _additionalOptions = { object_uuid: _network_uuid };
        }
        const _options = Object.assign({ 'object_uuid': _network_uuid }, _additionalOptions || {});
        return this._sub_post('networks', _uuid, _options, _callback);
    }
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeNetwork(_uuid, _network_uuid, _callback) {
        return this._sub_remove('networks', _uuid, _network_uuid, _callback);
    }
}
exports.Server = Server;

},{"./GridscaleObjects":8}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceApplication = void 0;
const GridscaleObjects_1 = require("../GridscaleObjects");
class MarketplaceApplication extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/marketplace/v1/applications');
    }
    catalog(_options, _callback) {
        return this._api.get('/marketplace/v1/catalog', _options, _callback);
    }
    catalogForAccount(account_uuid, _options, _callback) {
        return this._api.get('/marketplace/v1/catalog/' + account_uuid, _options, _callback);
    }
}
exports.MarketplaceApplication = MarketplaceApplication;

},{"../GridscaleObjects":8}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceApplicationInstance = void 0;
const GridscaleObjects_1 = require("../GridscaleObjects");
class MarketplaceApplicationInstance extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/marketplace/v1/projects');
    }
    /**
     * Create a new application instance
     */
    create(_attributes, _callback) {
        return new Promise((resolve, reject) => {
            this._api.post(this._basepath + '/' + _attributes.project_uuid + '/application-instances', _attributes, _callback)
                .then(res => {
                var _a, _b;
                if ((_b = (_a = res.result) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id) {
                    resolve(Object.assign(Object.assign({}, res), { result: Object.assign(Object.assign({}, res.result), { object_uuid: res.result.data.id, request_uuid: res.response.headers.get('x-correlate-id') }) }));
                }
                else {
                    reject(new Error('unknown response'));
                }
            })
                .catch(e => reject(e));
        });
    }
    /**
     * @deprecated please use `listInstances` method for this object type
     */
    list(_options, _callback) {
        return new Promise((resolve, reject) => {
            reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `listInstances` method for this object type!'));
        });
    }
    /**
     * List Application instances
     */
    listInstances(_project_uuid, _options, _callback) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);
        return this._api.get(this._basepath + '/' + _project_uuid + '/application-instances', requestOptions, _callback);
    }
    /**
     * @deprecated: Please use `getInstance` method for this object type
     */
    get(_uuid, _callback) {
        return new Promise((resolve, reject) => {
            reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `getInstance` method for this object type!'));
        });
    }
    /**
     * get Application instance detail
     */
    getInstance(_project_uuid, _uuid, _callback) {
        return this._api.get(this._basepath + '/' + _project_uuid + '/application-instances/' + _uuid, {}, _callback);
    }
    /**
     * @deprecated: Please use `requestDeleteInstance` method for this object type
     */
    remove(_uuid, _callback) {
        return new Promise((resolve, reject) => {
            reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `requestDeleteInstance` method for this object type!'));
        });
    }
    /**
     * request deletion of the instance
     */
    requestDeleteInstance(_project_uuid, _uuid, _callback) {
        return this._api.remove(this._basepath + '/' + _project_uuid + '/application-instances/' + _uuid, _callback);
    }
}
exports.MarketplaceApplicationInstance = MarketplaceApplicationInstance;

},{"../GridscaleObjects":8}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplacePlan = void 0;
const GridscaleObjects_1 = require("../GridscaleObjects");
class MarketplacePlan extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/marketplace/v1/plans');
    }
}
exports.MarketplacePlan = MarketplacePlan;

},{"../GridscaleObjects":8}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplacePlanSettings = void 0;
const GridscaleObjects_1 = require("../GridscaleObjects");
class MarketplacePlanSettings extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/marketplace/v1/plans');
    }
    get(_planUuid, _callback) {
        return this._api.get(this._basepath + '/' + _planUuid + '/settings-schema', {}, _callback);
    }
}
exports.MarketplacePlanSettings = MarketplacePlanSettings;

},{"../GridscaleObjects":8}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceVersion = void 0;
const GridscaleObjects_1 = require("./../GridscaleObjects");
class MarketplaceVersion extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/marketplace/v1/versions');
    }
}
exports.MarketplaceVersion = MarketplaceVersion;

},{"./../GridscaleObjects":8}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Storage extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) {
        super(_api, '/objects/storages');
    }
    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    clone(_uuid, _callback) {
        return this._api.post(this._basepath + '/' + _uuid + '/clone', _callback);
    }
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
    snapshots(_uuid, _options, _callback) {
        return this._sub('snapshots', _uuid, _options, _callback);
    }
    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotGetResponse>>}
     */
    snapshot(_uuid, _snapshot_uuid, _callback) {
        return this._sub_get('snapshots', _uuid, _snapshot_uuid, _callback);
    }
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
    patchSnapshot(_uuid, _snapshot_uuid, _attribute, _callback) {
        return this._sub_patch('snapshots', _uuid, _snapshot_uuid, _attribute, _callback);
    }
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
    rollbackSnapshot(_uuid, _snapshot_uuid, _callback) {
        return this._api.patch('/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/rollback', { rollback: true }, _callback);
    }
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
    exportSnapshot(_uuid, _snapshot_uuid, _data, _callback) {
        return this._api.patch('/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/export_to_s3', _data, _callback);
    }
    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshot(_uuid, _attribute, _callback) {
        return this._sub_post('snapshots', _uuid, _attribute, _callback);
    }
    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshot(_uuid, _snapshot_uuid, _callback) {
        return this._sub_remove('snapshots', _uuid, _snapshot_uuid, _callback);
    }
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
    snapshotSchedulers(_uuid, _options, _callback) {
        return this._sub('snapshot_schedules', _uuid, _options, _callback);
    }
    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotScheduleGetResponse>>}
     */
    snapshotScheduler(_uuid, _snapshot_scheduler_uuid, _callback) {
        return this._sub_get('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }
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
    patchSnapshotScheduler(_uuid, _snapshot_scheduler_uuid, _attribute, _callback) {
        return this._sub_patch('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _attribute, _callback);
    }
    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshotScheduler(_uuid, _attribute, _callback) {
        return this._sub_post('snapshot_schedules', _uuid, _attribute, _callback);
    }
    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshotScheduler(_uuid, _snapshot_scheduler_uuid, _callback) {
        return this._sub_remove('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }
    /**
     * List all backup schedules for the storage
     *
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback
     * @returns {Promise<ApiResult<models.StorageBackupSchedulesGetResponse>>}
     */
    backupSchedules(_uuid, _options, _callback) {
        return this._sub('backup_schedules', _uuid, _options, _callback);
    }
    /**
     * Fetches one backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback
     */
    backupScheduler(_uuid, _backup_schedule_uuid, _callback) {
        return this._sub_get('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }
    /**
     * Creates a new backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_options
     * @param _callback
     */
    createBackupScheduler(_uuid, _backup_schedule_options, _callback) {
        return this._sub_post('backup_schedules', _uuid, _backup_schedule_options, _callback);
    }
    /**
     * Modifies existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options
     * @param callback
     */
    patchBackupSchedule(_uuid, _backup_schedule_uuid, _backup_schedule_options, _callback) {
        return this._sub_patch('backup_schedules', _uuid, _backup_schedule_uuid, _backup_schedule_options, _callback);
    }
    /**
     * Remove existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback
     */
    removeStorageBackupSchedule(_uuid, _backup_schedule_uuid, _callback) {
        return this._sub_remove('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }
    /**
     * List all backups of the storage
     *
     * @param _uuid Storage UUID
     * @param _callback
     */
    backups(_uuid, _options, _callback) {
        return this._sub('backups', _uuid, _options, _callback);
    }
    /**
     * Remove existing backup
     *
     * @param _uuid Storage UUID
     * @param _backup_uuid
     * @param _callback
     */
    deleteStorageBackup(_uuid, _backup_uuid, _callback) {
        return this._sub_remove('backups', _uuid, _backup_uuid, _callback);
    }
    rollbackStorageBackup(_uuid, _backup_uuid, _attributes, _callback) {
        return this._sub_patch('backups', _uuid, _backup_uuid + '/rollback', _attributes, _callback);
    }
    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback
     */
    createFromBackup(_name, _backup_uuid, _callback) {
        return this._api.post(this._basepath + '/import', { backup: {
                name: _name,
                backup_uuid: _backup_uuid,
            } }, _callback);
    }
}
exports.Storage = Storage;

},{"./GridscaleObjects":8}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const GridscaleObjects_1 = require("./GridscaleObjects");
class Template extends GridscaleObjects_1.GridscaleObjects {
    constructor(_api) { super(_api, '/objects/templates'); }
}
exports.Template = Template;

},{"./GridscaleObjects":8}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUCreateBody = exports.$FirewallV6outRule = exports.$FirewallV6inRule = exports.$FirewallV4outRule = exports.$FirewallV4inRule = exports.$FirewallUpdate = exports.$FirewallsGetResponse = exports.$FirewallRules = exports.$FirewallRelation = exports.$FirewallIndex = exports.$FirewallGetResponse = exports.$FirewallCreate = exports.$Firewall = exports.$EventResponse = exports.$DistributedStoragesUsages = exports.$DhcpServer = exports.$DeletedTemplatesGetResponse = exports.$DeletedStoragesGetResponse = exports.$DeletedSnapshotsGetResponse = exports.$DeletedServersGetResponse = exports.$DeletedPaasServicesGetResponse = exports.$DeletedNetworksGetResponse = exports.$DeletedLoadbalancersGetResponse = exports.$DeletedIsoimagesGetResponse = exports.$DeletedIpsGetResponse = exports.$CurrentUsagePerMinute = exports.$CreateResponse = exports.$CertificatesGetResponse = exports.$CertificateIndex = exports.$CertificateGetResponse = exports.$CertificateCreate = exports.$Certificate = exports.$BucketsGetResponse = exports.$BucketList = exports.$BucketGetResponse = exports.$Bucket = exports.$BackupSchedulesinStorage = exports.$BackupLocationsGetResponse = exports.$BackupLocationIndex = exports.$BackupLocation = exports.$AccumulatedUsage = exports.$AccessKeyUpdate = exports.$AccessKeysGetResponse = exports.$AccessKeyList = exports.$AccessKeyGetResponse = exports.$AccessKeyCreateResponse = exports.$AccessKeyCreate = exports.$AccessKey = exports.StorageVariant = exports.StorageType = void 0;
exports.$LinkedStorageGetResponse = exports.$LinkedStorageBrief = exports.$LinkedStorage = exports.$LinkedNetworkUpdate = exports.$LinkedNetworksGetResponse = exports.$LinkedNetworkGetResponse = exports.$LinkedNetworkBrief = exports.$LinkedNetwork = exports.$LinkedIsoimageUpdate = exports.$LinkedIsoimagesGetResponse = exports.$LinkedIsoimageGetResponse = exports.$LinkedIsoimageBrief = exports.$LinkedIsoimage = exports.$LinkedIpUpdate = exports.$LinkedIpsGetResponse = exports.$LinkedIpGetResponse = exports.$LinkedIpBrief = exports.$LinkedIp = exports.$LabelsGetResponse = exports.$LabelIndex = exports.$LabelGetResponse = exports.$Label = exports.$IsoimageUpdate = exports.$IsoimagesUsages = exports.$IsoimagesUsage = exports.$IsoimagesGetResponse = exports.$IsoimageRelation = exports.$IsoimageinServer = exports.$IsoimageIndex = exports.$IsoimageGetResponse = exports.$IsoimageCreate = exports.$Isoimage = exports.$IpUpdate = exports.$IpsUsages = exports.$IpsUsage = exports.$IpsGetResponse = exports.$IpRelation = exports.$IpGetResponse = exports.$IpCreateResponse = exports.$IpCreate = exports.$IpBriefIndex = exports.$IpBrief = exports.$Ip = exports.$GPUUpdateBody = exports.$GPUsGetResponse = exports.$GPUGetResponse = exports.$GPUGetProperties = exports.$GPUFlavorsGetResponse = exports.$GPUFlavorGetProperties = exports.$GPUCreateResponse = void 0;
exports.$NetworkPinnedServersResponse = exports.$NetworkinServer = exports.$NetworkinFirewall = exports.$NetworkIndex = exports.$NetworkGetResponse = exports.$NetworkCreate = exports.$Network = exports.$MetricsValue = exports.$Metrics = exports.$MarketplaceApplicationUpdate = exports.$MarketplaceApplicationsGetResponse = exports.$MarketplaceApplicationSetup = exports.$MarketplaceApplicationMetadata = exports.$MarketplaceApplicationIndex = exports.$MarketplaceApplicationImport = exports.$MarketplaceApplicationGetResponse = exports.$MarketplaceApplicationCreateResponse = exports.$MarketplaceApplicationCreate = exports.$MarketplaceApplication = exports.$LocationWithRelations = exports.$LocationUpdate = exports.$LocationsGetResponse = exports.$LocationRelationsGpuFlavor = exports.$LocationRelations = exports.$LocationInformation = exports.$LocationIndex = exports.$LocationGetResponse = exports.$LocationFeatures = exports.$LocationCreate = exports.$LocationChangeRequested = exports.$Location = exports.$LoadbalancerUpdate = exports.$LoadbalancersUsages = exports.$LoadbalancersUsage = exports.$LoadbalancersGetResponse = exports.$LoadbalancerinIp = exports.$LoadbalancerIndex = exports.$LoadbalancerGetResponse = exports.$LoadbalancerCreateForwardingRules = exports.$LoadbalancerCreateBackendServers = exports.$LoadbalancerCreate = exports.$Loadbalancer = exports.$ListenPortsByIpIndex = exports.$ListenPorts = exports.$LinkStorage = exports.$LinkNetwork = exports.$LinkIsoimage = exports.$LinkIp = exports.$LinkedStorageUpdate = exports.$LinkedStoragesGetResponse = void 0;
exports.$ServerinIp = exports.$ServerIndex = exports.$ServerGetResponse = exports.$ServerCreateResponse = exports.$ServerCreate = exports.$Server = exports.$RulesProperties = exports.$RocketStoragesUsages = exports.$RequestGetResponse = exports.$Request = exports.$PublicIpinServer = exports.$ProductUsage = exports.$PinnedServerPayload = exports.$PinnedServer = exports.$PaasServiceUpdate = exports.$PaasServiceTemplatesGetResponse = exports.$PaasServiceTemplateIndex = exports.$PaasServiceTemplate = exports.$PaasServicesUsages = exports.$PaasServicesUsage = exports.$PaasServicesinNetwork = exports.$PaasServicesGetResponse = exports.$PaasServiceResourceLimits = exports.$PaasServiceResourceLimit = exports.$PaasServiceParametersSchema = exports.$PaasServiceParameters = exports.$PaasServiceMetricsList = exports.$PaasServiceMetricsGetResponse = exports.$PaasServiceMetrics = exports.$PaasServiceIndex = exports.$PaasServiceGetResponse = exports.$PaasServiceCredentials = exports.$PaasServiceCreateResponse = exports.$PaasServiceCreate = exports.$PaasService = exports.$PaasSecurityZoneUpdate = exports.$PaasSecurityZonesRelation = exports.$PaasSecurityZonesinNetwork = exports.$PaasSecurityZonesGetResponse = exports.$PaasSecurityZones = exports.$PaasSecurityZoneRelation = exports.$PaasSecurityZoneIndex = exports.$PaasSecurityZoneGetResponse = exports.$PaasSecurityZoneCreateResponse = exports.$PaasSecurityZoneCreate = exports.$PaasSecurityZone = exports.$ObjectUsageOverview = exports.$NetworkUpdate = exports.$NetworksGetResponse = exports.$NetworkRelation = void 0;
exports.$StorageClone = exports.$StorageBackupUsages = exports.$StorageBackupsUsage = exports.$StorageBackupsGetResponse = exports.$StorageBackupScheduleUpdate = exports.$StorageBackupSchedulesGetResponse = exports.$StorageBackupScheduleIndex = exports.$StorageBackupScheduleGetResponse = exports.$StorageBackupScheduleCreate = exports.$StorageBackupSchedule = exports.$StorageBackupIndex = exports.$StorageBackup = exports.$Storage = exports.$SshkeyUpdate = exports.$SshkeysGetResponse = exports.$SshkeyIndex = exports.$SshkeyGetResponse = exports.$SshkeyCreate = exports.$Sshkey = exports.$SnapshotUpdate = exports.$SnapshotsUsages = exports.$SnapshotsUsage = exports.$SnapshotsGetResponse = exports.$SnapshotScheduleUpdate = exports.$SnapshotSchedulesinStorage = exports.$SnapshotSchedulesGetResponse = exports.$SnapshotScheduleIndex = exports.$SnapshotScheduleGetResponse = exports.$SnapshotScheduleCreate = exports.$SnapshotSchedule = exports.$SnapshotIndex = exports.$SnapshotGetResponse = exports.$SnapshotExportToS3Payload = exports.$SnapshotCreate = exports.$Snapshot = exports.$ServiceinPaasSecurityZones = exports.$ServiceinPaasSecurityZone = exports.$ServerUpdate = exports.$ServersUsages = exports.$ServersUsage = exports.$ServersGetResponse = exports.$ServerRelation = exports.$ServerPowerUpdate = exports.$ServerPowerStatus = exports.$ServerMetricsList = exports.$ServerMetricsGetResponse = exports.$ServerMetrics = exports.$ServerinStrorage = exports.$ServerinNetwork = exports.$ServerinIsoimage = void 0;
exports.$VlansinNetwork = exports.$UsagePerInterval = exports.$UsageGetResponseOverview = exports.$TemplateUpdate = exports.$TemplatesUsages = exports.$TemplatesUsage = exports.$TemplatesGetResponse = exports.$TemplateIndex = exports.$TemplateGetResponse = exports.$Template = exports.$TaskEvents = exports.$TaskEventName = exports.$TaskEventLabel = exports.$StorageVariant = exports.$StorageUpdate = exports.$StorageType = exports.$StorageTemplatesGetResponse = exports.$StorageTemplateCreate = exports.$StoragesUsage = exports.$StoragesRelation = exports.$StoragesinServer = exports.$StoragesGetResponse = exports.$StorageRollback = exports.$StorageIndex = exports.$StorageImportFromS3Object = exports.$StorageImportFromBackup = exports.$StorageGetResponse = exports.$StorageCreateTemplateSshkey = exports.$StorageCreateTemplatePassword = exports.$StorageCreate = void 0;
var StorageType_1 = require("./models/StorageType");
Object.defineProperty(exports, "StorageType", { enumerable: true, get: function () { return StorageType_1.StorageType; } });
var StorageVariant_1 = require("./models/StorageVariant");
Object.defineProperty(exports, "StorageVariant", { enumerable: true, get: function () { return StorageVariant_1.StorageVariant; } });
var _AccessKey_1 = require("./schemas/$AccessKey");
Object.defineProperty(exports, "$AccessKey", { enumerable: true, get: function () { return _AccessKey_1.$AccessKey; } });
var _AccessKeyCreate_1 = require("./schemas/$AccessKeyCreate");
Object.defineProperty(exports, "$AccessKeyCreate", { enumerable: true, get: function () { return _AccessKeyCreate_1.$AccessKeyCreate; } });
var _AccessKeyCreateResponse_1 = require("./schemas/$AccessKeyCreateResponse");
Object.defineProperty(exports, "$AccessKeyCreateResponse", { enumerable: true, get: function () { return _AccessKeyCreateResponse_1.$AccessKeyCreateResponse; } });
var _AccessKeyGetResponse_1 = require("./schemas/$AccessKeyGetResponse");
Object.defineProperty(exports, "$AccessKeyGetResponse", { enumerable: true, get: function () { return _AccessKeyGetResponse_1.$AccessKeyGetResponse; } });
var _AccessKeyList_1 = require("./schemas/$AccessKeyList");
Object.defineProperty(exports, "$AccessKeyList", { enumerable: true, get: function () { return _AccessKeyList_1.$AccessKeyList; } });
var _AccessKeysGetResponse_1 = require("./schemas/$AccessKeysGetResponse");
Object.defineProperty(exports, "$AccessKeysGetResponse", { enumerable: true, get: function () { return _AccessKeysGetResponse_1.$AccessKeysGetResponse; } });
var _AccessKeyUpdate_1 = require("./schemas/$AccessKeyUpdate");
Object.defineProperty(exports, "$AccessKeyUpdate", { enumerable: true, get: function () { return _AccessKeyUpdate_1.$AccessKeyUpdate; } });
var _AccumulatedUsage_1 = require("./schemas/$AccumulatedUsage");
Object.defineProperty(exports, "$AccumulatedUsage", { enumerable: true, get: function () { return _AccumulatedUsage_1.$AccumulatedUsage; } });
var _BackupLocation_1 = require("./schemas/$BackupLocation");
Object.defineProperty(exports, "$BackupLocation", { enumerable: true, get: function () { return _BackupLocation_1.$BackupLocation; } });
var _BackupLocationIndex_1 = require("./schemas/$BackupLocationIndex");
Object.defineProperty(exports, "$BackupLocationIndex", { enumerable: true, get: function () { return _BackupLocationIndex_1.$BackupLocationIndex; } });
var _BackupLocationsGetResponse_1 = require("./schemas/$BackupLocationsGetResponse");
Object.defineProperty(exports, "$BackupLocationsGetResponse", { enumerable: true, get: function () { return _BackupLocationsGetResponse_1.$BackupLocationsGetResponse; } });
var _BackupSchedulesinStorage_1 = require("./schemas/$BackupSchedulesinStorage");
Object.defineProperty(exports, "$BackupSchedulesinStorage", { enumerable: true, get: function () { return _BackupSchedulesinStorage_1.$BackupSchedulesinStorage; } });
var _Bucket_1 = require("./schemas/$Bucket");
Object.defineProperty(exports, "$Bucket", { enumerable: true, get: function () { return _Bucket_1.$Bucket; } });
var _BucketGetResponse_1 = require("./schemas/$BucketGetResponse");
Object.defineProperty(exports, "$BucketGetResponse", { enumerable: true, get: function () { return _BucketGetResponse_1.$BucketGetResponse; } });
var _BucketList_1 = require("./schemas/$BucketList");
Object.defineProperty(exports, "$BucketList", { enumerable: true, get: function () { return _BucketList_1.$BucketList; } });
var _BucketsGetResponse_1 = require("./schemas/$BucketsGetResponse");
Object.defineProperty(exports, "$BucketsGetResponse", { enumerable: true, get: function () { return _BucketsGetResponse_1.$BucketsGetResponse; } });
var _Certificate_1 = require("./schemas/$Certificate");
Object.defineProperty(exports, "$Certificate", { enumerable: true, get: function () { return _Certificate_1.$Certificate; } });
var _CertificateCreate_1 = require("./schemas/$CertificateCreate");
Object.defineProperty(exports, "$CertificateCreate", { enumerable: true, get: function () { return _CertificateCreate_1.$CertificateCreate; } });
var _CertificateGetResponse_1 = require("./schemas/$CertificateGetResponse");
Object.defineProperty(exports, "$CertificateGetResponse", { enumerable: true, get: function () { return _CertificateGetResponse_1.$CertificateGetResponse; } });
var _CertificateIndex_1 = require("./schemas/$CertificateIndex");
Object.defineProperty(exports, "$CertificateIndex", { enumerable: true, get: function () { return _CertificateIndex_1.$CertificateIndex; } });
var _CertificatesGetResponse_1 = require("./schemas/$CertificatesGetResponse");
Object.defineProperty(exports, "$CertificatesGetResponse", { enumerable: true, get: function () { return _CertificatesGetResponse_1.$CertificatesGetResponse; } });
var _CreateResponse_1 = require("./schemas/$CreateResponse");
Object.defineProperty(exports, "$CreateResponse", { enumerable: true, get: function () { return _CreateResponse_1.$CreateResponse; } });
var _CurrentUsagePerMinute_1 = require("./schemas/$CurrentUsagePerMinute");
Object.defineProperty(exports, "$CurrentUsagePerMinute", { enumerable: true, get: function () { return _CurrentUsagePerMinute_1.$CurrentUsagePerMinute; } });
var _DeletedIpsGetResponse_1 = require("./schemas/$DeletedIpsGetResponse");
Object.defineProperty(exports, "$DeletedIpsGetResponse", { enumerable: true, get: function () { return _DeletedIpsGetResponse_1.$DeletedIpsGetResponse; } });
var _DeletedIsoimagesGetResponse_1 = require("./schemas/$DeletedIsoimagesGetResponse");
Object.defineProperty(exports, "$DeletedIsoimagesGetResponse", { enumerable: true, get: function () { return _DeletedIsoimagesGetResponse_1.$DeletedIsoimagesGetResponse; } });
var _DeletedLoadbalancersGetResponse_1 = require("./schemas/$DeletedLoadbalancersGetResponse");
Object.defineProperty(exports, "$DeletedLoadbalancersGetResponse", { enumerable: true, get: function () { return _DeletedLoadbalancersGetResponse_1.$DeletedLoadbalancersGetResponse; } });
var _DeletedNetworksGetResponse_1 = require("./schemas/$DeletedNetworksGetResponse");
Object.defineProperty(exports, "$DeletedNetworksGetResponse", { enumerable: true, get: function () { return _DeletedNetworksGetResponse_1.$DeletedNetworksGetResponse; } });
var _DeletedPaasServicesGetResponse_1 = require("./schemas/$DeletedPaasServicesGetResponse");
Object.defineProperty(exports, "$DeletedPaasServicesGetResponse", { enumerable: true, get: function () { return _DeletedPaasServicesGetResponse_1.$DeletedPaasServicesGetResponse; } });
var _DeletedServersGetResponse_1 = require("./schemas/$DeletedServersGetResponse");
Object.defineProperty(exports, "$DeletedServersGetResponse", { enumerable: true, get: function () { return _DeletedServersGetResponse_1.$DeletedServersGetResponse; } });
var _DeletedSnapshotsGetResponse_1 = require("./schemas/$DeletedSnapshotsGetResponse");
Object.defineProperty(exports, "$DeletedSnapshotsGetResponse", { enumerable: true, get: function () { return _DeletedSnapshotsGetResponse_1.$DeletedSnapshotsGetResponse; } });
var _DeletedStoragesGetResponse_1 = require("./schemas/$DeletedStoragesGetResponse");
Object.defineProperty(exports, "$DeletedStoragesGetResponse", { enumerable: true, get: function () { return _DeletedStoragesGetResponse_1.$DeletedStoragesGetResponse; } });
var _DeletedTemplatesGetResponse_1 = require("./schemas/$DeletedTemplatesGetResponse");
Object.defineProperty(exports, "$DeletedTemplatesGetResponse", { enumerable: true, get: function () { return _DeletedTemplatesGetResponse_1.$DeletedTemplatesGetResponse; } });
var _DhcpServer_1 = require("./schemas/$DhcpServer");
Object.defineProperty(exports, "$DhcpServer", { enumerable: true, get: function () { return _DhcpServer_1.$DhcpServer; } });
var _DistributedStoragesUsages_1 = require("./schemas/$DistributedStoragesUsages");
Object.defineProperty(exports, "$DistributedStoragesUsages", { enumerable: true, get: function () { return _DistributedStoragesUsages_1.$DistributedStoragesUsages; } });
var _EventResponse_1 = require("./schemas/$EventResponse");
Object.defineProperty(exports, "$EventResponse", { enumerable: true, get: function () { return _EventResponse_1.$EventResponse; } });
var _Firewall_1 = require("./schemas/$Firewall");
Object.defineProperty(exports, "$Firewall", { enumerable: true, get: function () { return _Firewall_1.$Firewall; } });
var _FirewallCreate_1 = require("./schemas/$FirewallCreate");
Object.defineProperty(exports, "$FirewallCreate", { enumerable: true, get: function () { return _FirewallCreate_1.$FirewallCreate; } });
var _FirewallGetResponse_1 = require("./schemas/$FirewallGetResponse");
Object.defineProperty(exports, "$FirewallGetResponse", { enumerable: true, get: function () { return _FirewallGetResponse_1.$FirewallGetResponse; } });
var _FirewallIndex_1 = require("./schemas/$FirewallIndex");
Object.defineProperty(exports, "$FirewallIndex", { enumerable: true, get: function () { return _FirewallIndex_1.$FirewallIndex; } });
var _FirewallRelation_1 = require("./schemas/$FirewallRelation");
Object.defineProperty(exports, "$FirewallRelation", { enumerable: true, get: function () { return _FirewallRelation_1.$FirewallRelation; } });
var _FirewallRules_1 = require("./schemas/$FirewallRules");
Object.defineProperty(exports, "$FirewallRules", { enumerable: true, get: function () { return _FirewallRules_1.$FirewallRules; } });
var _FirewallsGetResponse_1 = require("./schemas/$FirewallsGetResponse");
Object.defineProperty(exports, "$FirewallsGetResponse", { enumerable: true, get: function () { return _FirewallsGetResponse_1.$FirewallsGetResponse; } });
var _FirewallUpdate_1 = require("./schemas/$FirewallUpdate");
Object.defineProperty(exports, "$FirewallUpdate", { enumerable: true, get: function () { return _FirewallUpdate_1.$FirewallUpdate; } });
var _FirewallV4inRule_1 = require("./schemas/$FirewallV4inRule");
Object.defineProperty(exports, "$FirewallV4inRule", { enumerable: true, get: function () { return _FirewallV4inRule_1.$FirewallV4inRule; } });
var _FirewallV4outRule_1 = require("./schemas/$FirewallV4outRule");
Object.defineProperty(exports, "$FirewallV4outRule", { enumerable: true, get: function () { return _FirewallV4outRule_1.$FirewallV4outRule; } });
var _FirewallV6inRule_1 = require("./schemas/$FirewallV6inRule");
Object.defineProperty(exports, "$FirewallV6inRule", { enumerable: true, get: function () { return _FirewallV6inRule_1.$FirewallV6inRule; } });
var _FirewallV6outRule_1 = require("./schemas/$FirewallV6outRule");
Object.defineProperty(exports, "$FirewallV6outRule", { enumerable: true, get: function () { return _FirewallV6outRule_1.$FirewallV6outRule; } });
var _GPUCreateBody_1 = require("./schemas/$GPUCreateBody");
Object.defineProperty(exports, "$GPUCreateBody", { enumerable: true, get: function () { return _GPUCreateBody_1.$GPUCreateBody; } });
var _GPUCreateResponse_1 = require("./schemas/$GPUCreateResponse");
Object.defineProperty(exports, "$GPUCreateResponse", { enumerable: true, get: function () { return _GPUCreateResponse_1.$GPUCreateResponse; } });
var _GPUFlavorGetProperties_1 = require("./schemas/$GPUFlavorGetProperties");
Object.defineProperty(exports, "$GPUFlavorGetProperties", { enumerable: true, get: function () { return _GPUFlavorGetProperties_1.$GPUFlavorGetProperties; } });
var _GPUFlavorsGetResponse_1 = require("./schemas/$GPUFlavorsGetResponse");
Object.defineProperty(exports, "$GPUFlavorsGetResponse", { enumerable: true, get: function () { return _GPUFlavorsGetResponse_1.$GPUFlavorsGetResponse; } });
var _GPUGetProperties_1 = require("./schemas/$GPUGetProperties");
Object.defineProperty(exports, "$GPUGetProperties", { enumerable: true, get: function () { return _GPUGetProperties_1.$GPUGetProperties; } });
var _GPUGetResponse_1 = require("./schemas/$GPUGetResponse");
Object.defineProperty(exports, "$GPUGetResponse", { enumerable: true, get: function () { return _GPUGetResponse_1.$GPUGetResponse; } });
var _GPUsGetResponse_1 = require("./schemas/$GPUsGetResponse");
Object.defineProperty(exports, "$GPUsGetResponse", { enumerable: true, get: function () { return _GPUsGetResponse_1.$GPUsGetResponse; } });
var _GPUUpdateBody_1 = require("./schemas/$GPUUpdateBody");
Object.defineProperty(exports, "$GPUUpdateBody", { enumerable: true, get: function () { return _GPUUpdateBody_1.$GPUUpdateBody; } });
var _Ip_1 = require("./schemas/$Ip");
Object.defineProperty(exports, "$Ip", { enumerable: true, get: function () { return _Ip_1.$Ip; } });
var _IpBrief_1 = require("./schemas/$IpBrief");
Object.defineProperty(exports, "$IpBrief", { enumerable: true, get: function () { return _IpBrief_1.$IpBrief; } });
var _IpBriefIndex_1 = require("./schemas/$IpBriefIndex");
Object.defineProperty(exports, "$IpBriefIndex", { enumerable: true, get: function () { return _IpBriefIndex_1.$IpBriefIndex; } });
var _IpCreate_1 = require("./schemas/$IpCreate");
Object.defineProperty(exports, "$IpCreate", { enumerable: true, get: function () { return _IpCreate_1.$IpCreate; } });
var _IpCreateResponse_1 = require("./schemas/$IpCreateResponse");
Object.defineProperty(exports, "$IpCreateResponse", { enumerable: true, get: function () { return _IpCreateResponse_1.$IpCreateResponse; } });
var _IpGetResponse_1 = require("./schemas/$IpGetResponse");
Object.defineProperty(exports, "$IpGetResponse", { enumerable: true, get: function () { return _IpGetResponse_1.$IpGetResponse; } });
var _IpRelation_1 = require("./schemas/$IpRelation");
Object.defineProperty(exports, "$IpRelation", { enumerable: true, get: function () { return _IpRelation_1.$IpRelation; } });
var _IpsGetResponse_1 = require("./schemas/$IpsGetResponse");
Object.defineProperty(exports, "$IpsGetResponse", { enumerable: true, get: function () { return _IpsGetResponse_1.$IpsGetResponse; } });
var _IpsUsage_1 = require("./schemas/$IpsUsage");
Object.defineProperty(exports, "$IpsUsage", { enumerable: true, get: function () { return _IpsUsage_1.$IpsUsage; } });
var _IpsUsages_1 = require("./schemas/$IpsUsages");
Object.defineProperty(exports, "$IpsUsages", { enumerable: true, get: function () { return _IpsUsages_1.$IpsUsages; } });
var _IpUpdate_1 = require("./schemas/$IpUpdate");
Object.defineProperty(exports, "$IpUpdate", { enumerable: true, get: function () { return _IpUpdate_1.$IpUpdate; } });
var _Isoimage_1 = require("./schemas/$Isoimage");
Object.defineProperty(exports, "$Isoimage", { enumerable: true, get: function () { return _Isoimage_1.$Isoimage; } });
var _IsoimageCreate_1 = require("./schemas/$IsoimageCreate");
Object.defineProperty(exports, "$IsoimageCreate", { enumerable: true, get: function () { return _IsoimageCreate_1.$IsoimageCreate; } });
var _IsoimageGetResponse_1 = require("./schemas/$IsoimageGetResponse");
Object.defineProperty(exports, "$IsoimageGetResponse", { enumerable: true, get: function () { return _IsoimageGetResponse_1.$IsoimageGetResponse; } });
var _IsoimageIndex_1 = require("./schemas/$IsoimageIndex");
Object.defineProperty(exports, "$IsoimageIndex", { enumerable: true, get: function () { return _IsoimageIndex_1.$IsoimageIndex; } });
var _IsoimageinServer_1 = require("./schemas/$IsoimageinServer");
Object.defineProperty(exports, "$IsoimageinServer", { enumerable: true, get: function () { return _IsoimageinServer_1.$IsoimageinServer; } });
var _IsoimageRelation_1 = require("./schemas/$IsoimageRelation");
Object.defineProperty(exports, "$IsoimageRelation", { enumerable: true, get: function () { return _IsoimageRelation_1.$IsoimageRelation; } });
var _IsoimagesGetResponse_1 = require("./schemas/$IsoimagesGetResponse");
Object.defineProperty(exports, "$IsoimagesGetResponse", { enumerable: true, get: function () { return _IsoimagesGetResponse_1.$IsoimagesGetResponse; } });
var _IsoimagesUsage_1 = require("./schemas/$IsoimagesUsage");
Object.defineProperty(exports, "$IsoimagesUsage", { enumerable: true, get: function () { return _IsoimagesUsage_1.$IsoimagesUsage; } });
var _IsoimagesUsages_1 = require("./schemas/$IsoimagesUsages");
Object.defineProperty(exports, "$IsoimagesUsages", { enumerable: true, get: function () { return _IsoimagesUsages_1.$IsoimagesUsages; } });
var _IsoimageUpdate_1 = require("./schemas/$IsoimageUpdate");
Object.defineProperty(exports, "$IsoimageUpdate", { enumerable: true, get: function () { return _IsoimageUpdate_1.$IsoimageUpdate; } });
var _Label_1 = require("./schemas/$Label");
Object.defineProperty(exports, "$Label", { enumerable: true, get: function () { return _Label_1.$Label; } });
var _LabelGetResponse_1 = require("./schemas/$LabelGetResponse");
Object.defineProperty(exports, "$LabelGetResponse", { enumerable: true, get: function () { return _LabelGetResponse_1.$LabelGetResponse; } });
var _LabelIndex_1 = require("./schemas/$LabelIndex");
Object.defineProperty(exports, "$LabelIndex", { enumerable: true, get: function () { return _LabelIndex_1.$LabelIndex; } });
var _LabelsGetResponse_1 = require("./schemas/$LabelsGetResponse");
Object.defineProperty(exports, "$LabelsGetResponse", { enumerable: true, get: function () { return _LabelsGetResponse_1.$LabelsGetResponse; } });
var _LinkedIp_1 = require("./schemas/$LinkedIp");
Object.defineProperty(exports, "$LinkedIp", { enumerable: true, get: function () { return _LinkedIp_1.$LinkedIp; } });
var _LinkedIpBrief_1 = require("./schemas/$LinkedIpBrief");
Object.defineProperty(exports, "$LinkedIpBrief", { enumerable: true, get: function () { return _LinkedIpBrief_1.$LinkedIpBrief; } });
var _LinkedIpGetResponse_1 = require("./schemas/$LinkedIpGetResponse");
Object.defineProperty(exports, "$LinkedIpGetResponse", { enumerable: true, get: function () { return _LinkedIpGetResponse_1.$LinkedIpGetResponse; } });
var _LinkedIpsGetResponse_1 = require("./schemas/$LinkedIpsGetResponse");
Object.defineProperty(exports, "$LinkedIpsGetResponse", { enumerable: true, get: function () { return _LinkedIpsGetResponse_1.$LinkedIpsGetResponse; } });
var _LinkedIpUpdate_1 = require("./schemas/$LinkedIpUpdate");
Object.defineProperty(exports, "$LinkedIpUpdate", { enumerable: true, get: function () { return _LinkedIpUpdate_1.$LinkedIpUpdate; } });
var _LinkedIsoimage_1 = require("./schemas/$LinkedIsoimage");
Object.defineProperty(exports, "$LinkedIsoimage", { enumerable: true, get: function () { return _LinkedIsoimage_1.$LinkedIsoimage; } });
var _LinkedIsoimageBrief_1 = require("./schemas/$LinkedIsoimageBrief");
Object.defineProperty(exports, "$LinkedIsoimageBrief", { enumerable: true, get: function () { return _LinkedIsoimageBrief_1.$LinkedIsoimageBrief; } });
var _LinkedIsoimageGetResponse_1 = require("./schemas/$LinkedIsoimageGetResponse");
Object.defineProperty(exports, "$LinkedIsoimageGetResponse", { enumerable: true, get: function () { return _LinkedIsoimageGetResponse_1.$LinkedIsoimageGetResponse; } });
var _LinkedIsoimagesGetResponse_1 = require("./schemas/$LinkedIsoimagesGetResponse");
Object.defineProperty(exports, "$LinkedIsoimagesGetResponse", { enumerable: true, get: function () { return _LinkedIsoimagesGetResponse_1.$LinkedIsoimagesGetResponse; } });
var _LinkedIsoimageUpdate_1 = require("./schemas/$LinkedIsoimageUpdate");
Object.defineProperty(exports, "$LinkedIsoimageUpdate", { enumerable: true, get: function () { return _LinkedIsoimageUpdate_1.$LinkedIsoimageUpdate; } });
var _LinkedNetwork_1 = require("./schemas/$LinkedNetwork");
Object.defineProperty(exports, "$LinkedNetwork", { enumerable: true, get: function () { return _LinkedNetwork_1.$LinkedNetwork; } });
var _LinkedNetworkBrief_1 = require("./schemas/$LinkedNetworkBrief");
Object.defineProperty(exports, "$LinkedNetworkBrief", { enumerable: true, get: function () { return _LinkedNetworkBrief_1.$LinkedNetworkBrief; } });
var _LinkedNetworkGetResponse_1 = require("./schemas/$LinkedNetworkGetResponse");
Object.defineProperty(exports, "$LinkedNetworkGetResponse", { enumerable: true, get: function () { return _LinkedNetworkGetResponse_1.$LinkedNetworkGetResponse; } });
var _LinkedNetworksGetResponse_1 = require("./schemas/$LinkedNetworksGetResponse");
Object.defineProperty(exports, "$LinkedNetworksGetResponse", { enumerable: true, get: function () { return _LinkedNetworksGetResponse_1.$LinkedNetworksGetResponse; } });
var _LinkedNetworkUpdate_1 = require("./schemas/$LinkedNetworkUpdate");
Object.defineProperty(exports, "$LinkedNetworkUpdate", { enumerable: true, get: function () { return _LinkedNetworkUpdate_1.$LinkedNetworkUpdate; } });
var _LinkedStorage_1 = require("./schemas/$LinkedStorage");
Object.defineProperty(exports, "$LinkedStorage", { enumerable: true, get: function () { return _LinkedStorage_1.$LinkedStorage; } });
var _LinkedStorageBrief_1 = require("./schemas/$LinkedStorageBrief");
Object.defineProperty(exports, "$LinkedStorageBrief", { enumerable: true, get: function () { return _LinkedStorageBrief_1.$LinkedStorageBrief; } });
var _LinkedStorageGetResponse_1 = require("./schemas/$LinkedStorageGetResponse");
Object.defineProperty(exports, "$LinkedStorageGetResponse", { enumerable: true, get: function () { return _LinkedStorageGetResponse_1.$LinkedStorageGetResponse; } });
var _LinkedStoragesGetResponse_1 = require("./schemas/$LinkedStoragesGetResponse");
Object.defineProperty(exports, "$LinkedStoragesGetResponse", { enumerable: true, get: function () { return _LinkedStoragesGetResponse_1.$LinkedStoragesGetResponse; } });
var _LinkedStorageUpdate_1 = require("./schemas/$LinkedStorageUpdate");
Object.defineProperty(exports, "$LinkedStorageUpdate", { enumerable: true, get: function () { return _LinkedStorageUpdate_1.$LinkedStorageUpdate; } });
var _LinkIp_1 = require("./schemas/$LinkIp");
Object.defineProperty(exports, "$LinkIp", { enumerable: true, get: function () { return _LinkIp_1.$LinkIp; } });
var _LinkIsoimage_1 = require("./schemas/$LinkIsoimage");
Object.defineProperty(exports, "$LinkIsoimage", { enumerable: true, get: function () { return _LinkIsoimage_1.$LinkIsoimage; } });
var _LinkNetwork_1 = require("./schemas/$LinkNetwork");
Object.defineProperty(exports, "$LinkNetwork", { enumerable: true, get: function () { return _LinkNetwork_1.$LinkNetwork; } });
var _LinkStorage_1 = require("./schemas/$LinkStorage");
Object.defineProperty(exports, "$LinkStorage", { enumerable: true, get: function () { return _LinkStorage_1.$LinkStorage; } });
var _ListenPorts_1 = require("./schemas/$ListenPorts");
Object.defineProperty(exports, "$ListenPorts", { enumerable: true, get: function () { return _ListenPorts_1.$ListenPorts; } });
var _ListenPortsByIpIndex_1 = require("./schemas/$ListenPortsByIpIndex");
Object.defineProperty(exports, "$ListenPortsByIpIndex", { enumerable: true, get: function () { return _ListenPortsByIpIndex_1.$ListenPortsByIpIndex; } });
var _Loadbalancer_1 = require("./schemas/$Loadbalancer");
Object.defineProperty(exports, "$Loadbalancer", { enumerable: true, get: function () { return _Loadbalancer_1.$Loadbalancer; } });
var _LoadbalancerCreate_1 = require("./schemas/$LoadbalancerCreate");
Object.defineProperty(exports, "$LoadbalancerCreate", { enumerable: true, get: function () { return _LoadbalancerCreate_1.$LoadbalancerCreate; } });
var _LoadbalancerCreateBackendServers_1 = require("./schemas/$LoadbalancerCreateBackendServers");
Object.defineProperty(exports, "$LoadbalancerCreateBackendServers", { enumerable: true, get: function () { return _LoadbalancerCreateBackendServers_1.$LoadbalancerCreateBackendServers; } });
var _LoadbalancerCreateForwardingRules_1 = require("./schemas/$LoadbalancerCreateForwardingRules");
Object.defineProperty(exports, "$LoadbalancerCreateForwardingRules", { enumerable: true, get: function () { return _LoadbalancerCreateForwardingRules_1.$LoadbalancerCreateForwardingRules; } });
var _LoadbalancerGetResponse_1 = require("./schemas/$LoadbalancerGetResponse");
Object.defineProperty(exports, "$LoadbalancerGetResponse", { enumerable: true, get: function () { return _LoadbalancerGetResponse_1.$LoadbalancerGetResponse; } });
var _LoadbalancerIndex_1 = require("./schemas/$LoadbalancerIndex");
Object.defineProperty(exports, "$LoadbalancerIndex", { enumerable: true, get: function () { return _LoadbalancerIndex_1.$LoadbalancerIndex; } });
var _LoadbalancerinIp_1 = require("./schemas/$LoadbalancerinIp");
Object.defineProperty(exports, "$LoadbalancerinIp", { enumerable: true, get: function () { return _LoadbalancerinIp_1.$LoadbalancerinIp; } });
var _LoadbalancersGetResponse_1 = require("./schemas/$LoadbalancersGetResponse");
Object.defineProperty(exports, "$LoadbalancersGetResponse", { enumerable: true, get: function () { return _LoadbalancersGetResponse_1.$LoadbalancersGetResponse; } });
var _LoadbalancersUsage_1 = require("./schemas/$LoadbalancersUsage");
Object.defineProperty(exports, "$LoadbalancersUsage", { enumerable: true, get: function () { return _LoadbalancersUsage_1.$LoadbalancersUsage; } });
var _LoadbalancersUsages_1 = require("./schemas/$LoadbalancersUsages");
Object.defineProperty(exports, "$LoadbalancersUsages", { enumerable: true, get: function () { return _LoadbalancersUsages_1.$LoadbalancersUsages; } });
var _LoadbalancerUpdate_1 = require("./schemas/$LoadbalancerUpdate");
Object.defineProperty(exports, "$LoadbalancerUpdate", { enumerable: true, get: function () { return _LoadbalancerUpdate_1.$LoadbalancerUpdate; } });
var _Location_1 = require("./schemas/$Location");
Object.defineProperty(exports, "$Location", { enumerable: true, get: function () { return _Location_1.$Location; } });
var _LocationChangeRequested_1 = require("./schemas/$LocationChangeRequested");
Object.defineProperty(exports, "$LocationChangeRequested", { enumerable: true, get: function () { return _LocationChangeRequested_1.$LocationChangeRequested; } });
var _LocationCreate_1 = require("./schemas/$LocationCreate");
Object.defineProperty(exports, "$LocationCreate", { enumerable: true, get: function () { return _LocationCreate_1.$LocationCreate; } });
var _LocationFeatures_1 = require("./schemas/$LocationFeatures");
Object.defineProperty(exports, "$LocationFeatures", { enumerable: true, get: function () { return _LocationFeatures_1.$LocationFeatures; } });
var _LocationGetResponse_1 = require("./schemas/$LocationGetResponse");
Object.defineProperty(exports, "$LocationGetResponse", { enumerable: true, get: function () { return _LocationGetResponse_1.$LocationGetResponse; } });
var _LocationIndex_1 = require("./schemas/$LocationIndex");
Object.defineProperty(exports, "$LocationIndex", { enumerable: true, get: function () { return _LocationIndex_1.$LocationIndex; } });
var _LocationInformation_1 = require("./schemas/$LocationInformation");
Object.defineProperty(exports, "$LocationInformation", { enumerable: true, get: function () { return _LocationInformation_1.$LocationInformation; } });
var _LocationRelations_1 = require("./schemas/$LocationRelations");
Object.defineProperty(exports, "$LocationRelations", { enumerable: true, get: function () { return _LocationRelations_1.$LocationRelations; } });
var _LocationRelationsGpuFlavor_1 = require("./schemas/$LocationRelationsGpuFlavor");
Object.defineProperty(exports, "$LocationRelationsGpuFlavor", { enumerable: true, get: function () { return _LocationRelationsGpuFlavor_1.$LocationRelationsGpuFlavor; } });
var _LocationsGetResponse_1 = require("./schemas/$LocationsGetResponse");
Object.defineProperty(exports, "$LocationsGetResponse", { enumerable: true, get: function () { return _LocationsGetResponse_1.$LocationsGetResponse; } });
var _LocationUpdate_1 = require("./schemas/$LocationUpdate");
Object.defineProperty(exports, "$LocationUpdate", { enumerable: true, get: function () { return _LocationUpdate_1.$LocationUpdate; } });
var _LocationWithRelations_1 = require("./schemas/$LocationWithRelations");
Object.defineProperty(exports, "$LocationWithRelations", { enumerable: true, get: function () { return _LocationWithRelations_1.$LocationWithRelations; } });
var _MarketplaceApplication_1 = require("./schemas/$MarketplaceApplication");
Object.defineProperty(exports, "$MarketplaceApplication", { enumerable: true, get: function () { return _MarketplaceApplication_1.$MarketplaceApplication; } });
var _MarketplaceApplicationCreate_1 = require("./schemas/$MarketplaceApplicationCreate");
Object.defineProperty(exports, "$MarketplaceApplicationCreate", { enumerable: true, get: function () { return _MarketplaceApplicationCreate_1.$MarketplaceApplicationCreate; } });
var _MarketplaceApplicationCreateResponse_1 = require("./schemas/$MarketplaceApplicationCreateResponse");
Object.defineProperty(exports, "$MarketplaceApplicationCreateResponse", { enumerable: true, get: function () { return _MarketplaceApplicationCreateResponse_1.$MarketplaceApplicationCreateResponse; } });
var _MarketplaceApplicationGetResponse_1 = require("./schemas/$MarketplaceApplicationGetResponse");
Object.defineProperty(exports, "$MarketplaceApplicationGetResponse", { enumerable: true, get: function () { return _MarketplaceApplicationGetResponse_1.$MarketplaceApplicationGetResponse; } });
var _MarketplaceApplicationImport_1 = require("./schemas/$MarketplaceApplicationImport");
Object.defineProperty(exports, "$MarketplaceApplicationImport", { enumerable: true, get: function () { return _MarketplaceApplicationImport_1.$MarketplaceApplicationImport; } });
var _MarketplaceApplicationIndex_1 = require("./schemas/$MarketplaceApplicationIndex");
Object.defineProperty(exports, "$MarketplaceApplicationIndex", { enumerable: true, get: function () { return _MarketplaceApplicationIndex_1.$MarketplaceApplicationIndex; } });
var _MarketplaceApplicationMetadata_1 = require("./schemas/$MarketplaceApplicationMetadata");
Object.defineProperty(exports, "$MarketplaceApplicationMetadata", { enumerable: true, get: function () { return _MarketplaceApplicationMetadata_1.$MarketplaceApplicationMetadata; } });
var _MarketplaceApplicationSetup_1 = require("./schemas/$MarketplaceApplicationSetup");
Object.defineProperty(exports, "$MarketplaceApplicationSetup", { enumerable: true, get: function () { return _MarketplaceApplicationSetup_1.$MarketplaceApplicationSetup; } });
var _MarketplaceApplicationsGetResponse_1 = require("./schemas/$MarketplaceApplicationsGetResponse");
Object.defineProperty(exports, "$MarketplaceApplicationsGetResponse", { enumerable: true, get: function () { return _MarketplaceApplicationsGetResponse_1.$MarketplaceApplicationsGetResponse; } });
var _MarketplaceApplicationUpdate_1 = require("./schemas/$MarketplaceApplicationUpdate");
Object.defineProperty(exports, "$MarketplaceApplicationUpdate", { enumerable: true, get: function () { return _MarketplaceApplicationUpdate_1.$MarketplaceApplicationUpdate; } });
var _Metrics_1 = require("./schemas/$Metrics");
Object.defineProperty(exports, "$Metrics", { enumerable: true, get: function () { return _Metrics_1.$Metrics; } });
var _MetricsValue_1 = require("./schemas/$MetricsValue");
Object.defineProperty(exports, "$MetricsValue", { enumerable: true, get: function () { return _MetricsValue_1.$MetricsValue; } });
var _Network_1 = require("./schemas/$Network");
Object.defineProperty(exports, "$Network", { enumerable: true, get: function () { return _Network_1.$Network; } });
var _NetworkCreate_1 = require("./schemas/$NetworkCreate");
Object.defineProperty(exports, "$NetworkCreate", { enumerable: true, get: function () { return _NetworkCreate_1.$NetworkCreate; } });
var _NetworkGetResponse_1 = require("./schemas/$NetworkGetResponse");
Object.defineProperty(exports, "$NetworkGetResponse", { enumerable: true, get: function () { return _NetworkGetResponse_1.$NetworkGetResponse; } });
var _NetworkIndex_1 = require("./schemas/$NetworkIndex");
Object.defineProperty(exports, "$NetworkIndex", { enumerable: true, get: function () { return _NetworkIndex_1.$NetworkIndex; } });
var _NetworkinFirewall_1 = require("./schemas/$NetworkinFirewall");
Object.defineProperty(exports, "$NetworkinFirewall", { enumerable: true, get: function () { return _NetworkinFirewall_1.$NetworkinFirewall; } });
var _NetworkinServer_1 = require("./schemas/$NetworkinServer");
Object.defineProperty(exports, "$NetworkinServer", { enumerable: true, get: function () { return _NetworkinServer_1.$NetworkinServer; } });
var _NetworkPinnedServersResponse_1 = require("./schemas/$NetworkPinnedServersResponse");
Object.defineProperty(exports, "$NetworkPinnedServersResponse", { enumerable: true, get: function () { return _NetworkPinnedServersResponse_1.$NetworkPinnedServersResponse; } });
var _NetworkRelation_1 = require("./schemas/$NetworkRelation");
Object.defineProperty(exports, "$NetworkRelation", { enumerable: true, get: function () { return _NetworkRelation_1.$NetworkRelation; } });
var _NetworksGetResponse_1 = require("./schemas/$NetworksGetResponse");
Object.defineProperty(exports, "$NetworksGetResponse", { enumerable: true, get: function () { return _NetworksGetResponse_1.$NetworksGetResponse; } });
var _NetworkUpdate_1 = require("./schemas/$NetworkUpdate");
Object.defineProperty(exports, "$NetworkUpdate", { enumerable: true, get: function () { return _NetworkUpdate_1.$NetworkUpdate; } });
var _ObjectUsageOverview_1 = require("./schemas/$ObjectUsageOverview");
Object.defineProperty(exports, "$ObjectUsageOverview", { enumerable: true, get: function () { return _ObjectUsageOverview_1.$ObjectUsageOverview; } });
var _PaasSecurityZone_1 = require("./schemas/$PaasSecurityZone");
Object.defineProperty(exports, "$PaasSecurityZone", { enumerable: true, get: function () { return _PaasSecurityZone_1.$PaasSecurityZone; } });
var _PaasSecurityZoneCreate_1 = require("./schemas/$PaasSecurityZoneCreate");
Object.defineProperty(exports, "$PaasSecurityZoneCreate", { enumerable: true, get: function () { return _PaasSecurityZoneCreate_1.$PaasSecurityZoneCreate; } });
var _PaasSecurityZoneCreateResponse_1 = require("./schemas/$PaasSecurityZoneCreateResponse");
Object.defineProperty(exports, "$PaasSecurityZoneCreateResponse", { enumerable: true, get: function () { return _PaasSecurityZoneCreateResponse_1.$PaasSecurityZoneCreateResponse; } });
var _PaasSecurityZoneGetResponse_1 = require("./schemas/$PaasSecurityZoneGetResponse");
Object.defineProperty(exports, "$PaasSecurityZoneGetResponse", { enumerable: true, get: function () { return _PaasSecurityZoneGetResponse_1.$PaasSecurityZoneGetResponse; } });
var _PaasSecurityZoneIndex_1 = require("./schemas/$PaasSecurityZoneIndex");
Object.defineProperty(exports, "$PaasSecurityZoneIndex", { enumerable: true, get: function () { return _PaasSecurityZoneIndex_1.$PaasSecurityZoneIndex; } });
var _PaasSecurityZoneRelation_1 = require("./schemas/$PaasSecurityZoneRelation");
Object.defineProperty(exports, "$PaasSecurityZoneRelation", { enumerable: true, get: function () { return _PaasSecurityZoneRelation_1.$PaasSecurityZoneRelation; } });
var _PaasSecurityZones_1 = require("./schemas/$PaasSecurityZones");
Object.defineProperty(exports, "$PaasSecurityZones", { enumerable: true, get: function () { return _PaasSecurityZones_1.$PaasSecurityZones; } });
var _PaasSecurityZonesGetResponse_1 = require("./schemas/$PaasSecurityZonesGetResponse");
Object.defineProperty(exports, "$PaasSecurityZonesGetResponse", { enumerable: true, get: function () { return _PaasSecurityZonesGetResponse_1.$PaasSecurityZonesGetResponse; } });
var _PaasSecurityZonesinNetwork_1 = require("./schemas/$PaasSecurityZonesinNetwork");
Object.defineProperty(exports, "$PaasSecurityZonesinNetwork", { enumerable: true, get: function () { return _PaasSecurityZonesinNetwork_1.$PaasSecurityZonesinNetwork; } });
var _PaasSecurityZonesRelation_1 = require("./schemas/$PaasSecurityZonesRelation");
Object.defineProperty(exports, "$PaasSecurityZonesRelation", { enumerable: true, get: function () { return _PaasSecurityZonesRelation_1.$PaasSecurityZonesRelation; } });
var _PaasSecurityZoneUpdate_1 = require("./schemas/$PaasSecurityZoneUpdate");
Object.defineProperty(exports, "$PaasSecurityZoneUpdate", { enumerable: true, get: function () { return _PaasSecurityZoneUpdate_1.$PaasSecurityZoneUpdate; } });
var _PaasService_1 = require("./schemas/$PaasService");
Object.defineProperty(exports, "$PaasService", { enumerable: true, get: function () { return _PaasService_1.$PaasService; } });
var _PaasServiceCreate_1 = require("./schemas/$PaasServiceCreate");
Object.defineProperty(exports, "$PaasServiceCreate", { enumerable: true, get: function () { return _PaasServiceCreate_1.$PaasServiceCreate; } });
var _PaasServiceCreateResponse_1 = require("./schemas/$PaasServiceCreateResponse");
Object.defineProperty(exports, "$PaasServiceCreateResponse", { enumerable: true, get: function () { return _PaasServiceCreateResponse_1.$PaasServiceCreateResponse; } });
var _PaasServiceCredentials_1 = require("./schemas/$PaasServiceCredentials");
Object.defineProperty(exports, "$PaasServiceCredentials", { enumerable: true, get: function () { return _PaasServiceCredentials_1.$PaasServiceCredentials; } });
var _PaasServiceGetResponse_1 = require("./schemas/$PaasServiceGetResponse");
Object.defineProperty(exports, "$PaasServiceGetResponse", { enumerable: true, get: function () { return _PaasServiceGetResponse_1.$PaasServiceGetResponse; } });
var _PaasServiceIndex_1 = require("./schemas/$PaasServiceIndex");
Object.defineProperty(exports, "$PaasServiceIndex", { enumerable: true, get: function () { return _PaasServiceIndex_1.$PaasServiceIndex; } });
var _PaasServiceMetrics_1 = require("./schemas/$PaasServiceMetrics");
Object.defineProperty(exports, "$PaasServiceMetrics", { enumerable: true, get: function () { return _PaasServiceMetrics_1.$PaasServiceMetrics; } });
var _PaasServiceMetricsGetResponse_1 = require("./schemas/$PaasServiceMetricsGetResponse");
Object.defineProperty(exports, "$PaasServiceMetricsGetResponse", { enumerable: true, get: function () { return _PaasServiceMetricsGetResponse_1.$PaasServiceMetricsGetResponse; } });
var _PaasServiceMetricsList_1 = require("./schemas/$PaasServiceMetricsList");
Object.defineProperty(exports, "$PaasServiceMetricsList", { enumerable: true, get: function () { return _PaasServiceMetricsList_1.$PaasServiceMetricsList; } });
var _PaasServiceParameters_1 = require("./schemas/$PaasServiceParameters");
Object.defineProperty(exports, "$PaasServiceParameters", { enumerable: true, get: function () { return _PaasServiceParameters_1.$PaasServiceParameters; } });
var _PaasServiceParametersSchema_1 = require("./schemas/$PaasServiceParametersSchema");
Object.defineProperty(exports, "$PaasServiceParametersSchema", { enumerable: true, get: function () { return _PaasServiceParametersSchema_1.$PaasServiceParametersSchema; } });
var _PaasServiceResourceLimit_1 = require("./schemas/$PaasServiceResourceLimit");
Object.defineProperty(exports, "$PaasServiceResourceLimit", { enumerable: true, get: function () { return _PaasServiceResourceLimit_1.$PaasServiceResourceLimit; } });
var _PaasServiceResourceLimits_1 = require("./schemas/$PaasServiceResourceLimits");
Object.defineProperty(exports, "$PaasServiceResourceLimits", { enumerable: true, get: function () { return _PaasServiceResourceLimits_1.$PaasServiceResourceLimits; } });
var _PaasServicesGetResponse_1 = require("./schemas/$PaasServicesGetResponse");
Object.defineProperty(exports, "$PaasServicesGetResponse", { enumerable: true, get: function () { return _PaasServicesGetResponse_1.$PaasServicesGetResponse; } });
var _PaasServicesinNetwork_1 = require("./schemas/$PaasServicesinNetwork");
Object.defineProperty(exports, "$PaasServicesinNetwork", { enumerable: true, get: function () { return _PaasServicesinNetwork_1.$PaasServicesinNetwork; } });
var _PaasServicesUsage_1 = require("./schemas/$PaasServicesUsage");
Object.defineProperty(exports, "$PaasServicesUsage", { enumerable: true, get: function () { return _PaasServicesUsage_1.$PaasServicesUsage; } });
var _PaasServicesUsages_1 = require("./schemas/$PaasServicesUsages");
Object.defineProperty(exports, "$PaasServicesUsages", { enumerable: true, get: function () { return _PaasServicesUsages_1.$PaasServicesUsages; } });
var _PaasServiceTemplate_1 = require("./schemas/$PaasServiceTemplate");
Object.defineProperty(exports, "$PaasServiceTemplate", { enumerable: true, get: function () { return _PaasServiceTemplate_1.$PaasServiceTemplate; } });
var _PaasServiceTemplateIndex_1 = require("./schemas/$PaasServiceTemplateIndex");
Object.defineProperty(exports, "$PaasServiceTemplateIndex", { enumerable: true, get: function () { return _PaasServiceTemplateIndex_1.$PaasServiceTemplateIndex; } });
var _PaasServiceTemplatesGetResponse_1 = require("./schemas/$PaasServiceTemplatesGetResponse");
Object.defineProperty(exports, "$PaasServiceTemplatesGetResponse", { enumerable: true, get: function () { return _PaasServiceTemplatesGetResponse_1.$PaasServiceTemplatesGetResponse; } });
var _PaasServiceUpdate_1 = require("./schemas/$PaasServiceUpdate");
Object.defineProperty(exports, "$PaasServiceUpdate", { enumerable: true, get: function () { return _PaasServiceUpdate_1.$PaasServiceUpdate; } });
var _PinnedServer_1 = require("./schemas/$PinnedServer");
Object.defineProperty(exports, "$PinnedServer", { enumerable: true, get: function () { return _PinnedServer_1.$PinnedServer; } });
var _PinnedServerPayload_1 = require("./schemas/$PinnedServerPayload");
Object.defineProperty(exports, "$PinnedServerPayload", { enumerable: true, get: function () { return _PinnedServerPayload_1.$PinnedServerPayload; } });
var _ProductUsage_1 = require("./schemas/$ProductUsage");
Object.defineProperty(exports, "$ProductUsage", { enumerable: true, get: function () { return _ProductUsage_1.$ProductUsage; } });
var _PublicIpinServer_1 = require("./schemas/$PublicIpinServer");
Object.defineProperty(exports, "$PublicIpinServer", { enumerable: true, get: function () { return _PublicIpinServer_1.$PublicIpinServer; } });
var _Request_1 = require("./schemas/$Request");
Object.defineProperty(exports, "$Request", { enumerable: true, get: function () { return _Request_1.$Request; } });
var _RequestGetResponse_1 = require("./schemas/$RequestGetResponse");
Object.defineProperty(exports, "$RequestGetResponse", { enumerable: true, get: function () { return _RequestGetResponse_1.$RequestGetResponse; } });
var _RocketStoragesUsages_1 = require("./schemas/$RocketStoragesUsages");
Object.defineProperty(exports, "$RocketStoragesUsages", { enumerable: true, get: function () { return _RocketStoragesUsages_1.$RocketStoragesUsages; } });
var _RulesProperties_1 = require("./schemas/$RulesProperties");
Object.defineProperty(exports, "$RulesProperties", { enumerable: true, get: function () { return _RulesProperties_1.$RulesProperties; } });
var _Server_1 = require("./schemas/$Server");
Object.defineProperty(exports, "$Server", { enumerable: true, get: function () { return _Server_1.$Server; } });
var _ServerCreate_1 = require("./schemas/$ServerCreate");
Object.defineProperty(exports, "$ServerCreate", { enumerable: true, get: function () { return _ServerCreate_1.$ServerCreate; } });
var _ServerCreateResponse_1 = require("./schemas/$ServerCreateResponse");
Object.defineProperty(exports, "$ServerCreateResponse", { enumerable: true, get: function () { return _ServerCreateResponse_1.$ServerCreateResponse; } });
var _ServerGetResponse_1 = require("./schemas/$ServerGetResponse");
Object.defineProperty(exports, "$ServerGetResponse", { enumerable: true, get: function () { return _ServerGetResponse_1.$ServerGetResponse; } });
var _ServerIndex_1 = require("./schemas/$ServerIndex");
Object.defineProperty(exports, "$ServerIndex", { enumerable: true, get: function () { return _ServerIndex_1.$ServerIndex; } });
var _ServerinIp_1 = require("./schemas/$ServerinIp");
Object.defineProperty(exports, "$ServerinIp", { enumerable: true, get: function () { return _ServerinIp_1.$ServerinIp; } });
var _ServerinIsoimage_1 = require("./schemas/$ServerinIsoimage");
Object.defineProperty(exports, "$ServerinIsoimage", { enumerable: true, get: function () { return _ServerinIsoimage_1.$ServerinIsoimage; } });
var _ServerinNetwork_1 = require("./schemas/$ServerinNetwork");
Object.defineProperty(exports, "$ServerinNetwork", { enumerable: true, get: function () { return _ServerinNetwork_1.$ServerinNetwork; } });
var _ServerinStrorage_1 = require("./schemas/$ServerinStrorage");
Object.defineProperty(exports, "$ServerinStrorage", { enumerable: true, get: function () { return _ServerinStrorage_1.$ServerinStrorage; } });
var _ServerMetrics_1 = require("./schemas/$ServerMetrics");
Object.defineProperty(exports, "$ServerMetrics", { enumerable: true, get: function () { return _ServerMetrics_1.$ServerMetrics; } });
var _ServerMetricsGetResponse_1 = require("./schemas/$ServerMetricsGetResponse");
Object.defineProperty(exports, "$ServerMetricsGetResponse", { enumerable: true, get: function () { return _ServerMetricsGetResponse_1.$ServerMetricsGetResponse; } });
var _ServerMetricsList_1 = require("./schemas/$ServerMetricsList");
Object.defineProperty(exports, "$ServerMetricsList", { enumerable: true, get: function () { return _ServerMetricsList_1.$ServerMetricsList; } });
var _ServerPowerStatus_1 = require("./schemas/$ServerPowerStatus");
Object.defineProperty(exports, "$ServerPowerStatus", { enumerable: true, get: function () { return _ServerPowerStatus_1.$ServerPowerStatus; } });
var _ServerPowerUpdate_1 = require("./schemas/$ServerPowerUpdate");
Object.defineProperty(exports, "$ServerPowerUpdate", { enumerable: true, get: function () { return _ServerPowerUpdate_1.$ServerPowerUpdate; } });
var _ServerRelation_1 = require("./schemas/$ServerRelation");
Object.defineProperty(exports, "$ServerRelation", { enumerable: true, get: function () { return _ServerRelation_1.$ServerRelation; } });
var _ServersGetResponse_1 = require("./schemas/$ServersGetResponse");
Object.defineProperty(exports, "$ServersGetResponse", { enumerable: true, get: function () { return _ServersGetResponse_1.$ServersGetResponse; } });
var _ServersUsage_1 = require("./schemas/$ServersUsage");
Object.defineProperty(exports, "$ServersUsage", { enumerable: true, get: function () { return _ServersUsage_1.$ServersUsage; } });
var _ServersUsages_1 = require("./schemas/$ServersUsages");
Object.defineProperty(exports, "$ServersUsages", { enumerable: true, get: function () { return _ServersUsages_1.$ServersUsages; } });
var _ServerUpdate_1 = require("./schemas/$ServerUpdate");
Object.defineProperty(exports, "$ServerUpdate", { enumerable: true, get: function () { return _ServerUpdate_1.$ServerUpdate; } });
var _ServiceinPaasSecurityZone_1 = require("./schemas/$ServiceinPaasSecurityZone");
Object.defineProperty(exports, "$ServiceinPaasSecurityZone", { enumerable: true, get: function () { return _ServiceinPaasSecurityZone_1.$ServiceinPaasSecurityZone; } });
var _ServiceinPaasSecurityZones_1 = require("./schemas/$ServiceinPaasSecurityZones");
Object.defineProperty(exports, "$ServiceinPaasSecurityZones", { enumerable: true, get: function () { return _ServiceinPaasSecurityZones_1.$ServiceinPaasSecurityZones; } });
var _Snapshot_1 = require("./schemas/$Snapshot");
Object.defineProperty(exports, "$Snapshot", { enumerable: true, get: function () { return _Snapshot_1.$Snapshot; } });
var _SnapshotCreate_1 = require("./schemas/$SnapshotCreate");
Object.defineProperty(exports, "$SnapshotCreate", { enumerable: true, get: function () { return _SnapshotCreate_1.$SnapshotCreate; } });
var _SnapshotExportToS3Payload_1 = require("./schemas/$SnapshotExportToS3Payload");
Object.defineProperty(exports, "$SnapshotExportToS3Payload", { enumerable: true, get: function () { return _SnapshotExportToS3Payload_1.$SnapshotExportToS3Payload; } });
var _SnapshotGetResponse_1 = require("./schemas/$SnapshotGetResponse");
Object.defineProperty(exports, "$SnapshotGetResponse", { enumerable: true, get: function () { return _SnapshotGetResponse_1.$SnapshotGetResponse; } });
var _SnapshotIndex_1 = require("./schemas/$SnapshotIndex");
Object.defineProperty(exports, "$SnapshotIndex", { enumerable: true, get: function () { return _SnapshotIndex_1.$SnapshotIndex; } });
var _SnapshotSchedule_1 = require("./schemas/$SnapshotSchedule");
Object.defineProperty(exports, "$SnapshotSchedule", { enumerable: true, get: function () { return _SnapshotSchedule_1.$SnapshotSchedule; } });
var _SnapshotScheduleCreate_1 = require("./schemas/$SnapshotScheduleCreate");
Object.defineProperty(exports, "$SnapshotScheduleCreate", { enumerable: true, get: function () { return _SnapshotScheduleCreate_1.$SnapshotScheduleCreate; } });
var _SnapshotScheduleGetResponse_1 = require("./schemas/$SnapshotScheduleGetResponse");
Object.defineProperty(exports, "$SnapshotScheduleGetResponse", { enumerable: true, get: function () { return _SnapshotScheduleGetResponse_1.$SnapshotScheduleGetResponse; } });
var _SnapshotScheduleIndex_1 = require("./schemas/$SnapshotScheduleIndex");
Object.defineProperty(exports, "$SnapshotScheduleIndex", { enumerable: true, get: function () { return _SnapshotScheduleIndex_1.$SnapshotScheduleIndex; } });
var _SnapshotSchedulesGetResponse_1 = require("./schemas/$SnapshotSchedulesGetResponse");
Object.defineProperty(exports, "$SnapshotSchedulesGetResponse", { enumerable: true, get: function () { return _SnapshotSchedulesGetResponse_1.$SnapshotSchedulesGetResponse; } });
var _SnapshotSchedulesinStorage_1 = require("./schemas/$SnapshotSchedulesinStorage");
Object.defineProperty(exports, "$SnapshotSchedulesinStorage", { enumerable: true, get: function () { return _SnapshotSchedulesinStorage_1.$SnapshotSchedulesinStorage; } });
var _SnapshotScheduleUpdate_1 = require("./schemas/$SnapshotScheduleUpdate");
Object.defineProperty(exports, "$SnapshotScheduleUpdate", { enumerable: true, get: function () { return _SnapshotScheduleUpdate_1.$SnapshotScheduleUpdate; } });
var _SnapshotsGetResponse_1 = require("./schemas/$SnapshotsGetResponse");
Object.defineProperty(exports, "$SnapshotsGetResponse", { enumerable: true, get: function () { return _SnapshotsGetResponse_1.$SnapshotsGetResponse; } });
var _SnapshotsUsage_1 = require("./schemas/$SnapshotsUsage");
Object.defineProperty(exports, "$SnapshotsUsage", { enumerable: true, get: function () { return _SnapshotsUsage_1.$SnapshotsUsage; } });
var _SnapshotsUsages_1 = require("./schemas/$SnapshotsUsages");
Object.defineProperty(exports, "$SnapshotsUsages", { enumerable: true, get: function () { return _SnapshotsUsages_1.$SnapshotsUsages; } });
var _SnapshotUpdate_1 = require("./schemas/$SnapshotUpdate");
Object.defineProperty(exports, "$SnapshotUpdate", { enumerable: true, get: function () { return _SnapshotUpdate_1.$SnapshotUpdate; } });
var _Sshkey_1 = require("./schemas/$Sshkey");
Object.defineProperty(exports, "$Sshkey", { enumerable: true, get: function () { return _Sshkey_1.$Sshkey; } });
var _SshkeyCreate_1 = require("./schemas/$SshkeyCreate");
Object.defineProperty(exports, "$SshkeyCreate", { enumerable: true, get: function () { return _SshkeyCreate_1.$SshkeyCreate; } });
var _SshkeyGetResponse_1 = require("./schemas/$SshkeyGetResponse");
Object.defineProperty(exports, "$SshkeyGetResponse", { enumerable: true, get: function () { return _SshkeyGetResponse_1.$SshkeyGetResponse; } });
var _SshkeyIndex_1 = require("./schemas/$SshkeyIndex");
Object.defineProperty(exports, "$SshkeyIndex", { enumerable: true, get: function () { return _SshkeyIndex_1.$SshkeyIndex; } });
var _SshkeysGetResponse_1 = require("./schemas/$SshkeysGetResponse");
Object.defineProperty(exports, "$SshkeysGetResponse", { enumerable: true, get: function () { return _SshkeysGetResponse_1.$SshkeysGetResponse; } });
var _SshkeyUpdate_1 = require("./schemas/$SshkeyUpdate");
Object.defineProperty(exports, "$SshkeyUpdate", { enumerable: true, get: function () { return _SshkeyUpdate_1.$SshkeyUpdate; } });
var _Storage_1 = require("./schemas/$Storage");
Object.defineProperty(exports, "$Storage", { enumerable: true, get: function () { return _Storage_1.$Storage; } });
var _StorageBackup_1 = require("./schemas/$StorageBackup");
Object.defineProperty(exports, "$StorageBackup", { enumerable: true, get: function () { return _StorageBackup_1.$StorageBackup; } });
var _StorageBackupIndex_1 = require("./schemas/$StorageBackupIndex");
Object.defineProperty(exports, "$StorageBackupIndex", { enumerable: true, get: function () { return _StorageBackupIndex_1.$StorageBackupIndex; } });
var _StorageBackupSchedule_1 = require("./schemas/$StorageBackupSchedule");
Object.defineProperty(exports, "$StorageBackupSchedule", { enumerable: true, get: function () { return _StorageBackupSchedule_1.$StorageBackupSchedule; } });
var _StorageBackupScheduleCreate_1 = require("./schemas/$StorageBackupScheduleCreate");
Object.defineProperty(exports, "$StorageBackupScheduleCreate", { enumerable: true, get: function () { return _StorageBackupScheduleCreate_1.$StorageBackupScheduleCreate; } });
var _StorageBackupScheduleGetResponse_1 = require("./schemas/$StorageBackupScheduleGetResponse");
Object.defineProperty(exports, "$StorageBackupScheduleGetResponse", { enumerable: true, get: function () { return _StorageBackupScheduleGetResponse_1.$StorageBackupScheduleGetResponse; } });
var _StorageBackupScheduleIndex_1 = require("./schemas/$StorageBackupScheduleIndex");
Object.defineProperty(exports, "$StorageBackupScheduleIndex", { enumerable: true, get: function () { return _StorageBackupScheduleIndex_1.$StorageBackupScheduleIndex; } });
var _StorageBackupSchedulesGetResponse_1 = require("./schemas/$StorageBackupSchedulesGetResponse");
Object.defineProperty(exports, "$StorageBackupSchedulesGetResponse", { enumerable: true, get: function () { return _StorageBackupSchedulesGetResponse_1.$StorageBackupSchedulesGetResponse; } });
var _StorageBackupScheduleUpdate_1 = require("./schemas/$StorageBackupScheduleUpdate");
Object.defineProperty(exports, "$StorageBackupScheduleUpdate", { enumerable: true, get: function () { return _StorageBackupScheduleUpdate_1.$StorageBackupScheduleUpdate; } });
var _StorageBackupsGetResponse_1 = require("./schemas/$StorageBackupsGetResponse");
Object.defineProperty(exports, "$StorageBackupsGetResponse", { enumerable: true, get: function () { return _StorageBackupsGetResponse_1.$StorageBackupsGetResponse; } });
var _StorageBackupsUsage_1 = require("./schemas/$StorageBackupsUsage");
Object.defineProperty(exports, "$StorageBackupsUsage", { enumerable: true, get: function () { return _StorageBackupsUsage_1.$StorageBackupsUsage; } });
var _StorageBackupUsages_1 = require("./schemas/$StorageBackupUsages");
Object.defineProperty(exports, "$StorageBackupUsages", { enumerable: true, get: function () { return _StorageBackupUsages_1.$StorageBackupUsages; } });
var _StorageClone_1 = require("./schemas/$StorageClone");
Object.defineProperty(exports, "$StorageClone", { enumerable: true, get: function () { return _StorageClone_1.$StorageClone; } });
var _StorageCreate_1 = require("./schemas/$StorageCreate");
Object.defineProperty(exports, "$StorageCreate", { enumerable: true, get: function () { return _StorageCreate_1.$StorageCreate; } });
var _StorageCreateTemplatePassword_1 = require("./schemas/$StorageCreateTemplatePassword");
Object.defineProperty(exports, "$StorageCreateTemplatePassword", { enumerable: true, get: function () { return _StorageCreateTemplatePassword_1.$StorageCreateTemplatePassword; } });
var _StorageCreateTemplateSshkey_1 = require("./schemas/$StorageCreateTemplateSshkey");
Object.defineProperty(exports, "$StorageCreateTemplateSshkey", { enumerable: true, get: function () { return _StorageCreateTemplateSshkey_1.$StorageCreateTemplateSshkey; } });
var _StorageGetResponse_1 = require("./schemas/$StorageGetResponse");
Object.defineProperty(exports, "$StorageGetResponse", { enumerable: true, get: function () { return _StorageGetResponse_1.$StorageGetResponse; } });
var _StorageImportFromBackup_1 = require("./schemas/$StorageImportFromBackup");
Object.defineProperty(exports, "$StorageImportFromBackup", { enumerable: true, get: function () { return _StorageImportFromBackup_1.$StorageImportFromBackup; } });
var _StorageImportFromS3Object_1 = require("./schemas/$StorageImportFromS3Object");
Object.defineProperty(exports, "$StorageImportFromS3Object", { enumerable: true, get: function () { return _StorageImportFromS3Object_1.$StorageImportFromS3Object; } });
var _StorageIndex_1 = require("./schemas/$StorageIndex");
Object.defineProperty(exports, "$StorageIndex", { enumerable: true, get: function () { return _StorageIndex_1.$StorageIndex; } });
var _StorageRollback_1 = require("./schemas/$StorageRollback");
Object.defineProperty(exports, "$StorageRollback", { enumerable: true, get: function () { return _StorageRollback_1.$StorageRollback; } });
var _StoragesGetResponse_1 = require("./schemas/$StoragesGetResponse");
Object.defineProperty(exports, "$StoragesGetResponse", { enumerable: true, get: function () { return _StoragesGetResponse_1.$StoragesGetResponse; } });
var _StoragesinServer_1 = require("./schemas/$StoragesinServer");
Object.defineProperty(exports, "$StoragesinServer", { enumerable: true, get: function () { return _StoragesinServer_1.$StoragesinServer; } });
var _StoragesRelation_1 = require("./schemas/$StoragesRelation");
Object.defineProperty(exports, "$StoragesRelation", { enumerable: true, get: function () { return _StoragesRelation_1.$StoragesRelation; } });
var _StoragesUsage_1 = require("./schemas/$StoragesUsage");
Object.defineProperty(exports, "$StoragesUsage", { enumerable: true, get: function () { return _StoragesUsage_1.$StoragesUsage; } });
var _StorageTemplateCreate_1 = require("./schemas/$StorageTemplateCreate");
Object.defineProperty(exports, "$StorageTemplateCreate", { enumerable: true, get: function () { return _StorageTemplateCreate_1.$StorageTemplateCreate; } });
var _StorageTemplatesGetResponse_1 = require("./schemas/$StorageTemplatesGetResponse");
Object.defineProperty(exports, "$StorageTemplatesGetResponse", { enumerable: true, get: function () { return _StorageTemplatesGetResponse_1.$StorageTemplatesGetResponse; } });
var _StorageType_1 = require("./schemas/$StorageType");
Object.defineProperty(exports, "$StorageType", { enumerable: true, get: function () { return _StorageType_1.$StorageType; } });
var _StorageUpdate_1 = require("./schemas/$StorageUpdate");
Object.defineProperty(exports, "$StorageUpdate", { enumerable: true, get: function () { return _StorageUpdate_1.$StorageUpdate; } });
var _StorageVariant_1 = require("./schemas/$StorageVariant");
Object.defineProperty(exports, "$StorageVariant", { enumerable: true, get: function () { return _StorageVariant_1.$StorageVariant; } });
var _TaskEventLabel_1 = require("./schemas/$TaskEventLabel");
Object.defineProperty(exports, "$TaskEventLabel", { enumerable: true, get: function () { return _TaskEventLabel_1.$TaskEventLabel; } });
var _TaskEventName_1 = require("./schemas/$TaskEventName");
Object.defineProperty(exports, "$TaskEventName", { enumerable: true, get: function () { return _TaskEventName_1.$TaskEventName; } });
var _TaskEvents_1 = require("./schemas/$TaskEvents");
Object.defineProperty(exports, "$TaskEvents", { enumerable: true, get: function () { return _TaskEvents_1.$TaskEvents; } });
var _Template_1 = require("./schemas/$Template");
Object.defineProperty(exports, "$Template", { enumerable: true, get: function () { return _Template_1.$Template; } });
var _TemplateGetResponse_1 = require("./schemas/$TemplateGetResponse");
Object.defineProperty(exports, "$TemplateGetResponse", { enumerable: true, get: function () { return _TemplateGetResponse_1.$TemplateGetResponse; } });
var _TemplateIndex_1 = require("./schemas/$TemplateIndex");
Object.defineProperty(exports, "$TemplateIndex", { enumerable: true, get: function () { return _TemplateIndex_1.$TemplateIndex; } });
var _TemplatesGetResponse_1 = require("./schemas/$TemplatesGetResponse");
Object.defineProperty(exports, "$TemplatesGetResponse", { enumerable: true, get: function () { return _TemplatesGetResponse_1.$TemplatesGetResponse; } });
var _TemplatesUsage_1 = require("./schemas/$TemplatesUsage");
Object.defineProperty(exports, "$TemplatesUsage", { enumerable: true, get: function () { return _TemplatesUsage_1.$TemplatesUsage; } });
var _TemplatesUsages_1 = require("./schemas/$TemplatesUsages");
Object.defineProperty(exports, "$TemplatesUsages", { enumerable: true, get: function () { return _TemplatesUsages_1.$TemplatesUsages; } });
var _TemplateUpdate_1 = require("./schemas/$TemplateUpdate");
Object.defineProperty(exports, "$TemplateUpdate", { enumerable: true, get: function () { return _TemplateUpdate_1.$TemplateUpdate; } });
var _UsageGetResponseOverview_1 = require("./schemas/$UsageGetResponseOverview");
Object.defineProperty(exports, "$UsageGetResponseOverview", { enumerable: true, get: function () { return _UsageGetResponseOverview_1.$UsageGetResponseOverview; } });
var _UsagePerInterval_1 = require("./schemas/$UsagePerInterval");
Object.defineProperty(exports, "$UsagePerInterval", { enumerable: true, get: function () { return _UsagePerInterval_1.$UsagePerInterval; } });
var _VlansinNetwork_1 = require("./schemas/$VlansinNetwork");
Object.defineProperty(exports, "$VlansinNetwork", { enumerable: true, get: function () { return _VlansinNetwork_1.$VlansinNetwork; } });

},{"./models/StorageType":32,"./models/StorageVariant":33,"./schemas/$AccessKey":34,"./schemas/$AccessKeyCreate":35,"./schemas/$AccessKeyCreateResponse":36,"./schemas/$AccessKeyGetResponse":37,"./schemas/$AccessKeyList":38,"./schemas/$AccessKeyUpdate":39,"./schemas/$AccessKeysGetResponse":40,"./schemas/$AccumulatedUsage":41,"./schemas/$BackupLocation":42,"./schemas/$BackupLocationIndex":43,"./schemas/$BackupLocationsGetResponse":44,"./schemas/$BackupSchedulesinStorage":45,"./schemas/$Bucket":46,"./schemas/$BucketGetResponse":47,"./schemas/$BucketList":48,"./schemas/$BucketsGetResponse":49,"./schemas/$Certificate":50,"./schemas/$CertificateCreate":51,"./schemas/$CertificateGetResponse":52,"./schemas/$CertificateIndex":53,"./schemas/$CertificatesGetResponse":54,"./schemas/$CreateResponse":55,"./schemas/$CurrentUsagePerMinute":56,"./schemas/$DeletedIpsGetResponse":57,"./schemas/$DeletedIsoimagesGetResponse":58,"./schemas/$DeletedLoadbalancersGetResponse":59,"./schemas/$DeletedNetworksGetResponse":60,"./schemas/$DeletedPaasServicesGetResponse":61,"./schemas/$DeletedServersGetResponse":62,"./schemas/$DeletedSnapshotsGetResponse":63,"./schemas/$DeletedStoragesGetResponse":64,"./schemas/$DeletedTemplatesGetResponse":65,"./schemas/$DhcpServer":66,"./schemas/$DistributedStoragesUsages":67,"./schemas/$EventResponse":68,"./schemas/$Firewall":69,"./schemas/$FirewallCreate":70,"./schemas/$FirewallGetResponse":71,"./schemas/$FirewallIndex":72,"./schemas/$FirewallRelation":73,"./schemas/$FirewallRules":74,"./schemas/$FirewallUpdate":75,"./schemas/$FirewallV4inRule":76,"./schemas/$FirewallV4outRule":77,"./schemas/$FirewallV6inRule":78,"./schemas/$FirewallV6outRule":79,"./schemas/$FirewallsGetResponse":80,"./schemas/$GPUCreateBody":81,"./schemas/$GPUCreateResponse":82,"./schemas/$GPUFlavorGetProperties":83,"./schemas/$GPUFlavorsGetResponse":84,"./schemas/$GPUGetProperties":85,"./schemas/$GPUGetResponse":86,"./schemas/$GPUUpdateBody":87,"./schemas/$GPUsGetResponse":88,"./schemas/$Ip":89,"./schemas/$IpBrief":90,"./schemas/$IpBriefIndex":91,"./schemas/$IpCreate":92,"./schemas/$IpCreateResponse":93,"./schemas/$IpGetResponse":94,"./schemas/$IpRelation":95,"./schemas/$IpUpdate":96,"./schemas/$IpsGetResponse":97,"./schemas/$IpsUsage":98,"./schemas/$IpsUsages":99,"./schemas/$Isoimage":100,"./schemas/$IsoimageCreate":101,"./schemas/$IsoimageGetResponse":102,"./schemas/$IsoimageIndex":103,"./schemas/$IsoimageRelation":104,"./schemas/$IsoimageUpdate":105,"./schemas/$IsoimageinServer":106,"./schemas/$IsoimagesGetResponse":107,"./schemas/$IsoimagesUsage":108,"./schemas/$IsoimagesUsages":109,"./schemas/$Label":110,"./schemas/$LabelGetResponse":111,"./schemas/$LabelIndex":112,"./schemas/$LabelsGetResponse":113,"./schemas/$LinkIp":114,"./schemas/$LinkIsoimage":115,"./schemas/$LinkNetwork":116,"./schemas/$LinkStorage":117,"./schemas/$LinkedIp":118,"./schemas/$LinkedIpBrief":119,"./schemas/$LinkedIpGetResponse":120,"./schemas/$LinkedIpUpdate":121,"./schemas/$LinkedIpsGetResponse":122,"./schemas/$LinkedIsoimage":123,"./schemas/$LinkedIsoimageBrief":124,"./schemas/$LinkedIsoimageGetResponse":125,"./schemas/$LinkedIsoimageUpdate":126,"./schemas/$LinkedIsoimagesGetResponse":127,"./schemas/$LinkedNetwork":128,"./schemas/$LinkedNetworkBrief":129,"./schemas/$LinkedNetworkGetResponse":130,"./schemas/$LinkedNetworkUpdate":131,"./schemas/$LinkedNetworksGetResponse":132,"./schemas/$LinkedStorage":133,"./schemas/$LinkedStorageBrief":134,"./schemas/$LinkedStorageGetResponse":135,"./schemas/$LinkedStorageUpdate":136,"./schemas/$LinkedStoragesGetResponse":137,"./schemas/$ListenPorts":138,"./schemas/$ListenPortsByIpIndex":139,"./schemas/$Loadbalancer":140,"./schemas/$LoadbalancerCreate":141,"./schemas/$LoadbalancerCreateBackendServers":142,"./schemas/$LoadbalancerCreateForwardingRules":143,"./schemas/$LoadbalancerGetResponse":144,"./schemas/$LoadbalancerIndex":145,"./schemas/$LoadbalancerUpdate":146,"./schemas/$LoadbalancerinIp":147,"./schemas/$LoadbalancersGetResponse":148,"./schemas/$LoadbalancersUsage":149,"./schemas/$LoadbalancersUsages":150,"./schemas/$Location":151,"./schemas/$LocationChangeRequested":152,"./schemas/$LocationCreate":153,"./schemas/$LocationFeatures":154,"./schemas/$LocationGetResponse":155,"./schemas/$LocationIndex":156,"./schemas/$LocationInformation":157,"./schemas/$LocationRelations":158,"./schemas/$LocationRelationsGpuFlavor":159,"./schemas/$LocationUpdate":160,"./schemas/$LocationWithRelations":161,"./schemas/$LocationsGetResponse":162,"./schemas/$MarketplaceApplication":163,"./schemas/$MarketplaceApplicationCreate":164,"./schemas/$MarketplaceApplicationCreateResponse":165,"./schemas/$MarketplaceApplicationGetResponse":166,"./schemas/$MarketplaceApplicationImport":167,"./schemas/$MarketplaceApplicationIndex":168,"./schemas/$MarketplaceApplicationMetadata":169,"./schemas/$MarketplaceApplicationSetup":170,"./schemas/$MarketplaceApplicationUpdate":171,"./schemas/$MarketplaceApplicationsGetResponse":172,"./schemas/$Metrics":173,"./schemas/$MetricsValue":174,"./schemas/$Network":175,"./schemas/$NetworkCreate":176,"./schemas/$NetworkGetResponse":177,"./schemas/$NetworkIndex":178,"./schemas/$NetworkPinnedServersResponse":179,"./schemas/$NetworkRelation":180,"./schemas/$NetworkUpdate":181,"./schemas/$NetworkinFirewall":182,"./schemas/$NetworkinServer":183,"./schemas/$NetworksGetResponse":184,"./schemas/$ObjectUsageOverview":185,"./schemas/$PaasSecurityZone":186,"./schemas/$PaasSecurityZoneCreate":187,"./schemas/$PaasSecurityZoneCreateResponse":188,"./schemas/$PaasSecurityZoneGetResponse":189,"./schemas/$PaasSecurityZoneIndex":190,"./schemas/$PaasSecurityZoneRelation":191,"./schemas/$PaasSecurityZoneUpdate":192,"./schemas/$PaasSecurityZones":193,"./schemas/$PaasSecurityZonesGetResponse":194,"./schemas/$PaasSecurityZonesRelation":195,"./schemas/$PaasSecurityZonesinNetwork":196,"./schemas/$PaasService":197,"./schemas/$PaasServiceCreate":198,"./schemas/$PaasServiceCreateResponse":199,"./schemas/$PaasServiceCredentials":200,"./schemas/$PaasServiceGetResponse":201,"./schemas/$PaasServiceIndex":202,"./schemas/$PaasServiceMetrics":203,"./schemas/$PaasServiceMetricsGetResponse":204,"./schemas/$PaasServiceMetricsList":205,"./schemas/$PaasServiceParameters":206,"./schemas/$PaasServiceParametersSchema":207,"./schemas/$PaasServiceResourceLimit":208,"./schemas/$PaasServiceResourceLimits":209,"./schemas/$PaasServiceTemplate":210,"./schemas/$PaasServiceTemplateIndex":211,"./schemas/$PaasServiceTemplatesGetResponse":212,"./schemas/$PaasServiceUpdate":213,"./schemas/$PaasServicesGetResponse":214,"./schemas/$PaasServicesUsage":215,"./schemas/$PaasServicesUsages":216,"./schemas/$PaasServicesinNetwork":217,"./schemas/$PinnedServer":218,"./schemas/$PinnedServerPayload":219,"./schemas/$ProductUsage":220,"./schemas/$PublicIpinServer":221,"./schemas/$Request":222,"./schemas/$RequestGetResponse":223,"./schemas/$RocketStoragesUsages":224,"./schemas/$RulesProperties":225,"./schemas/$Server":226,"./schemas/$ServerCreate":227,"./schemas/$ServerCreateResponse":228,"./schemas/$ServerGetResponse":229,"./schemas/$ServerIndex":230,"./schemas/$ServerMetrics":231,"./schemas/$ServerMetricsGetResponse":232,"./schemas/$ServerMetricsList":233,"./schemas/$ServerPowerStatus":234,"./schemas/$ServerPowerUpdate":235,"./schemas/$ServerRelation":236,"./schemas/$ServerUpdate":237,"./schemas/$ServerinIp":238,"./schemas/$ServerinIsoimage":239,"./schemas/$ServerinNetwork":240,"./schemas/$ServerinStrorage":241,"./schemas/$ServersGetResponse":242,"./schemas/$ServersUsage":243,"./schemas/$ServersUsages":244,"./schemas/$ServiceinPaasSecurityZone":245,"./schemas/$ServiceinPaasSecurityZones":246,"./schemas/$Snapshot":247,"./schemas/$SnapshotCreate":248,"./schemas/$SnapshotExportToS3Payload":249,"./schemas/$SnapshotGetResponse":250,"./schemas/$SnapshotIndex":251,"./schemas/$SnapshotSchedule":252,"./schemas/$SnapshotScheduleCreate":253,"./schemas/$SnapshotScheduleGetResponse":254,"./schemas/$SnapshotScheduleIndex":255,"./schemas/$SnapshotScheduleUpdate":256,"./schemas/$SnapshotSchedulesGetResponse":257,"./schemas/$SnapshotSchedulesinStorage":258,"./schemas/$SnapshotUpdate":259,"./schemas/$SnapshotsGetResponse":260,"./schemas/$SnapshotsUsage":261,"./schemas/$SnapshotsUsages":262,"./schemas/$Sshkey":263,"./schemas/$SshkeyCreate":264,"./schemas/$SshkeyGetResponse":265,"./schemas/$SshkeyIndex":266,"./schemas/$SshkeyUpdate":267,"./schemas/$SshkeysGetResponse":268,"./schemas/$Storage":269,"./schemas/$StorageBackup":270,"./schemas/$StorageBackupIndex":271,"./schemas/$StorageBackupSchedule":272,"./schemas/$StorageBackupScheduleCreate":273,"./schemas/$StorageBackupScheduleGetResponse":274,"./schemas/$StorageBackupScheduleIndex":275,"./schemas/$StorageBackupScheduleUpdate":276,"./schemas/$StorageBackupSchedulesGetResponse":277,"./schemas/$StorageBackupUsages":278,"./schemas/$StorageBackupsGetResponse":279,"./schemas/$StorageBackupsUsage":280,"./schemas/$StorageClone":281,"./schemas/$StorageCreate":282,"./schemas/$StorageCreateTemplatePassword":283,"./schemas/$StorageCreateTemplateSshkey":284,"./schemas/$StorageGetResponse":285,"./schemas/$StorageImportFromBackup":286,"./schemas/$StorageImportFromS3Object":287,"./schemas/$StorageIndex":288,"./schemas/$StorageRollback":289,"./schemas/$StorageTemplateCreate":290,"./schemas/$StorageTemplatesGetResponse":291,"./schemas/$StorageType":292,"./schemas/$StorageUpdate":293,"./schemas/$StorageVariant":294,"./schemas/$StoragesGetResponse":295,"./schemas/$StoragesRelation":296,"./schemas/$StoragesUsage":297,"./schemas/$StoragesinServer":298,"./schemas/$TaskEventLabel":299,"./schemas/$TaskEventName":300,"./schemas/$TaskEvents":301,"./schemas/$Template":302,"./schemas/$TemplateGetResponse":303,"./schemas/$TemplateIndex":304,"./schemas/$TemplateUpdate":305,"./schemas/$TemplatesGetResponse":306,"./schemas/$TemplatesUsage":307,"./schemas/$TemplatesUsages":308,"./schemas/$UsageGetResponseOverview":309,"./schemas/$UsagePerInterval":310,"./schemas/$VlansinNetwork":311}],32:[function(require,module,exports){
"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageType = void 0;
/**
 * Storage type (one of storage, storage_high, storage_insane).
 */
var StorageType;
(function (StorageType) {
    StorageType["STORAGE"] = "storage";
    StorageType["STORAGE_HIGH"] = "storage_high";
    StorageType["STORAGE_INSANE"] = "storage_insane";
})(StorageType = exports.StorageType || (exports.StorageType = {}));

},{}],33:[function(require,module,exports){
"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageVariant = void 0;
/**
 * Storage variant (one of local or distributed).
 */
var StorageVariant;
(function (StorageVariant) {
    StorageVariant["DISTRIBUTED"] = "distributed";
    StorageVariant["LOCAL"] = "local";
})(StorageVariant = exports.StorageVariant || (exports.StorageVariant = {}));

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKey = {
    properties: {
        secret_key: {
            type: 'string',
        },
        access_key: {
            type: 'string',
        },
        comment: {
            type: 'string',
        },
        user_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeyCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeyCreate = {
    properties: {
        comment: {
            type: 'string',
        },
        user_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeyCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeyCreateResponse = {
    properties: {
        access_key: {
            properties: {
                secret_key: {
                    type: 'string',
                },
                access_key: {
                    type: 'string',
                },
            },
        },
        request_uuid: {
            type: 'string',
        },
    },
};

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeyGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeyGetResponse = {
    properties: {
        access_key: {
            type: 'AccessKey',
        },
    },
};

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeyList = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeyList = {
    type: 'array',
    contains: {
        type: 'AccessKey',
    },
};

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeyUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeyUpdate = {
    properties: {
        comment: {
            type: 'string',
        },
    },
};

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccessKeysGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccessKeysGetResponse = {
    properties: {
        access_keys: {
            type: 'AccessKeyList',
        },
    },
};

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AccumulatedUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$AccumulatedUsage = {
    type: 'array',
    contains: {
        type: 'ProductUsage',
    },
};

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BackupLocation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BackupLocation = {
    properties: {
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BackupLocationIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BackupLocationIndex = {
    type: 'dictionary',
    contains: {
        type: 'BackupLocation',
    },
};

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BackupLocationsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BackupLocationsGetResponse = {
    properties: {
        backup_locations: {
            type: 'BackupLocationIndex',
        },
    },
};

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BackupSchedulesinStorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BackupSchedulesinStorage = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            next_runtime: {
                type: 'string',
                format: 'date-time',
            },
            keep_backups: {
                type: 'number',
            },
            create_time: {
                type: 'string',
            },
            run_interval: {
                type: 'number',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bucket = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Bucket = {
    properties: {
        name: {
            type: 'string',
        },
        usage: {
            properties: {
                size_kb: {
                    type: 'number',
                },
                num_objects: {
                    type: 'number',
                },
            },
        },
    },
};

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BucketGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BucketGetResponse = {
    properties: {
        Bucket: {
            type: 'Bucket',
        },
    },
};

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BucketList = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BucketList = {
    type: 'array',
    contains: {
        type: 'Bucket',
    },
};

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$BucketsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$BucketsGetResponse = {
    properties: {
        buckets: {
            type: 'BucketList',
        },
    },
};

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Certificate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Certificate = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        common_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        not_valid_after: {
            type: 'string',
        },
        fingerprints: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CertificateCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CertificateCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        private_key: {
            type: 'string',
            isRequired: true,
        },
        leaf_certificate: {
            type: 'string',
            isRequired: true,
        },
        certificate_chain: {
            type: 'string',
        },
    },
};

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CertificateGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CertificateGetResponse = {
    properties: {
        certificate: {
            type: 'Certificate',
        },
    },
};

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CertificateIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CertificateIndex = {
    type: 'dictionary',
    contains: {
        type: 'Certificate',
    },
};

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CertificatesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CertificatesGetResponse = {
    properties: {
        certificates: {
            type: 'CertificateIndex',
        },
    },
};

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$CurrentUsagePerMinute = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$CurrentUsagePerMinute = {
    type: 'array',
    contains: {
        type: 'ProductUsage',
    },
};

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedIpsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedIpsGetResponse = {
    properties: {
        deleted_ips: {
            type: 'IpBriefIndex',
        },
    },
};

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedIsoimagesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedIsoimagesGetResponse = {
    properties: {
        deleted_isoimages: {
            type: 'IsoimageIndex',
        },
    },
};

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedLoadbalancersGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedLoadbalancersGetResponse = {
    properties: {
        deleted_loadbalancers: {
            type: 'LoadbalancerIndex',
        },
    },
};

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedNetworksGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedNetworksGetResponse = {
    properties: {
        deleted_networks: {
            type: 'NetworkIndex',
        },
    },
};

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedPaasServicesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedPaasServicesGetResponse = {
    properties: {
        deleted_paas_services: {
            type: 'PaasServiceIndex',
        },
    },
};

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedServersGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedServersGetResponse = {
    properties: {
        deleted_servers: {
            type: 'ServerIndex',
        },
    },
};

},{}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedSnapshotsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedSnapshotsGetResponse = {
    properties: {
        deleted_snapshots: {
            type: 'SnapshotIndex',
        },
    },
};

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedStoragesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedStoragesGetResponse = {
    properties: {
        deleted_storages: {
            type: 'StorageIndex',
        },
    },
};

},{}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DeletedTemplatesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DeletedTemplatesGetResponse = {
    properties: {
        deleted_templates: {
            type: 'TemplateIndex',
        },
    },
};

},{}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DhcpServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DhcpServer = {
    properties: {
        server_uuid: {
            type: 'string',
        },
        ip: {
            type: 'string',
        },
    },
};

},{}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DistributedStoragesUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$DistributedStoragesUsages = {
    properties: {
        distributed_storages: {
            type: 'array',
            contains: {
                type: 'StoragesUsage',
            },
        },
    },
};

},{}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$EventResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$EventResponse = {
    properties: {
        events: {
            type: 'array',
            contains: {
                properties: {
                    object_type: {
                        type: 'string',
                    },
                    request_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    activity: {
                        type: 'string',
                    },
                    request_type: {
                        type: 'string',
                    },
                    request_status: {
                        type: 'string',
                    },
                    change: {
                        type: 'string',
                    },
                    timestamp: {
                        type: 'string',
                        format: 'date-time',
                    },
                    user_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    initiator: {
                        type: 'string',
                    },
                },
            },
        },
    },
};

},{}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Firewall = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Firewall = {
    properties: {
        status: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        rules: {
            type: 'FirewallRules',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        private: {
            type: 'boolean',
        },
        relations: {
            type: 'FirewallRelation',
        },
        description: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        name: {
            type: 'string',
        },
    },
};

},{}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        rules: {
            type: 'FirewallRules',
            isRequired: true,
        },
    },
};

},{}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallGetResponse = {
    properties: {
        firewall: {
            type: 'Firewall',
        },
    },
};

},{}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallIndex = {
    type: 'dictionary',
    contains: {
        type: 'Firewall',
    },
};

},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallRelation = {
    properties: {
        networks: {
            type: 'NetworkinFirewall',
        },
    },
};

},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallRules = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallRules = {
    properties: {
        'rules-v6-in': {
            type: 'FirewallV6inRule',
        },
        'rules-v6-out': {
            type: 'FirewallV6outRule',
        },
        'rules-v4-in': {
            type: 'FirewallV4inRule',
        },
        'rules-v4-out': {
            type: 'FirewallV4outRule',
        },
    },
};

},{}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        rules: {
            type: 'FirewallRules',
        },
    },
};

},{}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallV4inRule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallV4inRule = {
    type: 'array',
    contains: {
        type: 'RulesProperties',
    },
};

},{}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallV4outRule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallV4outRule = {
    type: 'array',
    contains: {
        type: 'RulesProperties',
    },
};

},{}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallV6inRule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallV6inRule = {
    type: 'array',
    contains: {
        type: 'RulesProperties',
    },
};

},{}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallV6outRule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallV6outRule = {
    type: 'array',
    contains: {
        type: 'RulesProperties',
    },
};

},{}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallsGetResponse = {
    properties: {
        firewalls: {
            type: 'FirewallIndex',
        },
    },
};

},{}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUCreateBody = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUCreateBody = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        gpu_flavor_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        slices: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
    },
};

},{}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUCreateResponse = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUFlavorGetProperties = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUFlavorGetProperties = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        image_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        memory_per_slice: {
            type: 'number',
        },
        graphics_cards_per_slice: {
            type: 'number',
        },
        cores_per_slice: {
            type: 'number',
        },
        local_storage_capacity_per_slice: {
            type: 'number',
        },
        graphics_card_identifier: {
            type: 'string',
        },
        max_slices: {
            type: 'number',
        },
        product_no: {
            type: 'number',
        },
        hardware_profile_configuration: {
            properties: {
                machinetype: {
                    type: 'Enum',
                },
                storage_device: {
                    type: 'Enum',
                },
                usb_controller: {
                    type: 'Enum',
                },
                nested_virtualization: {
                    type: 'boolean',
                },
                hyperv_extensions: {
                    type: 'boolean',
                },
                network_model: {
                    type: 'Enum',
                },
                serial_interface: {
                    type: 'boolean',
                },
                server_renice: {
                    type: 'boolean',
                },
            },
        },
    },
};

},{}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUFlavorsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUFlavorsGetResponse = {
    properties: {
        gpu_flavors: {
            type: 'dictionary',
            contains: {
                type: 'GPUFlavorGetProperties',
            },
        },
    },
};

},{}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUGetProperties = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUGetProperties = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
        gpu_flavor_uuid: {
            type: 'string',
            format: 'uuid',
        },
        slices: {
            type: 'number',
        },
    },
};

},{}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUGetResponse = {
    properties: {
        gpu: {
            type: 'GPUGetProperties',
        },
    },
};

},{}],87:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUUpdateBody = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUUpdateBody = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],88:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GPUsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GPUsGetResponse = {
    properties: {
        gpus: {
            type: 'dictionary',
            contains: {
                type: 'GPUGetProperties',
            },
        },
    },
};

},{}],89:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Ip = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Ip = {
    properties: {
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        relations: {
            type: 'IpRelation',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        prefix: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        failover: {
            type: 'boolean',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
        family: {
            type: 'Enum',
        },
        location_iata: {
            type: 'string',
        },
        reverse_dns: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        usage_in_minutes: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],90:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpBrief = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpBrief = {
    properties: {
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        relations: {
            type: 'IpRelation',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        prefix: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        failover: {
            type: 'boolean',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
        family: {
            type: 'Enum',
        },
        location_iata: {
            type: 'string',
        },
        reverse_dns: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        usage_in_minutes: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        partner_uuid: {
            type: 'string',
            format: 'uuid',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],91:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpBriefIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpBriefIndex = {
    type: 'dictionary',
    contains: {
        type: 'IpBrief',
    },
};

},{}],92:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpCreate = {
    properties: {
        family: {
            type: 'Enum',
            isRequired: true,
        },
        failover: {
            type: 'boolean',
        },
        reverse_dns: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
    },
};

},{}],93:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpCreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
        },
        ip: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        prefix: {
            type: 'string',
        },
    },
};

},{}],94:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpGetResponse = {
    properties: {
        ip: {
            type: 'Ip',
        },
    },
};

},{}],95:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpRelation = {
    properties: {
        servers: {
            type: 'ServerinIp',
        },
        loadbalancers: {
            type: 'LoadbalancerinIp',
        },
    },
};

},{}],96:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpUpdate = {
    properties: {
        failover: {
            type: 'boolean',
        },
        reverse_dns: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
    },
};

},{}],97:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpsGetResponse = {
    properties: {
        ips: {
            type: 'IpBriefIndex',
        },
    },
};

},{}],98:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpsUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpsUsage = {
    properties: {
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        prefix: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        failover: {
            type: 'boolean',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
        family: {
            type: 'Enum',
        },
        reverse_dns: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        partner_uuid: {
            type: 'string',
            format: 'uuid',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],99:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpsUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpsUsages = {
    properties: {
        ip_addresses: {
            type: 'array',
            contains: {
                type: 'IpsUsage',
            },
        },
    },
};

},{}],100:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Isoimage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Isoimage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        relations: {
            type: 'IsoimageRelation',
        },
        description: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        source_url: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_iata: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        private: {
            type: 'boolean',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],101:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        source_url: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],102:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageGetResponse = {
    properties: {
        isoimage: {
            type: 'Isoimage',
        },
    },
};

},{}],103:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageIndex = {
    type: 'dictionary',
    contains: {
        type: 'Isoimage',
    },
};

},{}],104:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageRelation = {
    properties: {
        servers: {
            type: 'ServerinIsoimage',
        },
    },
};

},{}],105:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],106:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageinServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageinServer = {
    type: 'array',
    contains: {
        type: 'LinkedIsoimage',
    },
};

},{}],107:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimagesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimagesGetResponse = {
    properties: {
        isoimages: {
            type: 'IsoimageIndex',
        },
    },
};

},{}],108:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimagesUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimagesUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        description: {
            type: 'string',
        },
        source_url: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        private: {
            type: 'boolean',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],109:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimagesUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimagesUsages = {
    properties: {
        iso_images: {
            type: 'array',
            contains: {
                type: 'IsoimagesUsage',
            },
        },
    },
};

},{}],110:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Label = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Label = {
    properties: {
        label: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'datetime',
        },
        change_time: {
            type: 'string',
            format: 'dattime',
        },
        relations: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        status: {
            type: 'string',
        },
    },
};

},{}],111:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LabelGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LabelGetResponse = {
    properties: {
        label: {
            type: 'Label',
        },
    },
};

},{}],112:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LabelIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LabelIndex = {
    type: 'dictionary',
    contains: {
        type: 'Label',
    },
};

},{}],113:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LabelsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LabelsGetResponse = {
    properties: {
        labels: {
            type: 'LabelIndex',
        },
    },
};

},{}],114:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkIp = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkIp = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],115:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkIsoimage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkIsoimage = {
    properties: {
        object_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
    },
};

},{}],116:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkNetwork = {
    properties: {
        object_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        firewall: {
            type: 'FirewallRules',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],117:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkStorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkStorage = {
    properties: {
        object_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        bootdevice: {
            type: 'boolean',
        },
    },
};

},{}],118:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIp = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIp = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        family: {
            type: 'Enum',
        },
        prefix: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
    },
};

},{}],119:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIpBrief = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIpBrief = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        family: {
            type: 'Enum',
        },
        prefix: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        ip: {
            type: 'string',
        },
    },
};

},{}],120:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIpGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIpGetResponse = {
    properties: {
        ip_relation: {
            type: 'LinkedIp',
        },
    },
};

},{}],121:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIpUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIpUpdate = {
    properties: {
        bootdevice: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
    },
};

},{}],122:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIpsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIpsGetResponse = {
    properties: {
        ip_relations: {
            type: 'array',
            contains: {
                type: 'LinkedIpBrief',
            },
        },
    },
};

},{}],123:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIsoimage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIsoimage = {
    properties: {
        bootdevice: {
            type: 'boolean',
        },
        private: {
            type: 'boolean',
        },
        object_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],124:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIsoimageBrief = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIsoimageBrief = {
    properties: {
        bootdevice: {
            type: 'boolean',
        },
        object_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        private: {
            type: 'boolean',
            format: 'date-time',
        },
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],125:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIsoimageGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIsoimageGetResponse = {
    properties: {
        isoimage_relation: {
            type: 'LinkedIsoimage',
        },
    },
};

},{}],126:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIsoimageUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIsoimageUpdate = {
    properties: {
        bootdevice: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
    },
};

},{}],127:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedIsoimagesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedIsoimagesGetResponse = {
    properties: {
        isoimage_relations: {
            type: 'array',
            contains: {
                type: 'LinkedIsoimageBrief',
            },
        },
    },
};

},{}],128:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetwork = {
    properties: {
        network_type: {
            type: 'string',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        bootdevice: {
            type: 'boolean',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        l2security: {
            type: 'boolean',
        },
        mac: {
            type: 'string',
        },
        ordering: {
            type: 'string',
        },
        firewall: {
            type: 'string',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        public_net: {
            type: 'boolean',
        },
    },
};

},{}],129:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetworkBrief = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetworkBrief = {
    properties: {
        network_type: {
            type: 'string',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        bootdevice: {
            type: 'boolean',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        l2security: {
            type: 'boolean',
        },
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        mac: {
            type: 'string',
        },
        ordering: {
            type: 'string',
        },
        firewall: {
            type: 'string',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_name: {
            type: 'string',
        },
        dhcp_ip: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        public_net: {
            type: 'boolean',
        },
    },
};

},{}],130:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetworkGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetworkGetResponse = {
    properties: {
        network_relation: {
            type: 'LinkedNetwork',
        },
    },
};

},{}],131:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetworkUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetworkUpdate = {
    properties: {
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        firewall: {
            type: 'FirewallRules',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],132:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetworksGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetworksGetResponse = {
    properties: {
        network_relations: {
            type: 'array',
            contains: {
                type: 'LinkedNetworkBrief',
            },
        },
    },
};

},{}],133:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedStorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedStorage = {
    properties: {
        storage_type: {
            type: 'string',
        },
        target: {
            type: 'number',
        },
        bus: {
            type: 'number',
        },
        capacity: {
            type: 'number',
        },
        license_product_no: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        controller: {
            type: 'number',
        },
        lun: {
            type: 'number',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        last_used_template: {
            type: 'string',
            format: 'uuid',
        },
        bootdevice: {
            type: 'boolean',
        },
        object_name: {
            type: 'string',
        },
    },
};

},{}],134:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedStorageBrief = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedStorageBrief = {
    properties: {
        storage_type: {
            type: 'string',
        },
        target: {
            type: 'number',
        },
        bus: {
            type: 'number',
        },
        capacity: {
            type: 'number',
        },
        license_product_no: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        controller: {
            type: 'number',
        },
        lun: {
            type: 'number',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        last_used_template: {
            type: 'string',
            format: 'uuid',
        },
        bootdevice: {
            type: 'boolean',
        },
        object_name: {
            type: 'string',
        },
    },
};

},{}],135:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedStorageGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedStorageGetResponse = {
    properties: {
        storage_relation: {
            type: 'LinkedStorage',
        },
    },
};

},{}],136:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedStorageUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedStorageUpdate = {
    properties: {
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],137:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedStoragesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedStoragesGetResponse = {
    properties: {
        storage_relations: {
            type: 'array',
            contains: {
                type: 'LinkedStorageBrief',
            },
        },
    },
};

},{}],138:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ListenPorts = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ListenPorts = {
    type: 'dictionary',
    contains: {
        type: 'number',
    },
};

},{}],139:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ListenPortsByIpIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ListenPortsByIpIndex = {
    type: 'dictionary',
    contains: {
        type: 'ListenPorts',
    },
};

},{}],140:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Loadbalancer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Loadbalancer = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        location_iata: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backend_servers: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        algorithm: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        listen_ipv4_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            format: 'uuid',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],141:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateForwardingRules',
            },
            isRequired: true,
        },
        backend_servers: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateBackendServers',
            },
            isRequired: true,
        },
        status: {
            type: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
        algorithm: {
            type: 'string',
            isRequired: true,
        },
        listen_ipv4_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
    },
};

},{}],142:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerCreateBackendServers = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerCreateBackendServers = {
    properties: {
        weight: {
            type: 'number',
            isRequired: true,
        },
        host: {
            type: 'string',
            isRequired: true,
        },
    },
};

},{}],143:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerCreateForwardingRules = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerCreateForwardingRules = {
    properties: {
        mode: {
            type: 'string',
            isRequired: true,
        },
        listen_port: {
            type: 'number',
            isRequired: true,
        },
        target_port: {
            type: 'number',
            isRequired: true,
        },
        letsencrypt_ssl: {
            type: 'string',
            isRequired: true,
            format: 'domain',
        },
        certificate_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],144:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerGetResponse = {
    properties: {
        loadbalancer: {
            type: 'Loadbalancer',
        },
    },
};

},{}],145:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerIndex = {
    type: 'dictionary',
    contains: {
        type: 'Loadbalancer',
    },
};

},{}],146:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateForwardingRules',
            },
        },
        backend_servers: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateBackendServers',
            },
        },
        status: {
            type: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        algorithm: {
            type: 'string',
        },
    },
};

},{}],147:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerinIp = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerinIp = {
    type: 'array',
    contains: {
        properties: {
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            loadbalancer_uuid: {
                type: 'string',
            },
            loadbalancer_name: {
                type: 'string',
            },
        },
    },
};

},{}],148:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancersGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancersGetResponse = {
    properties: {
        loadbalancers: {
            type: 'LoadbalancerIndex',
        },
    },
};

},{}],149:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancersUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancersUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        backend_servers: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
        },
        algorithm: {
            type: 'string',
        },
        listen_ipv4_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            format: 'uuid',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],150:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancersUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancersUsages = {
    properties: {
        load_balancers: {
            type: 'array',
            contains: {
                type: 'LoadbalancersUsage',
            },
        },
    },
};

},{}],151:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Location = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Location = {
    properties: {
        iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_id: {
            type: 'string',
            format: 'uuid',
        },
        country: {
            type: 'string',
            format: 'string',
        },
        active: {
            type: 'boolean',
        },
        change_requested: {
            type: 'LocationChangeRequested',
        },
        cpunode_count: {
            type: 'number',
        },
        public: {
            type: 'boolean',
        },
        product_no: {
            type: 'number',
        },
        location_information: {
            type: 'LocationInformation',
        },
        features: {
            type: 'LocationFeatures',
        },
    },
};

},{}],152:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationChangeRequested = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationChangeRequested = {
    properties: {
        cpunode_count: {
            type: 'string',
        },
        product_no: {
            type: 'number',
        },
        parent_location_uuid: {
            type: 'string',
        },
    },
};

},{}],153:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        parent_location_uuid: {
            type: 'string',
            isRequired: true,
        },
        cpunode_count: {
            type: 'number',
            isRequired: true,
        },
        product_no: {
            type: 'number',
            isRequired: true,
        },
    },
};

},{}],154:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationFeatures = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationFeatures = {
    properties: {
        hardware_profiles: {
            type: 'string',
            format: 'string',
        },
        has_rocket_storage: {
            type: 'string',
            format: 'string',
        },
        has_server_provisioning: {
            type: 'string',
            format: 'string',
        },
        has_gpu: {
            type: 'string',
            format: 'string',
        },
        object_storage_region: {
            type: 'string',
            format: 'string',
        },
        backup_center_location_uuid: {
            type: 'string',
            format: 'string',
        },
    },
};

},{}],155:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationGetResponse = {
    properties: {
        location: {
            type: 'LocationWithRelations',
        },
    },
};

},{}],156:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationIndex = {
    type: 'dictionary',
    contains: {
        type: 'Location',
    },
};

},{}],157:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationInformation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationInformation = {
    properties: {
        certification_list: {
            type: 'string',
            format: 'string',
        },
        city: {
            type: 'string',
            format: 'string',
        },
        data_protection_agreement: {
            type: 'string',
            format: 'string',
        },
        geo_location: {
            type: 'string',
            format: 'string',
        },
        green_energy: {
            type: 'string',
            format: 'string',
        },
        operator_certification_list: {
            type: 'string',
            format: 'string',
        },
        owner: {
            type: 'string',
            format: 'string',
        },
        owner_website: {
            type: 'string',
            format: 'string',
        },
        site_name: {
            type: 'string',
            format: 'string',
        },
    },
};

},{}],158:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationRelations = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationRelations = {
    properties: {
        gpu_flavors: {
            type: 'array',
            contains: {
                type: 'LocationRelationsGpuFlavor',
            },
        },
    },
};

},{}],159:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationRelationsGpuFlavor = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationRelationsGpuFlavor = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        memory_per_slice: {
            type: 'number',
        },
        graphics_cards_per_slice: {
            type: 'number',
        },
        cores_per_slice: {
            type: 'number',
        },
        local_storage_capacity_per_slice: {
            type: 'number',
        },
        max_slices: {
            type: 'number',
        },
    },
};

},{}],160:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        cpunode_count: {
            type: 'string',
        },
    },
};

},{}],161:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationWithRelations = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationWithRelations = {
    properties: {
        iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_id: {
            type: 'string',
            format: 'uuid',
        },
        country: {
            type: 'string',
            format: 'string',
        },
        active: {
            type: 'boolean',
        },
        change_requested: {
            type: 'LocationChangeRequested',
        },
        cpunode_count: {
            type: 'number',
        },
        public: {
            type: 'boolean',
        },
        product_no: {
            type: 'number',
        },
        location_information: {
            type: 'LocationInformation',
        },
        features: {
            type: 'LocationFeatures',
        },
        relations: {
            type: 'LocationRelations',
        },
    },
};

},{}],162:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationsGetResponse = {
    properties: {
        locations: {
            type: 'LocationIndex',
        },
    },
};

},{}],163:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplication = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplication = {
    properties: {
        name: {
            type: 'string',
        },
        unique_hash: {
            type: 'string',
        },
        object_storage_path: {
            type: 'string',
        },
        application_owner: {
            type: 'boolean',
        },
        setup: {
            properties: {
                capacity: {
                    type: 'number',
                },
                cores: {
                    type: 'number',
                },
                memory: {
                    type: 'number',
                },
            },
        },
        published: {
            type: 'boolean',
        },
        published_date: {
            type: 'string',
            format: 'date-time',
        },
        publish_requested: {
            type: 'boolean',
        },
        publish_requested_date: {
            type: 'string',
            format: 'date-time',
        },
        publish_global_requested: {
            type: 'boolean',
        },
        publish_global_requested_date: {
            type: 'string',
            format: 'date-time',
        },
        published_global: {
            type: 'boolean',
        },
        published_global_date: {
            type: 'string',
            format: 'date-time',
        },
        category: {
            type: 'Enum',
        },
        metadata: {
            properties: {
                license: {
                    type: 'string',
                },
                os: {
                    type: 'string',
                },
                components: {
                    type: 'array',
                    contains: {
                        type: 'string',
                    },
                },
                overview: {
                    type: 'string',
                },
                hints: {
                    type: 'string',
                },
                term_of_use: {
                    type: 'string',
                },
                icon: {
                    type: 'string',
                },
                features: {
                    type: 'string',
                },
                terms_of_use: {
                    type: 'string',
                },
                authors: {
                    type: 'string',
                },
                advices: {
                    type: 'string',
                },
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        status: {
            type: 'string',
        },
        application_type: {
            type: 'string',
        },
    },
};

},{}],164:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        object_storage_path: {
            type: 'string',
            isRequired: true,
        },
        category: {
            type: 'Enum',
        },
        publish: {
            type: 'boolean',
        },
        setup: {
            properties: {
                cores: {
                    type: 'number',
                    isRequired: true,
                    maximum: 64,
                    minimum: 1,
                },
                memory: {
                    type: 'number',
                    isRequired: true,
                    maximum: 192,
                    minimum: 1,
                },
                capacity: {
                    type: 'number',
                    isRequired: true,
                    maximum: 16384,
                    minimum: 1,
                },
            },
            isRequired: true,
        },
        metadata: {
            type: 'MarketplaceApplicationMetadata',
        },
    },
};

},{}],165:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationCreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        unique_hash: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],166:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationGetResponse = {
    properties: {
        application: {
            type: 'MarketplaceApplication',
        },
    },
};

},{}],167:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationImport = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationImport = {
    properties: {
        unique_hash: {
            type: 'string',
            isRequired: true,
        },
    },
};

},{}],168:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationIndex = {
    type: 'dictionary',
    contains: {
        type: 'MarketplaceApplication',
    },
};

},{}],169:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationMetadata = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationMetadata = {
    properties: {
        components: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        features: {
            type: 'string',
        },
        hints: {
            type: 'string',
        },
        icon: {
            type: 'string',
        },
        license: {
            type: 'string',
        },
        overview: {
            type: 'string',
        },
        terms_of_use: {
            type: 'string',
        },
        os: {
            type: 'string',
        },
        author: {
            type: 'string',
        },
        advices: {
            type: 'string',
        },
    },
};

},{}],170:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationSetup = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationSetup = {
    properties: {
        cores: {
            type: 'number',
            maximum: 64,
            minimum: 1,
        },
        memory: {
            type: 'number',
            maximum: 192,
            minimum: 1,
        },
        capacity: {
            type: 'number',
            maximum: 16384,
            minimum: 1,
        },
    },
};

},{}],171:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_storage_path: {
            type: 'string',
        },
        category: {
            type: 'Enum',
        },
        publish: {
            type: 'boolean',
        },
        setup: {
            type: 'MarketplaceApplicationSetup',
        },
        metadata: {
            type: 'MarketplaceApplicationMetadata',
        },
    },
};

},{}],172:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationsGetResponse = {
    properties: {
        applications: {
            type: 'MarketplaceApplicationIndex',
        },
    },
};

},{}],173:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Metrics = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Metrics = {
    properties: {
        begin_time: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        end_time: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
    },
};

},{}],174:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MetricsValue = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MetricsValue = {
    properties: {
        value: {
            type: 'number',
            isRequired: true,
            format: 'float',
        },
        unit: {
            type: 'string',
            isRequired: true,
        },
    },
};

},{}],175:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Network = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Network = {
    properties: {
        location_country: {
            type: 'string',
            format: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        public_net: {
            type: 'boolean',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_type: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        l2security: {
            type: 'boolean',
        },
        relations: {
            type: 'NetworkRelation',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        location_iata: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        dhcp_active: {
            type: 'boolean',
        },
        dhcp_range: {
            type: 'string',
        },
        dhcp_gateway: {
            type: 'string',
        },
        dhcp_dns: {
            type: 'string',
        },
        dhcp_reserved_subnet: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        auto_assigned_servers: {
            type: 'array',
            contains: {
                type: 'DhcpServer',
            },
        },
        pinned_servers: {
            type: 'array',
            contains: {
                type: 'DhcpServer',
            },
        },
    },
};

},{}],176:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        l2security: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        dhcp_active: {
            type: 'boolean',
        },
        dhcp_range: {
            type: 'string',
        },
        dhcp_gateway: {
            type: 'string',
        },
        dhcp_dns: {
            type: 'string',
        },
        dhcp_reserved_subnet: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],177:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkGetResponse = {
    properties: {
        network: {
            type: 'Network',
        },
    },
};

},{}],178:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkIndex = {
    type: 'dictionary',
    contains: {
        type: 'Network',
    },
};

},{}],179:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkPinnedServersResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkPinnedServersResponse = {
    properties: {
        pinned_servers: {
            type: 'array',
            contains: {
                type: 'PinnedServer',
            },
        },
    },
};

},{}],180:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkRelation = {
    properties: {
        servers: {
            type: 'ServerinNetwork',
        },
        vlans: {
            type: 'VlansinNetwork',
        },
        paas_security_zones: {
            type: 'PaasSecurityZonesinNetwork',
        },
        paas_services: {
            type: 'PaasServicesinNetwork',
        },
    },
};

},{}],181:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        l2security: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        dhcp_active: {
            type: 'boolean',
        },
        dhcp_range: {
            type: 'string',
        },
        dhcp_gateway: {
            type: 'string',
        },
        dhcp_dns: {
            type: 'string',
        },
        dhcp_reserved_subnet: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],182:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkinFirewall = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkinFirewall = {
    type: 'array',
    contains: {
        properties: {
            mac: {
                type: 'string',
            },
            network_uuid: {
                type: 'string',
            },
            network_type: {
                type: 'string',
            },
            network_name: {
                type: 'string',
            },
            server_uuid: {
                type: 'string',
                format: 'uuid',
            },
            server_name: {
                type: 'string',
            },
            object_name: {
                type: 'string',
            },
        },
    },
};

},{}],183:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkinServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkinServer = {
    type: 'array',
    contains: {
        type: 'LinkedNetworkBrief',
    },
};

},{}],184:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworksGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworksGetResponse = {
    properties: {
        networks: {
            type: 'NetworkIndex',
        },
    },
};

},{}],185:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ObjectUsageOverview = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ObjectUsageOverview = {
    properties: {
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],186:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZone = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZone = {
    properties: {
        location_country: {
            type: 'string',
            format: 'string',
        },
        relations: {
            type: 'PaasSecurityZoneRelation',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        location_iata: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        status: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
    },
};

},{}],187:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneCreate = {
    properties: {
        name: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],188:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneCreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],189:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneGetResponse = {
    properties: {
        paas_security_zone: {
            type: 'PaasSecurityZone',
        },
    },
};

},{}],190:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneIndex = {
    type: 'dictionary',
    contains: {
        type: 'PaasSecurityZones',
    },
};

},{}],191:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneRelation = {
    properties: {
        services: {
            type: 'ServiceinPaasSecurityZone',
        },
    },
};

},{}],192:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZoneUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZoneUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],193:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZones = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZones = {
    properties: {
        location_country: {
            type: 'string',
            format: 'string',
        },
        relations: {
            type: 'PaasSecurityZonesRelation',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        location_iata: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        status: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
    },
};

},{}],194:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZonesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZonesGetResponse = {
    properties: {
        paas_security_zones: {
            type: 'PaasSecurityZoneIndex',
        },
    },
};

},{}],195:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZonesRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZonesRelation = {
    properties: {
        services: {
            type: 'ServiceinPaasSecurityZones',
        },
    },
};

},{}],196:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasSecurityZonesinNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasSecurityZonesinNetwork = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            ipv6_prefix: {
                type: 'string',
            },
        },
    },
};

},{}],197:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasService = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasService = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        listen_ports: {
            type: 'ListenPortsByIpIndex',
        },
        security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        service_template_category: {
            type: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
    },
};

},{}],198:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        paas_service_template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
    },
};

},{}],199:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ports: {
            type: 'ListenPortsByIpIndex',
        },
        paas_service_uuid: {
            type: 'string',
            format: 'uuid',
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
    },
};

},{}],200:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCredentials = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCredentials = {
    type: 'array',
    contains: {
        properties: {
            kubeconfig: {
                type: 'string',
            },
            expiration_time: {
                type: 'string',
                format: 'date-time',
            },
            password: {
                type: 'string',
            },
            username: {
                type: 'string',
            },
            type: {
                type: 'string',
                isRequired: true,
            },
        },
    },
};

},{}],201:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceGetResponse = {
    properties: {
        paas_service: {
            type: 'PaasService',
        },
    },
};

},{}],202:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceIndex = {
    type: 'dictionary',
    contains: {
        type: 'PaasService',
    },
};

},{}],203:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceMetrics = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceMetrics = {
    type: 'all-of',
    contains: [{
            type: 'Metrics',
        }, {
            properties: {
                paas_service_uuid: {
                    type: 'string',
                    format: 'uuid',
                },
                core_usage: {
                    type: 'MetricsValue',
                },
                storage_size: {
                    type: 'MetricsValue',
                },
            },
        }],
};

},{}],204:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceMetricsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceMetricsGetResponse = {
    properties: {
        paas_service_metrics: {
            type: 'PaasServiceMetricsList',
        },
    },
};

},{}],205:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceMetricsList = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceMetricsList = {
    type: 'array',
    contains: {
        type: 'PaasServiceMetrics',
    },
};

},{}],206:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceParameters = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceParameters = {
    properties: {},
};

},{}],207:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceParametersSchema = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceParametersSchema = {
    type: 'dictionary',
    contains: {
        properties: {},
    },
};

},{}],208:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceResourceLimit = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceResourceLimit = {
    properties: {
        resource: {
            type: 'string',
        },
        limit: {
            type: 'number',
        },
    },
};

},{}],209:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceResourceLimits = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceResourceLimits = {
    type: 'array',
    contains: {
        type: 'PaasServiceResourceLimit',
    },
};

},{}],210:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceTemplate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceTemplate = {
    properties: {
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        category: {
            type: 'string',
        },
        flavour: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        release: {
            type: 'string',
        },
        performance_class: {
            type: 'string',
        },
        version_upgrades: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        performance_class_updates: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        patch_updates: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        product_no: {
            type: 'number',
        },
        discount_product_no: {
            type: 'number',
        },
        discount_period: {
            type: 'number',
        },
        resources: {
            properties: {
                memory: {
                    type: 'number',
                },
                connections: {
                    type: 'number',
                },
                cores: {
                    type: 'number',
                },
                storage_type: {
                    type: 'StorageType',
                },
            },
        },
        status: {
            type: 'string',
        },
        parameters_schema: {
            type: 'PaasServiceParametersSchema',
        },
        autoscaling: {
            properties: {
                cores: {
                    properties: {
                        min: {
                            type: 'number',
                        },
                        max: {
                            type: 'number',
                        },
                        product_no: {
                            type: 'number',
                        },
                    },
                },
                storage: {
                    properties: {
                        min: {
                            type: 'number',
                        },
                        max: {
                            type: 'number',
                        },
                        product_no: {
                            type: 'number',
                        },
                    },
                },
            },
        },
    },
};

},{}],211:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceTemplateIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceTemplateIndex = {
    type: 'dictionary',
    contains: {
        type: 'PaasServiceTemplate',
    },
};

},{}],212:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceTemplatesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceTemplatesGetResponse = {
    properties: {
        paas_service_templates: {
            type: 'PaasServiceTemplateIndex',
        },
    },
};

},{}],213:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],214:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServicesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServicesGetResponse = {
    properties: {
        paas_services: {
            type: 'PaasServiceIndex',
        },
    },
};

},{}],215:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServicesUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServicesUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],216:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServicesUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServicesUsages = {
    properties: {
        paas_services: {
            type: 'array',
            contains: {
                type: 'PaasServicesUsage',
            },
        },
    },
};

},{}],217:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServicesinNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServicesinNetwork = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            service_template_uuid: {
                type: 'string',
                format: 'uuid',
            },
            service_template_category: {
                type: 'string',
            },
            listen_ports: {
                type: 'ListenPortsByIpIndex',
            },
        },
    },
};

},{}],218:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PinnedServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PinnedServer = {
    properties: {
        server_uuid: {
            type: 'string',
        },
        ip: {
            type: 'string',
        },
    },
};

},{}],219:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PinnedServerPayload = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PinnedServerPayload = {
    properties: {
        ip: {
            type: 'string',
        },
    },
};

},{}],220:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ProductUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ProductUsage = {
    properties: {
        product_number: {
            type: 'number',
        },
        value: {
            type: 'number',
        },
    },
};

},{}],221:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PublicIpinServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PublicIpinServer = {
    type: 'array',
    contains: {
        type: 'LinkedIpBrief',
    },
};

},{}],222:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Request = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Request = {
    properties: {
        create_time: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        status: {
            type: 'string',
            isRequired: true,
        },
        message: {
            type: 'string',
            isRequired: true,
        },
    },
};

},{}],223:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$RequestGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$RequestGetResponse = {
    type: 'dictionary',
    contains: {
        type: 'Request',
    },
};

},{}],224:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$RocketStoragesUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$RocketStoragesUsages = {
    properties: {
        rocket_storages: {
            type: 'array',
            contains: {
                type: 'StoragesUsage',
            },
        },
    },
};

},{}],225:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$RulesProperties = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$RulesProperties = {
    properties: {
        protocol: {
            type: 'Enum',
            isRequired: true,
        },
        dst_port: {
            properties: {},
        },
        src_port: {
            properties: {},
        },
        src_cidr: {
            type: 'string',
        },
        action: {
            type: 'Enum',
            isRequired: true,
        },
        comment: {
            type: 'string',
        },
        dst_cidr: {
            type: 'string',
        },
        order: {
            type: 'string',
            isRequired: true,
        },
    },
};

},{}],226:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Server = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Server = {
    properties: {
        cores: {
            type: 'number',
        },
        relations: {
            type: 'ServerRelation',
        },
        legacy: {
            type: 'boolean',
        },
        memory: {
            type: 'number',
        },
        console_token: {
            type: 'string',
        },
        usage_in_minutes_memory: {
            type: 'number',
        },
        auto_recovery: {
            type: 'boolean',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        usage_in_minutes_cores: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        availability_zone: {
            type: 'string',
        },
        location_iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        hardware_profile: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        power: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        hardware_profile_config: {
            properties: {
                machinetype: {
                    type: 'Enum',
                },
                storage_device: {
                    type: 'Enum',
                },
                usb_controller: {
                    type: 'Enum',
                },
                nested_virtualization: {
                    type: 'boolean',
                },
                hyperv_extensions: {
                    type: 'boolean',
                },
                network_model: {
                    type: 'Enum',
                },
                serial_interface: {
                    type: 'boolean',
                },
                server_renice: {
                    type: 'boolean',
                },
            },
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
    },
};

},{}],227:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        cores: {
            type: 'number',
            isRequired: true,
        },
        memory: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        status: {
            type: 'string',
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'string',
        },
        hardware_profile: {
            type: 'Enum',
        },
        hardware_profile_config: {
            properties: {
                machinetype: {
                    type: 'Enum',
                },
                storage_device: {
                    type: 'Enum',
                },
                usb_controller: {
                    type: 'Enum',
                },
                nested_virtualization: {
                    type: 'boolean',
                },
                hyperv_extensions: {
                    type: 'boolean',
                },
                network_model: {
                    type: 'Enum',
                },
                serial_interface: {
                    type: 'boolean',
                },
                server_renice: {
                    type: 'boolean',
                },
            },
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
    },
};

},{}],228:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerCreateResponse = {
    properties: {
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        storage_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        ipaddr_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

},{}],229:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerGetResponse = {
    properties: {
        server: {
            type: 'Server',
        },
    },
};

},{}],230:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerIndex = {
    type: 'dictionary',
    contains: {
        type: 'Server',
    },
};

},{}],231:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerMetrics = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerMetrics = {
    type: 'all-of',
    contains: [{
            type: 'Metrics',
        }, {
            properties: {
                server_uuid: {
                    type: 'string',
                    format: 'uuid',
                },
                core_usage: {
                    type: 'MetricsValue',
                },
                storage_read_iops: {
                    type: 'MetricsValue',
                },
                storage_write_iops: {
                    type: 'MetricsValue',
                },
            },
        }],
};

},{}],232:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerMetricsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerMetricsGetResponse = {
    properties: {
        server_metrics: {
            type: 'ServerMetricsList',
        },
    },
};

},{}],233:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerMetricsList = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerMetricsList = {
    type: 'array',
    contains: {
        type: 'ServerMetrics',
    },
};

},{}],234:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerPowerStatus = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerPowerStatus = {
    properties: {
        power: {
            type: 'boolean',
        },
    },
};

},{}],235:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerPowerUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerPowerUpdate = {
    properties: {
        power: {
            type: 'boolean',
        },
    },
};

},{}],236:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerRelation = {
    properties: {
        public_ips: {
            type: 'PublicIpinServer',
        },
        isoimages: {
            type: 'IsoimageinServer',
        },
        storages: {
            type: 'StoragesinServer',
        },
        networks: {
            type: 'NetworkinServer',
        },
    },
};

},{}],237:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        cores: {
            type: 'number',
        },
        memory: {
            type: 'number',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'boolean',
        },
        hardware_profile: {
            type: 'Enum',
        },
        hardware_profile_config: {
            properties: {
                machinetype: {
                    type: 'Enum',
                },
                storage_device: {
                    type: 'Enum',
                },
                usb_controller: {
                    type: 'Enum',
                },
                nested_virtualization: {
                    type: 'boolean',
                },
                hyperv_extensions: {
                    type: 'boolean',
                },
                network_model: {
                    type: 'Enum',
                },
                serial_interface: {
                    type: 'boolean',
                },
                server_renice: {
                    type: 'boolean',
                },
            },
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
    },
};

},{}],238:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerinIp = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerinIp = {
    type: 'array',
    contains: {
        properties: {
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            server_uuid: {
                type: 'string',
            },
            server_name: {
                type: 'string',
            },
        },
    },
};

},{}],239:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerinIsoimage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerinIsoimage = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

},{}],240:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerinNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerinNetwork = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            l3security: {
                type: 'array',
                contains: {
                    type: 'string',
                },
            },
            mac: {
                type: 'string',
            },
            network_uuid: {
                type: 'string',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            ordering: {
                type: 'number',
            },
        },
    },
};

},{}],241:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerinStrorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerinStrorage = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            bus: {
                type: 'number',
            },
            controller: {
                type: 'number',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            lun: {
                type: 'number',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            target: {
                type: 'number',
            },
        },
    },
};

},{}],242:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServersGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServersGetResponse = {
    properties: {
        servers: {
            type: 'ServerIndex',
        },
    },
};

},{}],243:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServersUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServersUsage = {
    properties: {
        cores: {
            type: 'number',
        },
        memory: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        power: {
            type: 'boolean',
        },
        deleted: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],244:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServersUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServersUsages = {
    properties: {
        servers: {
            type: 'array',
            contains: {
                type: 'ServersUsage',
            },
        },
    },
};

},{}],245:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServiceinPaasSecurityZone = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServiceinPaasSecurityZone = {
    type: 'array',
    contains: {
        properties: {
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            listen_ports: {
                type: 'ListenPortsByIpIndex',
            },
            name: {
                type: 'string',
            },
            service_template_uuid: {
                type: 'string',
                format: 'uuid',
            },
            credentials: {
                type: 'PaasServiceCredentials',
            },
            resources: {
                properties: {},
            },
            security_zone_uuid: {
                type: 'string',
                format: 'uuid',
            },
            parameters: {
                properties: {},
            },
        },
    },
};

},{}],246:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServiceinPaasSecurityZones = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServiceinPaasSecurityZones = {
    type: 'array',
    contains: {
        properties: {
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

},{}],247:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Snapshot = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Snapshot = {
    properties: {
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        license_product_no: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        parent_uuid: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],248:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotCreate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],249:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotExportToS3Payload = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotExportToS3Payload = {
    properties: {
        s3auth: {
            properties: {
                access_key: {
                    type: 'string',
                },
                secret_key: {
                    type: 'string',
                },
                host: {
                    type: 'string',
                },
            },
        },
        s3data: {
            properties: {
                bucket: {
                    type: 'string',
                },
                filename: {
                    type: 'string',
                },
                private: {
                    type: 'boolean',
                },
                host: {
                    type: 'string',
                },
            },
        },
    },
};

},{}],250:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotGetResponse = {
    properties: {
        snapshot: {
            type: 'Snapshot',
        },
    },
};

},{}],251:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotIndex = {
    type: 'dictionary',
    contains: {
        type: 'Snapshot',
    },
};

},{}],252:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotSchedule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotSchedule = {
    properties: {
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        keep_snapshots: {
            type: 'number',
            minimum: 1,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        relations: {
            properties: {
                snapshots: {
                    type: 'array',
                    contains: {
                        properties: {
                            create_time: {
                                type: 'string',
                                format: 'date-time',
                            },
                            name: {
                                type: 'string',
                            },
                            object_uuid: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        status: {
            type: 'string',
        },
        storage_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],253:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotScheduleCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotScheduleCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        run_interval: {
            type: 'number',
            isRequired: true,
            minimum: 60,
        },
        keep_snapshots: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
    },
};

},{}],254:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotScheduleGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotScheduleGetResponse = {
    properties: {
        snapshot_schedule: {
            type: 'SnapshotSchedule',
        },
    },
};

},{}],255:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotScheduleIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotScheduleIndex = {
    type: 'dictionary',
    contains: {
        type: 'SnapshotSchedule',
    },
};

},{}],256:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotScheduleUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotScheduleUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        keep_snapshots: {
            type: 'number',
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
    },
};

},{}],257:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotSchedulesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotSchedulesGetResponse = {
    properties: {
        snapshot_schedules: {
            type: 'SnapshotScheduleIndex',
        },
    },
};

},{}],258:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotSchedulesinStorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotSchedulesinStorage = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            next_runtime: {
                type: 'string',
                format: 'date-time',
            },
            keep_snapshots: {
                type: 'number',
            },
            create_time: {
                type: 'string',
            },
            name: {
                type: 'string',
            },
            run_interval: {
                type: 'number',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

},{}],259:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],260:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotsGetResponse = {
    properties: {
        snapshots: {
            type: 'SnapshotIndex',
        },
    },
};

},{}],261:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotsUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotsUsage = {
    properties: {
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        parent_uuid: {
            type: 'string',
        },
        parent_name: {
            type: 'string',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],262:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotsUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotsUsages = {
    properties: {
        snapshots: {
            type: 'array',
            contains: {
                type: 'SnapshotsUsage',
            },
        },
    },
};

},{}],263:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Sshkey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Sshkey = {
    properties: {
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        user_uuid: {
            type: 'string',
            format: 'uuid',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        sshkey: {
            type: 'string',
        },
    },
};

},{}],264:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeyCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeyCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        sshkey: {
            type: 'string',
        },
    },
};

},{}],265:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeyGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeyGetResponse = {
    properties: {
        sshkey: {
            type: 'Sshkey',
        },
    },
};

},{}],266:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeyIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeyIndex = {
    type: 'dictionary',
    contains: {
        type: 'Sshkey',
    },
};

},{}],267:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeyUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeyUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        sshkey: {
            type: 'string',
        },
    },
};

},{}],268:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeysGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeysGetResponse = {
    properties: {
        sshkeys: {
            type: 'SshkeyIndex',
        },
    },
};

},{}],269:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Storage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Storage = {
    properties: {
        parent_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        backups: {
            type: 'array',
            contains: {
                properties: {
                    create_time: {
                        type: 'string',
                        format: 'date-time',
                    },
                    last_used_template: {
                        type: 'string',
                    },
                    object_capacity: {
                        type: 'number',
                    },
                    object_name: {
                        type: 'string',
                    },
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    schedules_storages_backups_name: {
                        type: 'string',
                    },
                    schedules_storages_backups_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    status: {
                        type: 'string',
                    },
                    storage_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                },
            },
        },
        snapshots: {
            type: 'array',
            contains: {
                properties: {
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    object_name: {
                        type: 'string',
                    },
                    object_capacity: {
                        type: 'number',
                    },
                    schedules_snapshot_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    schedules_snapshot_name: {
                        type: 'string',
                    },
                    last_used_template: {
                        type: 'string',
                    },
                    create_time: {
                        type: 'string',
                        format: 'date-time',
                    },
                    storage_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                },
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        relations: {
            type: 'StoragesRelation',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        storage_type: {
            type: 'Enum',
        },
        storage_variant: {
            type: 'StorageVariant',
        },
        license_product_no: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        last_used_template: {
            type: 'string',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],270:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackup = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackup = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        backup_location_uuid: {
            type: 'string',
        },
    },
};

},{}],271:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupIndex = {
    type: 'dictionary',
    contains: {
        type: 'StorageBackup',
    },
};

},{}],272:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupSchedule = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupSchedule = {
    properties: {
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        keep_backups: {
            type: 'number',
            minimum: 1,
        },
        name: {
            type: 'string',
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backup_location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backup_location_name: {
            type: 'string',
        },
        relations: {
            properties: {
                storage_backups: {
                    type: 'array',
                    contains: {
                        properties: {
                            create_time: {
                                type: 'string',
                                format: 'date-time',
                            },
                            name: {
                                type: 'string',
                            },
                            object_uuid: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        status: {
            type: 'string',
        },
        storage_uuid: {
            type: 'string',
            format: 'uuid',
        },
        active: {
            type: 'boolean',
        },
    },
};

},{}],273:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        run_interval: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
        keep_backups: {
            type: 'number',
            isRequired: true,
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        active: {
            type: 'boolean',
            isRequired: true,
        },
        backup_location_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

},{}],274:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleGetResponse = {
    properties: {
        schedule_storage_backup: {
            type: 'StorageBackupSchedule',
        },
    },
};

},{}],275:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleIndex = {
    type: 'dictionary',
    contains: {
        type: 'StorageBackupSchedule',
    },
};

},{}],276:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        keep_backups: {
            type: 'number',
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
        active: {
            type: 'boolean',
        },
    },
};

},{}],277:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupSchedulesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupSchedulesGetResponse = {
    properties: {
        schedule_storage_backups: {
            type: 'StorageBackupScheduleIndex',
        },
    },
};

},{}],278:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupUsages = {
    properties: {
        storage_backups: {
            type: 'array',
            contains: {
                type: 'StorageBackupsUsage',
            },
        },
    },
};

},{}],279:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupsGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupsGetResponse = {
    properties: {
        backups: {
            type: 'StorageBackupIndex',
        },
    },
};

},{}],280:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupsUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupsUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],281:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageClone = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageClone = {
    properties: {
        password: {
            type: 'string',
        },
        password_type: {
            type: 'Enum',
        },
        sshkeys: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],282:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        capacity: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        storage_type: {
            type: 'StorageType',
        },
        storage_variant: {
            type: 'StorageVariant',
        },
        template: {
            properties: {},
        },
    },
};

},{}],283:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreateTemplatePassword = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreateTemplatePassword = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        password_type: {
            type: 'Enum',
            isRequired: true,
        },
    },
};

},{}],284:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreateTemplateSshkey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreateTemplateSshkey = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        sshkeys: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
    },
};

},{}],285:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageGetResponse = {
    properties: {
        storage: {
            type: 'Storage',
        },
    },
};

},{}],286:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageImportFromBackup = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageImportFromBackup = {
    properties: {
        backup: {
            properties: {
                name: {
                    type: 'string',
                },
                backup_uuid: {
                    type: 'string',
                    isRequired: true,
                    format: 'uuid',
                },
            },
            isRequired: true,
        },
    },
};

},{}],287:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageImportFromS3Object = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageImportFromS3Object = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        url: {
            type: 'string',
            isRequired: true,
        },
        extension: {
            type: 'Enum',
            isRequired: true,
        },
    },
};

},{}],288:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageIndex = {
    type: 'dictionary',
    contains: {
        type: 'Storage',
    },
};

},{}],289:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageRollback = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageRollback = {
    properties: {
        rollback: {
            type: 'boolean',
        },
    },
};

},{}],290:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageTemplateCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageTemplateCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        snapshot_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],291:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageTemplatesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageTemplatesGetResponse = {
    properties: {
        templates: {
            type: 'TemplateIndex',
        },
    },
};

},{}],292:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageType = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageType = {
    type: 'Enum',
};

},{}],293:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        capacity: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        storage_type: {
            type: 'Enum',
        },
    },
};

},{}],294:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageVariant = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageVariant = {
    type: 'Enum',
};

},{}],295:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StoragesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StoragesGetResponse = {
    properties: {
        storages: {
            type: 'StorageIndex',
        },
    },
};

},{}],296:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StoragesRelation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StoragesRelation = {
    properties: {
        servers: {
            type: 'ServerinStrorage',
        },
        snapshot_schedules: {
            type: 'SnapshotSchedulesinStorage',
        },
        backup_schedules: {
            type: 'BackupSchedulesinStorage',
        },
    },
};

},{}],297:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StoragesUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StoragesUsage = {
    properties: {
        parent_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        status: {
            type: 'string',
        },
        storage_type: {
            type: 'Enum',
        },
        last_used_template: {
            type: 'string',
        },
        capacity: {
            type: 'number',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],298:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StoragesinServer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StoragesinServer = {
    type: 'array',
    contains: {
        type: 'LinkedStorage',
    },
};

},{}],299:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TaskEventLabel = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TaskEventLabel = {
    properties: {
        type: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        unique: {
            type: 'boolean',
        },
        maxlength: {
            type: 'number',
        },
        response_code: {
            type: 'number',
        },
        schema: {
            properties: {
                type: {
                    type: 'string',
                },
                description: {
                    type: 'string',
                },
                maxlength: {
                    type: 'number',
                },
            },
        },
    },
};

},{}],300:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TaskEventName = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TaskEventName = {
    properties: {
        type: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        empty: {
            type: 'string',
        },
        maxlength: {
            type: 'number',
        },
        minlength: {
            type: 'number',
        },
    },
};

},{}],301:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TaskEvents = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TaskEvents = {
    properties: {
        schedules: {
            properties: {
                schedule_snapshot_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        run_interval: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                schedule_snapshot_perform: {
                    properties: {
                        type: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                    },
                },
                schedule_snapshot_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        run_interval: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                schedule_snapshot_remove: {
                    properties: {
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        ipaddr: {
            properties: {
                ipaddr_update: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        failover: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
                ipaddr_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        family: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'number',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        failover: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        loadbalancer: {
            properties: {
                loadbalancer_update: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        algorithm: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        backend_servers: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: 'array',
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: 'number',
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        min: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        nullable: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                certificate_uuid: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        description: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        allowed: {
                                                            type: 'array',
                                                            contains: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                loadbalancer_add: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        algorithm: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        backend_servers: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: 'array',
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: 'number',
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        min: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        nullable: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                certificate_uuid: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        description: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        allowed: {
                                                            type: 'array',
                                                            contains: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                loadbalancer_remove: {
                    properties: {
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        certificate: {
            properties: {
                certificate_add: {
                    properties: {},
                },
                certificate_remove: {
                    properties: {
                        certificate_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        paas: {
            properties: {
                paas_service_remove: {
                    properties: {
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_remove: {
                    properties: {
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        mpls_mgmt_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        mpls_cust_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_service_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        credentials: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        resource_limit: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: 'array',
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: 'array',
                                                                        contains: {
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                    max: {
                                                                        type: 'number',
                                                                    },
                                                                    min: {
                                                                        type: 'number',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        parameters: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_service_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        resource_limit: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: 'array',
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: 'array',
                                                                        contains: {
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                    max: {
                                                                        type: 'number',
                                                                    },
                                                                    min: {
                                                                        type: 'number',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        marketplace_template: {
            properties: {
                marketplace_template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_import: {
                    properties: {
                        unique_hash: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
        firewall: {
            properties: {
                firewall_remove: {
                    properties: {
                        tfirewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                firewall_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        rules: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                firewall_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        rules: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        isoimage: {
            properties: {
                isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                isoimage_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        source_url: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                isoimage_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        snapshot: {
            properties: {
                snapshot_remove: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                snapshot_add: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                snapshot_export_tos3: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        s3auth: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        secret_key: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        access_key: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        s3data: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        bucket: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        filename: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        private: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                snapshot_rollback: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        rollback: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                snapshot_update: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
            },
        },
        sshkey: {
            properties: {
                sshkey_remove: {
                    properties: {
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                sshkey_add: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                maxlength: {
                                    type: 'number',
                                },
                                minlength: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                sshkey_update: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                maxlength: {
                                    type: 'number',
                                },
                                minlength: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
            },
        },
        storage: {
            properties: {
                storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                storage_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        template: {
                            properties: {
                                schema: {
                                    properties: {
                                        password_type: {
                                            properties: {
                                                allowed: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                                dependencies: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        hostname: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        sshkeys: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                unique: {
                                                    type: 'boolean',
                                                },
                                                schema: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        private: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        template_uuid: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        password: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                empty: {
                                                    type: 'boolean',
                                                },
                                                dependencies: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        storage_type: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
                isoimage_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        server: {
            properties: {
                server_relation_isoimage_add: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_isoimage_update: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_ipaddr_add: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l3security: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                unique: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        firewall: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        ordering: {
                            properties: {
                                max: {
                                    type: 'number',
                                },
                                min: {
                                    type: 'number',
                                },
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l3security: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                unique: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        firewall: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        ordering: {
                            properties: {
                                max: {
                                    type: 'number',
                                },
                                min: {
                                    type: 'number',
                                },
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_add: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_update: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_add: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        availability_zone: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        cores: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        memory: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        legacy: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        availability_zone: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        cores: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        memory: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_remove: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_power_shutdown: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_power_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        autotriger: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        power: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
            },
        },
        template: {
            properties: {
                template_add: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        snapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                template_update: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        network: {
            properties: {
                network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l2security: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l2security: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

},{}],302:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Template = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Template = {
    properties: {
        status: {
            type: 'string',
        },
        published: {
            type: 'boolean',
        },
        ostype: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        version: {
            type: 'string',
        },
        location_iata: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        private: {
            type: 'boolean',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        license_product_no: {
            type: 'number',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        usage_in_minutes: {
            type: 'number',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        distro: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};

},{}],303:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplateGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplateGetResponse = {
    properties: {
        template: {
            type: 'Template',
        },
    },
};

},{}],304:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplateIndex = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplateIndex = {
    type: 'dictionary',
    contains: {
        type: 'Template',
    },
};

},{}],305:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplateUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplateUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        published: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

},{}],306:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplatesGetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplatesGetResponse = {
    properties: {
        templates: {
            type: 'TemplateIndex',
        },
    },
};

},{}],307:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplatesUsage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplatesUsage = {
    properties: {
        status: {
            type: 'string',
        },
        ostype: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        private: {
            type: 'boolean',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        license_product_no: {
            type: 'number',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        distro: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};

},{}],308:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TemplatesUsages = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$TemplatesUsages = {
    properties: {
        templates: {
            type: 'array',
            contains: {
                type: 'TemplatesUsage',
            },
        },
    },
};

},{}],309:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UsageGetResponseOverview = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$UsageGetResponseOverview = {
    properties: {
        products: {
            properties: {
                servers: {
                    type: 'ObjectUsageOverview',
                },
                rocket_storages: {
                    type: 'ObjectUsageOverview',
                },
                distributed_storages: {
                    type: 'ObjectUsageOverview',
                },
                storage_backups: {
                    type: 'ObjectUsageOverview',
                },
                snapshots: {
                    type: 'ObjectUsageOverview',
                },
                templates: {
                    type: 'ObjectUsageOverview',
                },
                iso_images: {
                    type: 'ObjectUsageOverview',
                },
                ip_addresses: {
                    type: 'ObjectUsageOverview',
                },
                load_balancers: {
                    type: 'ObjectUsageOverview',
                },
                paas_services: {
                    type: 'ObjectUsageOverview',
                },
            },
        },
    },
};

},{}],310:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UsagePerInterval = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$UsagePerInterval = {
    type: 'array',
    contains: {
        properties: {
            interval_start: {
                type: 'string',
                format: 'datetime',
            },
            interval_end: {
                type: 'string',
                format: 'datetime',
            },
            accumulated_usage: {
                type: 'array',
                contains: {
                    type: 'ProductUsage',
                },
            },
        },
    },
};

},{}],311:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$VlansinNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$VlansinNetwork = {
    type: 'array',
    contains: {
        properties: {},
    },
};

},{}],312:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.APIClass = exports.GSError = void 0;
if (typeof (require) !== 'undefined') {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
}
class GSError extends Error {
    constructor(message, result) {
        super();
        this.success = false;
        this.name = 'GridscaleError';
        // try to assemble message with more details from result
        if (result.response
            && result.response.request
            && result.response.request.method
            && typeof (result.response.status) !== 'undefined' && result.response.request.url) {
            this.message = 'Error : ' + result.response.request.method
                + ' | ' + result.response.status
                + ' | ' + result.response.request.url.split('?')[0];
        }
        else {
            this.message = message || 'Default Message';
        }
        this.result = result;
        this.response = result.response || undefined;
    }
}
exports.GSError = GSError;
class APIClass {
    constructor() {
        // Local Settings
        this.settings = {
            endpoint: 'https://api.gridscale.io',
            endpointOverrides: {},
            token: '',
            userId: '',
            limit: 25,
            watchdelay: 1000,
            apiClient: 'gsclient-js'
        };
        /**
         * Update local Request Options
         *
         * @param _option
         */
        this.setOptions = (_option) => {
            // Assign new Values
            this.settings = Object.assign(Object.assign({}, this.settings), _option);
        };
        this.callbacks = [];
        /**
         * Adds a new logger for error logging
         * @param _callback
         */
        this.addLogger = (_callback) => {
            this.callbacks.push(_callback);
        };
        this.log = (_logData) => {
            for (var i = 0; i < this.callbacks.length; i++) {
                this.callbacks[i](_logData);
            }
        };
    }
    /**
     * Store api client in current session
     * @param _client  String
     */
    storeClient(_client) {
        this.settings.apiClient = _client;
    }
    /**
     * Store Token for Current Session
     * @param _token Secret Token
     */
    storeToken(_token, _userId) {
        // Store Token
        this.settings.token = _token;
        this.settings.userId = _userId;
    }
    /**
     * Start the API Request
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {Promise}
     */
    request(_path = '', _options, _callback) {
        const options = Object.assign({}, _options);
        // check if we should use another endpoint for this path (mocking)
        var endpoint = this.settings.endpoint;
        if (this.settings.endpointOverrides && typeof (this.settings.endpointOverrides) === 'object') {
            for (let _overridePath in this.settings.endpointOverrides) {
                if (this.settings.endpointOverrides.hasOwnProperty(_overridePath)) {
                    const _overrideEndpoint = this.settings.endpointOverrides[_overridePath];
                    if (_overridePath.match(/^\/(.*)\/$/) && _path.split('?')[0].match(new RegExp(RegExp.$1))) {
                        endpoint = _overrideEndpoint;
                        break;
                    }
                    else if (_path.split('?')[0] === _overridePath) {
                        endpoint = _overrideEndpoint;
                        break;
                    }
                }
            }
        }
        // Build Options
        const url = _path.search('https://') === 0 ? _path : endpoint + _path; // on Links there is already
        options.headers = Object.assign(Object.assign(Object.assign({}, options.headers || {}), { 'X-Auth-UserId': this.settings.userId, 'X-Auth-Token': this.settings.token, 'X-Api-Client': this.settings.apiClient }), this.settings.additionalHeaders || {});
        // return results as object or text
        const getResult = (_response, _rejectOnJsonFailure = true) => {
            return new Promise((_resolve, _reject) => {
                if (_response.status !== 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type').indexOf('application/json') === 0) {
                    _response.json()
                        .then(json => {
                        _resolve(json);
                    })
                        .catch(() => {
                        if (_rejectOnJsonFailure) {
                            _reject();
                        }
                        else {
                            // try text
                            _response.text().then(text => _resolve(text))
                                .catch(e => _resolve(null));
                        }
                    });
                }
                else {
                    _response.text().then(text => _resolve(text))
                        .catch(e => _resolve(null));
                }
            });
        };
        // Setup DEF
        const def = new Promise((_resolve, _reject) => {
            // Fire Request
            const onSuccess = (_response, _request, _requestInit) => {
                getResult(_response.clone()).then((_result) => {
                    const result = {
                        success: true,
                        result: _result,
                        response: _response.clone(),
                        id: null,
                        requestInit: _requestInit
                    };
                    // Check for Links and generate them as Functions
                    if (_result && _result._links) {
                        const links = {};
                        for (let linkname in _result._links) {
                            if (_result._links.hasOwnProperty(linkname)) {
                                links[linkname] = this.link(_result._links[linkname]);
                            }
                        }
                        result.links = links;
                    }
                    if (_result && _result._meta) {
                        result.meta = _result._meta;
                    }
                    /**
                     * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                     */
                    if (options['method'] === 'POST' || options['method'] === 'PATCH' || options['method'] === 'DELETE') {
                        if (result.response.headers.has('x-request-id')) {
                            result.watch = () => this.watchRequest(result.response.headers.get('x-request-id'));
                        }
                    }
                    _resolve(result);
                    if (_callback !== undefined) {
                        setTimeout(() => _callback(_response.clone(), result));
                    }
                })
                    .catch(() => {
                    // tslint:disable-next-line: no-use-before-declare
                    onFail(_response, _request, _requestInit, 'json');
                });
            };
            let errorCounter = 0;
            const onFail = (_response, _request, _requestInit, _failType = 'request') => {
                getResult(_response.clone(), false).then((_result) => {
                    const result = {
                        success: false,
                        result: _result,
                        response: Object.assign(Object.assign({}, _response.clone()), { request: _request }),
                        links: {},
                        watch: null,
                        id: 'apierror_' + (new Date()).getTime() + '_' + errorCounter,
                        requestInit: _requestInit,
                        failureType: _failType
                    };
                    ++errorCounter;
                    this.log({
                        result: result,
                        response: _response.clone(),
                        id: result.id,
                        requestInit: result.requestInit
                    });
                    _reject(new GSError('Request Error', result));
                    if (_callback !== undefined) {
                        setTimeout(() => _callback(_response.clone(), result));
                    }
                });
            };
            const request = new Request(url, options);
            const promise = (this.settings.fetch || fetch)(request);
            promise
                .then((_response) => {
                if (_response.ok) {
                    // The promise does not reject on HTTP errors
                    onSuccess(_response, request, options);
                }
                else {
                    onFail(_response, request, options);
                }
            })
                .catch((_response) => {
                _reject(new GSError('Network failure', _response));
            });
            // Return promise
            return promise;
        });
        // Catch all Errors and
        // Return DEF
        return def;
    }
    /**
     * Build Option URL to expand URL
     * @param _options
     * @returns {string}
     */
    buildRequestURL(_options) {
        // Push Valued
        const url = [];
        // Add Options to URL
        for (let key in _options) {
            if (_options.hasOwnProperty(key)) {
                if (_options[key] !== undefined) {
                    if (typeof _options[key] === 'object' && typeof _options[key].length === 'number') {
                        if (_options[key].length > 0) {
                            url.push(key + '=' + _options[key].join(','));
                        }
                    }
                    else {
                        url.push(key + '=' + _options[key]);
                    }
                }
            }
        }
        ;
        return url.length > 0 ? ('?' + url.join('&')) : '';
    }
    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
    get(_path, _options, _callback) {
        if (typeof _options === 'object' && _options !== null) {
            _path += this.buildRequestURL(_options);
        }
        // If No Options but Callback is given
        if (_callback === undefined && typeof _options === 'function') {
            _callback = _options;
        }
        return this.request(_path, { method: 'GET' }, _callback);
    }
    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    remove(_path, _callback) {
        return this.request(_path, { method: 'DELETE' }, _callback);
    }
    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    post(_path, _attributes, _callback) {
        return this.request(_path, { method: 'POST', body: JSON.stringify(_attributes), headers: { 'Content-Type': 'application/json' } }, _callback);
    }
    /**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    patch(_path, _attributes, _callback) {
        return this.request(_path, { method: 'PATCH', body: JSON.stringify(_attributes), headers: { 'Content-Type': 'application/json' } }, _callback);
    }
    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {Function}
     */
    link(_link) {
        /**
         * generate Function that has an Optional Callback
         */
        return (_callback) => {
            return this.request(_link.href, { method: 'GET' }, _callback);
        };
    }
    /**
     * Start Pooling on Request Endpoint
     *
     *
     * @param _requestid
     * @param _callback
     * @returns {Promise}
     */
    requestpooling(_requestid, _callback) {
        return this.request('/requests/' + _requestid, { method: 'GET' }, _callback);
    }
    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    buildAndStartRequestCallback(_requestid, _resolve, _reject) {
        /**
         * Start new Request
         */
        this.requestpooling(_requestid).then((_result) => {
            // Check Request Status to Decide if we start again
            if (_result.result[_requestid].status === 'pending') {
                setTimeout(() => {
                    this.buildAndStartRequestCallback(_requestid, _resolve, _reject);
                }, this.settings.watchdelay);
            }
            else if (_result.response.status === 200) {
                // Job done
                _resolve(_result);
            }
            else {
                // IF
                _reject(_result);
            }
        }, (_result) => _reject(_result));
    }
    /**
     * Watch a Single Request until it is ready or failed
     *
     * @param _requestid
     * @param _callback
     */
    watchRequest(_requestid) {
        return new Promise((_resolve, _reject) => {
            this.buildAndStartRequestCallback(_requestid, _resolve, _reject);
        });
    }
}
exports.APIClass = APIClass;
exports.api = new APIClass();

},{"es6-promise":329,"isomorphic-fetch":330}],313:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const api_1 = require("./api");
const Server_1 = require("./Objects/Server");
const Storage_1 = require("./Objects/Storage");
const Network_1 = require("./Objects/Network");
const IP_1 = require("./Objects/IP");
const ISOImage_1 = require("./Objects/ISOImage");
const SSHKey_1 = require("./Objects/SSHKey");
const Template_1 = require("./Objects/Template");
const Location_1 = require("./Objects/Location");
const ObjectStorage_1 = require("./Objects/ObjectStorage");
const Label_1 = require("./Objects/Label");
const Loadbalancer_1 = require("./Objects/Loadbalancer");
const Events_1 = require("./Objects/Events");
const Firewall_1 = require("./Objects/Firewall");
const PAAS_1 = require("./Objects/PAAS");
const Deleted_1 = require("./Objects/Deleted");
const PaasServiceTemplate_1 = require("./Objects/PaasServiceTemplate");
const PaasService_1 = require("./Objects/PaasService");
const PaasSecurityZone_1 = require("./Objects/PaasSecurityZone");
const PaasServiceMetrics_1 = require("./Objects/PaasServiceMetrics");
const MarketplaceApplication_1 = require("./Objects/MarketplaceApplication");
const MarketplaceApplication_2 = require("./Objects/ServiceMarketplace/MarketplaceApplication");
const Certificate_1 = require("./Objects/Certificate");
const BackupLocation_1 = require("./Objects/BackupLocation");
const MarketplacePlan_1 = require("./Objects/ServiceMarketplace/MarketplacePlan");
const MarketplacePlanSettings_1 = require("./Objects/ServiceMarketplace/MarketplacePlanSettings");
const MarketplaceApplicationInstance_1 = require("./Objects/ServiceMarketplace/MarketplaceApplicationInstance");
const MarketplaceVersion_1 = require("./Objects/ServiceMarketplace/MarketplaceVersion");
const GPU_1 = require("./Objects/GPU");
/**
 * generate Client Class for all Connections
 * test
 */
class GridscaleClient {
    /**
     * Init Client with Default Values
     *
     *
     * @param _token Security Token
     * @param _userId UUID of User
     * @param _options
     * @param _isolated (if true, use isolated api which can be used alongside other instances. Default behavior is shared settings/tokens between the client instances)
     */
    constructor(_token, _userId, _options = {}, _isolated = false) {
        if (_isolated) {
            this.myapi = new api_1.APIClass();
        }
        // Store Security Tokens
        this.api.storeToken(_token, _userId);
        // Store advanced Options
        this.api.setOptions(_options);
        // Call Subtypes
        this.Server = new Server_1.Server(this.api);
        this.Storage = new Storage_1.Storage(this.api);
        this.Network = new Network_1.Network(this.api);
        this.IP = new IP_1.IP(this.api);
        this.ISOImage = new ISOImage_1.ISOImage(this.api);
        this.SSHKey = new SSHKey_1.SSHKey(this.api);
        this.Template = new Template_1.Template(this.api);
        this.Location = new Location_1.Location(this.api);
        this.ObjectStorage = new ObjectStorage_1.ObjectStorage(this.api);
        this.Label = new Label_1.Label(this.api);
        this.Loadbalancer = new Loadbalancer_1.Loadbalancer(this.api);
        this.Events = new Events_1.Events(this.api);
        this.Firewall = new Firewall_1.Firewall(this.api);
        this.PAAS = new PAAS_1.PAAS(this.api);
        this.PaasServiceTemplate = new PaasServiceTemplate_1.PaasServiceTemplate(this.api);
        this.PaasService = new PaasService_1.PaasService(this.api);
        this.PaasSecurityZone = new PaasSecurityZone_1.PaasSecurityZone(this.api);
        this.Deleted = new Deleted_1.Deleted(this.api);
        this.MarketplaceApplication = new MarketplaceApplication_1.MarketplaceApplication(this.api);
        this.ServiceMarketplaceApplication = new MarketplaceApplication_2.MarketplaceApplication(this.api);
        this.ServiceMarketplaceApplicationInstance = new MarketplaceApplicationInstance_1.MarketplaceApplicationInstance(this.api);
        this.ServiceMarketplacePlan = new MarketplacePlan_1.MarketplacePlan(this.api);
        this.ServiceMarketplacePlanSettings = new MarketplacePlanSettings_1.MarketplacePlanSettings(this.api);
        this.ServiceMarketplaceVersion = new MarketplaceVersion_1.MarketplaceVersion(this.api);
        this.Certificate = new Certificate_1.Certificate(this.api);
        this.BackupLocation = new BackupLocation_1.BackupLocation(this.api);
        this.GPU = new GPU_1.GPU(this.api);
        this.watchRequest = this.api.watchRequest.bind(this.api);
    }
    /**
     * Set the identifier of the client (used in X-Api-Client Header)
     * @param _client
     */
    setApiClient(_client) {
        this.api.storeClient(_client);
    }
    /**
     * Set a new Token and User-UUID
     * @param _token
     * @param _userId
     */
    setToken(_token, _userUUID) {
        this.api.storeToken(_token, _userUUID);
    }
    /**
     * Set the HTTP endpoint of the API
     * @param _endpoint
     */
    setEndpoint(_endpoint) {
        this.api.setOptions({ endpoint: _endpoint });
    }
    /**
     * Inject a custom fetch method, otherwise the API will decide if to use the browser's fetch method or a polyfill
     * @param _fetch
     */
    setFetch(_fetch) {
        this.api.setOptions({ fetch: fetch });
    }
    /**
     * set addiotional headers
     */
    setAdditionalHeaders(additionalHeaders) {
        this.api.setOptions({ additionalHeaders });
    }
    /**
     * Add an additional logger callback, called whenever an error is happening
     * @param _callback
     */
    addLogger(_callback) {
        this.api.addLogger(_callback);
    }
    /**
     * Calls the Validate Token Endpoint of the API
     * @returns HTTP Promise
     */
    validateToken() {
        return this.api.get('/validate_token');
    }
    /**
     * Get the paas service metrics API which is a special one as the service-uuid is required early in the URL
     * @param _serviceUUID
     */
    PaasServiceMetrics(_serviceUUID) {
        return new PaasServiceMetrics_1.PaasServiceMetrics(this.api, _serviceUUID);
    }
    /**
     * Stringifies all non string-values of a HTTP Response (e.g. headers)
     * @param object
     * @deprecated
     */
    stringifyResponseRequest(object) {
        // tslint:disable-next-line: no-any
        const tmp = {};
        for (let _key in object) {
            if (object.hasOwnProperty(_key)) {
                const _val = object[_key];
                if (_val instanceof Headers) {
                    tmp[_key] = {};
                    _val.forEach((_h, _k) => {
                        tmp[_key][_k] = _h;
                    });
                }
                else if (_val instanceof Request) {
                    tmp[_key] = this.stringifyResponseRequest(_val);
                }
                else if (['string', 'number', 'object', 'boolean'].indexOf(typeof (_val)) >= 0) {
                    tmp[_key] = _val;
                }
            }
        }
        ;
        return tmp;
    }
    get api() {
        return this.myapi || api_1.api;
    }
}
exports.Client = GridscaleClient;

},{"./Objects/BackupLocation":2,"./Objects/Certificate":3,"./Objects/Deleted":4,"./Objects/Events":5,"./Objects/Firewall":6,"./Objects/GPU":7,"./Objects/IP":9,"./Objects/ISOImage":10,"./Objects/Label":11,"./Objects/Loadbalancer":12,"./Objects/Location":13,"./Objects/MarketplaceApplication":14,"./Objects/Network":15,"./Objects/ObjectStorage":16,"./Objects/PAAS":17,"./Objects/PaasSecurityZone":18,"./Objects/PaasService":19,"./Objects/PaasServiceMetrics":20,"./Objects/PaasServiceTemplate":21,"./Objects/SSHKey":22,"./Objects/Server":23,"./Objects/ServiceMarketplace/MarketplaceApplication":24,"./Objects/ServiceMarketplace/MarketplaceApplicationInstance":25,"./Objects/ServiceMarketplace/MarketplacePlan":26,"./Objects/ServiceMarketplace/MarketplacePlanSettings":27,"./Objects/ServiceMarketplace/MarketplaceVersion":28,"./Objects/Storage":29,"./Objects/Template":30,"./api":312}],314:[function(require,module,exports){
"use strict";
/*************************************************************************************************************************
 * this file contains custom models, not yet included in the official gridscale api spec and therefore not auto generated
 *************************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });

},{}],315:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridscale = exports.GSError = void 0;
/**
 * Export all publicly accessible modules
 */
const gridscale = require("./client");
exports.gridscale = gridscale;
var api_1 = require("./api");
Object.defineProperty(exports, "GSError", { enumerable: true, get: function () { return api_1.GSError; } });
__exportStar(require("./custom.models"), exports);
__exportStar(require("./Specs"), exports);

},{"./Specs":31,"./api":312,"./client":313,"./custom.models":314}],316:[function(require,module,exports){

},{}],317:[function(require,module,exports){
/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = require('util');
var ansiStyles = colors.styles = require('./styles');
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = require('./system/supports-colors').supportsColor;

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = require('./custom/trap');
colors.zalgo = require('./custom/zalgo');

// maps
colors.maps = {};
colors.maps.america = require('./maps/america')(colors);
colors.maps.zebra = require('./maps/zebra')(colors);
colors.maps.rainbow = require('./maps/rainbow')(colors);
colors.maps.random = require('./maps/random')(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());

},{"./custom/trap":318,"./custom/zalgo":319,"./maps/america":322,"./maps/rainbow":323,"./maps/random":324,"./maps/zebra":325,"./styles":326,"./system/supports-colors":328,"util":335}],318:[function(require,module,exports){
module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};

},{}],319:[function(require,module,exports){
// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};


},{}],320:[function(require,module,exports){
var colors = require('./colors');

module['exports'] = function() {
  //
  // Extends prototype of native string object to allow for "foo".red syntax
  //
  var addProperty = function(color, func) {
    String.prototype.__defineGetter__(color, func);
  };

  addProperty('strip', function() {
    return colors.strip(this);
  });

  addProperty('stripColors', function() {
    return colors.strip(this);
  });

  addProperty('trap', function() {
    return colors.trap(this);
  });

  addProperty('zalgo', function() {
    return colors.zalgo(this);
  });

  addProperty('zebra', function() {
    return colors.zebra(this);
  });

  addProperty('rainbow', function() {
    return colors.rainbow(this);
  });

  addProperty('random', function() {
    return colors.random(this);
  });

  addProperty('america', function() {
    return colors.america(this);
  });

  //
  // Iterate through all default styles and colors
  //
  var x = Object.keys(colors.styles);
  x.forEach(function(style) {
    addProperty(style, function() {
      return colors.stylize(this, style);
    });
  });

  function applyTheme(theme) {
    //
    // Remark: This is a list of methods that exist
    // on String that you should not overwrite.
    //
    var stringPrototypeBlacklist = [
      '__defineGetter__', '__defineSetter__', '__lookupGetter__',
      '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty',
      'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString',
      'valueOf', 'charCodeAt', 'indexOf', 'lastIndexOf', 'length',
      'localeCompare', 'match', 'repeat', 'replace', 'search', 'slice',
      'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase',
      'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight',
    ];

    Object.keys(theme).forEach(function(prop) {
      if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
        console.log('warn: '.red + ('String.prototype' + prop).magenta +
          ' is probably something you don\'t want to override.  ' +
          'Ignoring style name');
      } else {
        if (typeof(theme[prop]) === 'string') {
          colors[prop] = colors[theme[prop]];
          addProperty(prop, function() {
            return colors[prop](this);
          });
        } else {
          var themePropApplicator = function(str) {
            var ret = str || this;
            for (var t = 0; t < theme[prop].length; t++) {
              ret = colors[theme[prop][t]](ret);
            }
            return ret;
          };
          addProperty(prop, themePropApplicator);
          colors[prop] = function(str) {
            return themePropApplicator(str);
          };
        }
      }
    });
  }

  colors.setTheme = function(theme) {
    if (typeof theme === 'string') {
      console.log('colors.setTheme now only accepts an object, not a string. ' +
        'If you are trying to set a theme from a file, it is now your (the ' +
        'caller\'s) responsibility to require the file.  The old syntax ' +
        'looked like colors.setTheme(__dirname + ' +
        '\'/../themes/generic-logging.js\'); The new syntax looks like '+
        'colors.setTheme(require(__dirname + ' +
        '\'/../themes/generic-logging.js\'));');
      return;
    } else {
      applyTheme(theme);
    }
  };
};

},{"./colors":317}],321:[function(require,module,exports){
var colors = require('./colors');
module['exports'] = colors;

// Remark: By default, colors will add style properties to String.prototype.
//
// If you don't wish to extend String.prototype, you can do this instead and
// native String will not be touched:
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
require('./extendStringPrototype')();

},{"./colors":317,"./extendStringPrototype":320}],322:[function(require,module,exports){
module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};

},{}],323:[function(require,module,exports){
module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};


},{}],324:[function(require,module,exports){
module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};

},{}],325:[function(require,module,exports){
module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};

},{}],326:[function(require,module,exports){
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});

},{}],327:[function(require,module,exports){
(function (process){(function (){
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

}).call(this)}).call(this,require('_process'))
},{"_process":332}],328:[function(require,module,exports){
(function (process){(function (){
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

'use strict';

var os = require('os');
var hasFlag = require('./has-flag.js');

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};

}).call(this)}).call(this,require('_process'))
},{"./has-flag.js":327,"_process":332,"os":331}],329:[function(require,module,exports){
(function (process,global){(function (){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));





}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":332}],330:[function(require,module,exports){
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":336}],331:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],332:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],333:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],334:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],335:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":334,"_process":332,"inherits":333}],336:[function(require,module,exports){
(function (global){(function (){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  /* eslint-disable no-prototype-builtins */
  var g =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    // eslint-disable-next-line no-undef
    (typeof global !== 'undefined' && global) ||
    {};

  var support = {
    searchParams: 'URLSearchParams' in g,
    iterable: 'Symbol' in g && 'iterator' in Symbol,
    blob:
      'FileReader' in g &&
      'Blob' in g &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in g,
    arrayBuffer: 'ArrayBuffer' in g
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        if (header.length != 2) {
          throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body._noBody) return
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : 'utf-8';
    reader.readAsText(blob, encoding);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      // eslint-disable-next-line no-self-assign
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer)
      } else {
        throw new Error('could not read as ArrayBuffer')
      }
    };

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || (function () {
      if ('AbortController' in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    }());
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          try {
            headers.append(key, value);
          } catch (error) {
            console.warn('Response ' + error.message);
          }
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 200, statusText: ''});
    response.ok = false;
    response.status = 0;
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = g.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        // This check if specifically for when a user fetches a file locally from the file system
        // Only if the status is out of a normal range
        if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request timed out'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && g.location.href ? g.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function(value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!g.fetch) {
    g.fetch = fetch;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
