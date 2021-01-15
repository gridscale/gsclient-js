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
import { MarketplaceApplication } from './Objects/Marketplace';
/**
 * generate Client Class for all Connections
 * test
 */
declare class GridscaleClient {
    Server: Server;
    Storage: Storage;
    Network: Network;
    IP: IP;
    ISOImage: ISOImage;
    SSHKey: SSHKey;
    Template: Template;
    Location: Location;
    ObjectStorage: ObjectStorage;
    Label: Label;
    Loadbalancer: Loadbalancer;
    Events: Events;
    Firewall: Firewall;
    PAAS: PAAS;
    PaasService: PaasService;
    PaasServiceTemplate: PaasServiceTemplate;
    PaasSecurityZone: PaasSecurityZone;
    Deleted: Deleted;
    MarketplaceApplication: MarketplaceApplication;
    watchRequest: (_requestid: string) => ReturnType<typeof api.watchRequest>;
    /**
     * Init Client with Default Values
     *
     *
     * @param _token Security Token
     * @param _userId UUID of User
     * @param _options
     */
    constructor(_token: string, _userId: string, _options?: ApiSettings);
    /**
     * Set the identifier of the client (used in X-Api-Client Header)
     * @param _client
     */
    setApiClient(_client: string): void;
    /**
     * Set a new Token and User-UUID
     * @param _token
     * @param _userId
     */
    setToken(_token: string, _userUUID: string): void;
    /**
     * Set the HTTP endpoint of the API
     * @param _endpoint
     */
    setEndpoint(_endpoint: string): void;
    /**
     * Inject a custom fetch method, otherwise the API will decide if to use the browser's fetch method or a polyfill
     * @param _fetch
     */
    setFetch(_fetch: Function): void;
    /**
     * Add an additional logger callback, called whenever an error is happening
     * @param _callback
     */
    addLogger(_callback: (logData: LogData) => void): void;
    /**
     * Get the paas service metrics API which is a special one as the service-uuid is required early in the URL
     * @param _serviceUUID
     */
    PaasServiceMetrics(_serviceUUID: string): PaasServiceMetrics;
    /**
     * Stringifies all non string-values of a HTTP Response (e.g. headers)
     * @param object
     * @deprecated
     */
    stringifyResponseRequest<T>(object: Object): T;
}
export { GridscaleClient as Client };
