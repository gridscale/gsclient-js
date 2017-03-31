(function () {

    var api = require('./api');

    var Server = require('./Objects/Server').Server;
    var Storage = require('./Objects/Storage').Storage;
    var Network = require('./Objects/Network').Network;
    var IP = require('./Objects/IP').IP;
    var ISOImage = require('./Objects/ISOImage').ISOImage;
    var SSHKey = require('./Objects/SSHKey').SSHKey;
    var Template = require('./Objects/Template').Template;
    var Location = require('./Objects/Location').Location;
    var ObjectStorage = require('./Objects/ObjectStorage').ObjectStorage;


    /**
     * generate Client Class for all Connections
     */
    class Client {

        // Types
        public Server: any;
        public Storage: any;
        public Network: any;
        public IP: any;
        public ISOImage: any;
        public SSHKey: any;
        public Template: any;
        public Location: any;
        public ObjectStorage: any;

        public watchRequest: Function;

        /**
         * Init Client with Default Values
         *
         *
         * @param _token Security Token
         * @param _userId UUID of User
         * @param _options
         */
        constructor(_token, _userId, _options = {}) {
            //TODO: Validate Token and UUID

            // Store Security Tokens
            api.storeToken(_token, _userId);

            // Store advanced Options
            api.setOptions(_options);

            // Call Subtypes
            this.Server = new Server(api);
            this.Storage = new Storage(api);
            this.Network = new Network(api);
            this.IP = new IP(api);
            this.ISOImage = new ISOImage(api);
            this.SSHKey = new SSHKey(api);
            this.Template = new Template(api);
            this.Location = new Location(api);
            this.ObjectStorage = new ObjectStorage(api);

            this.watchRequest = api.watchRequest;

        }

    }

    // Export Instance of Class (Singleton)
    module.exports = function (_token, _userId, _options) {
        return new Client(_token, _userId, _options);
    };

}).call(this);