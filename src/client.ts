import { api as globalApi, ApiSettings, LogData, APIClass } from './api';

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
import { MarketplaceApplication as ServiceMarketplaceApplication } from './Objects/ServiceMarketplace/MarketplaceApplication';
import { Certificate } from './Objects/Certificate';
import { forEach } from 'lodash';
import { BackupLocation } from './Objects/BackupLocation';
import { MarketplacePlan } from './Objects/ServiceMarketplace/MarketplacePlan';
import { MarketplacePlanSettings } from './Objects/ServiceMarketplace/MarketplacePlanSettings';
import { MarketplaceApplicationInstance } from './Objects/ServiceMarketplace/MarketplaceApplicationInstance';
import { MarketplaceVersion } from './Objects/ServiceMarketplace/MarketplaceVersion';
import { GPU } from './Objects/GPU';

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
  public GPU: GPU;
  /**
   * @deprecated
   */
  public PAAS: PAAS;
  public PaasService: PaasService;
  public PaasServiceTemplate: PaasServiceTemplate;
  public PaasSecurityZone: PaasSecurityZone;
  public Deleted: Deleted;
  public MarketplaceApplication: MarketplaceApplication;
  public ServiceMarketplaceApplication: ServiceMarketplaceApplication;
  public ServiceMarketplaceApplicationInstance: MarketplaceApplicationInstance;
  public ServiceMarketplacePlan: MarketplacePlan;
  public ServiceMarketplacePlanSettings: MarketplacePlanSettings;
  public ServiceMarketplaceVersion: MarketplaceVersion;

  public watchRequest: (_requestid: string) => ReturnType<typeof globalApi.watchRequest>;

  private myapi: APIClass;

  /**
   * Init Client with Default Values
   *
   *
   * @param _token Security Token
   * @param _userId UUID of User
   * @param _options
   * @param _isolated (if true, use isolated api which can be used alongside other instances. Default behavior is shared settings/tokens between the client instances)
   */
  constructor(_token: string, _userId: string, _options: ApiSettings = {}, _isolated = false) {

    if (_isolated) {
      this.myapi = new APIClass();
    } 
    
    // Store Security Tokens
    this.api.storeToken(_token, _userId);

    // Store advanced Options
    this.api.setOptions(_options);

    // Call Subtypes
    this.Server = new Server(this.api);
    this.Storage = new Storage(this.api);
    this.Network = new Network(this.api);
    this.IP = new IP(this.api);
    this.ISOImage = new ISOImage(this.api);
    this.SSHKey = new SSHKey(this.api);
    this.Template = new Template(this.api);
    this.Location = new Location(this.api);
    this.ObjectStorage = new ObjectStorage(this.api);
    this.Label = new Label(this.api);
    this.Loadbalancer = new Loadbalancer(this.api);
    this.Events = new Events(this.api);
    this.Firewall = new Firewall(this.api);
    this.PAAS = new PAAS(this.api);
    this.PaasServiceTemplate = new PaasServiceTemplate(this.api);
    this.PaasService = new PaasService(this.api);
    this.PaasSecurityZone = new PaasSecurityZone(this.api);
    this.Deleted = new Deleted(this.api);
    this.MarketplaceApplication = new MarketplaceApplication(this.api);
    this.ServiceMarketplaceApplication = new ServiceMarketplaceApplication(this.api);
    this.ServiceMarketplaceApplicationInstance = new MarketplaceApplicationInstance(this.api);
    this.ServiceMarketplacePlan = new MarketplacePlan(this.api);
    this.ServiceMarketplacePlanSettings = new MarketplacePlanSettings(this.api);
    this.ServiceMarketplaceVersion = new MarketplaceVersion(this.api);
    this.Certificate = new Certificate(this.api);
    this.BackupLocation = new BackupLocation(this.api);
    this.GPU = new GPU(this.api);
    this.watchRequest = this.api.watchRequest.bind(this.api);
  }

  /**
   * Set the identifier of the client (used in X-Api-Client Header)
   * @param _client
   */
  public setApiClient(_client: string) {
    this.api.storeClient(_client);
  }

  /**
   * Set a new Token and User-UUID
   * @param _token
   * @param _userId
   */
  public setToken (_token: string, _userUUID: string) {
    this.api.storeToken(_token, _userUUID);
  }

  /**
   * Set the HTTP endpoint of the API
   * @param _endpoint
   */
  public setEndpoint(_endpoint: string) {
    this.api.setOptions({ endpoint: _endpoint });
  }

  /**
   * Inject a custom fetch method, otherwise the API will decide if to use the browser's fetch method or a polyfill
   * @param _fetch
   */
  public setFetch(_fetch: Function) {
    this.api.setOptions({ fetch: fetch });
  }

  /**
   * set addiotional headers
   */
  public setAdditionalHeaders(additionalHeaders: Record<string, string>) {
    this.api.setOptions({ additionalHeaders })
  }

  /**
   * Add an additional logger callback, called whenever an error is happening
   * @param _callback
   */
   public addLogger ( _callback: (logData: LogData) => void ) {
     this.api.addLogger(_callback);
  }

  /**
   * Calls the Validate Token Endpoint of the API
   * @returns HTTP Promise
   */
  public validateToken() {
    return this.api.get('/validate_token');
  }

  /**
   * Get the paas service metrics API which is a special one as the service-uuid is required early in the URL
   * @param _serviceUUID
   */
  public PaasServiceMetrics(_serviceUUID: string) {
    return new PaasServiceMetrics(this.api, _serviceUUID);
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

  get api() {
    return this.myapi || globalApi;
  }
  
}

export { GridscaleClient as Client };
