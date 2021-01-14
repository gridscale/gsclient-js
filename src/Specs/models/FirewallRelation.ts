/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkinFirewall } from './NetworkinFirewall';

/**
 * The information about other object which are related to this Firewall. the object could be Network
 */
export type FirewallRelation = {
    networks?: NetworkinFirewall;
}
