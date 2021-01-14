import type { ServerinNetwork } from './ServerinNetwork';
import type { VlansinNetwork } from './VlansinNetwork';
/**
 * The information about other object which are related to this network. the object could be servers and/or vlans
 */
export declare type NetworkRelation = {
    servers?: ServerinNetwork;
    vlans?: VlansinNetwork;
};
