/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ServerinNetwork } from './ServerinNetwork';
import { VlansinNetwork } from './VlansinNetwork';

/**
 * The information about other object which are related to this network. the object could be servers and/or vlans
 */
export type NetworkRelation = {
    servers?: ServerinNetwork;
    vlans?: VlansinNetwork;
}
