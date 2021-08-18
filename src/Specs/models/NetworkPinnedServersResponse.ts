/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { PinnedServer } from './PinnedServer';

export type NetworkPinnedServersResponse = {
    /**
     * List of server and it's assigned DHCP IP
     */
    pinned_servers?: Array<PinnedServer>;
}
