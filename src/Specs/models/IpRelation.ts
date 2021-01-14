/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoadbalancerinIp } from './LoadbalancerinIp';
import type { ServerinIp } from './ServerinIp';

/**
 * The information about other object which are related to this IP. the object could be servers and/or loadbalancer
 */
export type IpRelation = {
    servers?: ServerinIp;
    loadbalancers?: LoadbalancerinIp;
}
