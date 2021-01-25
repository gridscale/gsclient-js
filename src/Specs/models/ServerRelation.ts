/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { IsoimageinServer } from './IsoimageinServer';
import { NetworkinServer } from './NetworkinServer';
import { PublicIpinServer } from './PublicIpinServer';
import { StoragesinServer } from './StoragesinServer';

/**
 * The information about other object which are related to this server. the object could be ip, storage, network, and isoimage
 */
export type ServerRelation = {
    public_ips?: PublicIpinServer;
    isoimages?: IsoimageinServer;
    storages?: StoragesinServer;
    networks?: NetworkinServer;
}
