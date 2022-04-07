/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ListenPorts } from './ListenPorts';

/**
 * Contains either the IPv6 or the IPv4 address depending on the network type to which the paas is connected and port that the Service will listen to, you can use these details to connect internally to a service.
 */
export type ListenPortsByIpIndex = Record<string, ListenPorts>;