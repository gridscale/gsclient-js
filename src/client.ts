import { api, ApiSettings } from './api';

import { Server } from './Objects/Server';
import { Storage } from './Objects/Storage';
import { Network } from './Objects/Network';
import { IP } from './Objects/IP';
import { ISOImage } from './Objects/ISOImage';
import { SSHKey } from './Objects/SSHKey';
import { Template } from './Objects/Template';
import { Location } from './Objects/Location';
import { ObjectStorage } from './Objects/ObjectStorage';
import { Label } from './Objects/Label';
import { Loadbalancer } from './Objects/Loadbalancer';
import { Events } from './Objects/Events';
import { Firewall } from './Objects/Firewall';
import { PAAS } from './Objects/PAAS';
import { Deleted } from './Objects/Deleted';
import { PaasServiceTemplate } from './Objects/PaasServiceTemplate';
import { PaasService } from './Objects/PaasService';
import { PaasSecurityZone } from './Objects/PaasSecurityZone';
import { PaasServiceMetrics } from './Objects/PaasServiceMetrics';
import { MarketplaceApplication } from './Objects/Marketplace';
import { forEach } from 'lodash';

/**
 * generate Client Class for all Connections
 * test
 */
class GridscaleClient {

    // Types
    public Server: Server;
    public Storage: Storage;
    public Network: Network;
    public IP: IP;
    public ISOImage: ISOImage;
    public SSHKey: SSHKey;
    public Template: Template;
    public Location: Location;
    public ObjectStorage: ObjectStorage;
    public Label: Label;
    public Loadbalancer: Loadbalancer;
    public Events: Events;
    public Firewall: Firewall;
    public PAAS: PAAS;
    public PaasService: PaasService;
    public PaasServiceTemplate: PaasServiceTemplate;
    public PaasSecurityZone: PaasSecurityZone;
    public Deleted: Deleted;
    public MarketplaceApplication: MarketplaceApplication;

    public watchRequest: (_requestid: string) => ReturnType<typeof api.watchRequest>;

    /**
     * Init Client with Default Values
     *
     *
     * @param _token Security Token
     * @param _userId UUID of User
     * @param _options
     */
    constructor(_token: string, _userId: string, _options: ApiSettings = {}) {

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
        this.Label = new Label(api);
        this.Loadbalancer = new Loadbalancer(api);
        this.Events = new Events(api);
        this.Firewall = new Firewall(api);
        this.PAAS = new PAAS(api);
        this.PaasServiceTemplate = new PaasServiceTemplate(api);
        this.PaasService = new PaasService(api);
        this.PaasSecurityZone = new PaasSecurityZone(api);
        this.Deleted = new Deleted(api);
        this.MarketplaceApplication = new MarketplaceApplication(api);
        this.watchRequest = api.watchRequest.bind(api);

    }

    public setApiClient(_client: string) {
      api.storeClient(_client);
    }

    public setToken (_token: string, _userId: string) {
      api.storeToken(_token, _userId);
    }

    public setEndpoint(_endpoint: string) {
      api.setOptions({ endpoint: _endpoint });
    }

    public setFetch(_fetch: Function) {
      api.setOptions({ fetch: fetch });
    }


    public addLogger ( _callback: Function ) {
      api.addLogger( _callback );
    }

    public PaasServiceMetrics(_serviceUUID: string) {
      return new PaasServiceMetrics(api, _serviceUUID);
    }

    // tslint:disable-next-line: no-any
    public stringifyResponseRequest<T>(object: any): T {
      // tslint:disable-next-line: no-any
      const tmp: any = {};
      forEach(object, (_val, _key) => {
        if (_val instanceof Headers) {
          tmp[_key] = {};

          _val.forEach((_h, _k) => {
            tmp[_key][_k] = _h;
          });

        } else if (_val instanceof Request) {
          tmp[_key] = this.stringifyResponseRequest(_val);

        } else if (['string', 'number', 'object', 'boolean'].indexOf(typeof (_val)) >= 0) {
          tmp[_key] = _val;
        }
      });

      return tmp;
    }

}

export { GridscaleClient as Client };
