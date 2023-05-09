import { api, ApiSettings, LogData } from './api';

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
import { MarketplaceApplication } from './Objects/MarketplaceApplication';
import { Certificate } from './Objects/Certificate';
import { forEach } from 'lodash';
import { BackupLocation } from './Objects/BackupLocation';
import { MarketplaceService } from './Objects/MarketplaceService';
import { MarketplacePlan } from './Objects/MarketplacePlan';
import { MarketplaceVersion } from './Objects/MarketplaceVersion';
import { MarketplaceServiceInstance } from './Objects/MarketplaceServiceInstance';

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
  public Certificate: Certificate;
  public BackupLocation: BackupLocation;
  /**
   * @deprecated
   */
  public PAAS: PAAS;
  public PaasService: PaasService;
  public PaasServiceTemplate: PaasServiceTemplate;
  public PaasSecurityZone: PaasSecurityZone;
  public Deleted: Deleted;
  public MarketplaceApplication: MarketplaceApplication;
  public MarketplaceService: MarketplaceService;
  public MarketplaceServiceInstance: MarketplaceServiceInstance;
  public MarketplacePlan: MarketplacePlan;
  public MarketplaceVersion: MarketplaceVersion;

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
    this.MarketplaceService = new MarketplaceService(api);
    this.MarketplaceServiceInstance = new MarketplaceServiceInstance(api);
    this.MarketplacePlan = new MarketplacePlan(api);
    this.MarketplaceVersion = new MarketplaceVersion(api);
    this.Certificate = new Certificate(api);
    this.BackupLocation = new BackupLocation(api);
    this.watchRequest = api.watchRequest.bind(api);
  }

  /**
   * Set the identifier of the client (used in X-Api-Client Header)
   * @param _client
   */
  public setApiClient(_client: string) {
    api.storeClient(_client);
  }

  /**
   * Set a new Token and User-UUID
   * @param _token
   * @param _userId
   */
  public setToken (_token: string, _userUUID: string) {
    api.storeToken(_token, _userUUID);
  }

  /**
   * Set the HTTP endpoint of the API
   * @param _endpoint
   */
  public setEndpoint(_endpoint: string) {
    api.setOptions({ endpoint: _endpoint });
  }

  /**
   * Inject a custom fetch method, otherwise the API will decide if to use the browser's fetch method or a polyfill
   * @param _fetch
   */
  public setFetch(_fetch: Function) {
    api.setOptions({ fetch: fetch });
  }

  /**
   * Add an additional logger callback, called whenever an error is happening
   * @param _callback
   */
   public addLogger ( _callback: (logData: LogData) => void ) {
    api.addLogger( _callback );
  }

  /**
   * Calls the Validate Token Endpoint of the API
   * @returns HTTP Promise
   */
  public validateToken() {
    return api.get('/validate_token');
  }

  /**
   * Get the paas service metrics API which is a special one as the service-uuid is required early in the URL
   * @param _serviceUUID
   */
  public PaasServiceMetrics(_serviceUUID: string) {
    return new PaasServiceMetrics(api, _serviceUUID);
  }

  /**
   * Stringifies all non string-values of a HTTP Response (e.g. headers)
   * @param object
   * @deprecated
   */
   public stringifyResponseRequest<T>(object: Object): T {
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
