/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IsoimageinServer } from './IsoimageinServer';
import type { NetworkinServer } from './NetworkinServer';
import type { PublicIpinServer } from './PublicIpinServer';
import type { StoragesinServer } from './StoragesinServer';

/**
 * The information about other object which are related to this server. the object could be ip, storage, network, and isoimage
 */
export type ServerRelation = {
    public_ips?: PublicIpinServer;
    isoimages?: IsoimageinServer;
    storages?: StoragesinServer;
    networks?: NetworkinServer;
}
