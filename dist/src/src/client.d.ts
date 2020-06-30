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
import { Price } from './Objects/Price';
import { Loadbalancer } from './Objects/Loadbalancer';
import { Events } from './Objects/Events';
import { Firewall } from './Objects/Firewall';
import { PAAS } from './Objects/PAAS';
import { Deleted } from './Objects/Deleted';
import { PAASServiceTemplate } from './Objects/PAASServiceTemplate';
import { PAASService } from './Objects/PAASService';
import { PAASSecurityZone } from './Objects/PAASSecurityZone';
import { PAASServiceMetrics } from './Objects/PAASServiceMetrics';
import { Marketplace } from './Objects/Marketplace';
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
    Price: Price;
    Loadbalancer: Loadbalancer;
    Events: Events;
    Firewall: Firewall;
    PAAS: PAAS;
    PAASService: PAASService;
    PAASServiceTemplate: PAASServiceTemplate;
    PAASSecurityZone: PAASSecurityZone;
    Deleted: Deleted;
    Marketplace: Marketplace;
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
    addLogger(_callback: Function): void;
    PAASServiceMetrics(_serviceUUID: string): PAASServiceMetrics;
    stringifyResponseRequest<T>(object: any): T;
}
export { GridscaleClient as Client };
