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
    setApiClient(_client: string): void;
    setToken(_token: string, _userId: string): void;
    setEndpoint(_endpoint: string): void;
    setFetch(_fetch: Function): void;
    addLogger(_callback: Function): void;
    PaasServiceMetrics(_serviceUUID: string): PaasServiceMetrics;
    stringifyResponseRequest<T>(object: any): T;
}
export { GridscaleClient as Client };
