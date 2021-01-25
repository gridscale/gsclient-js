/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ListenPorts } from './ListenPorts';

/**
 * Contains the IPv6 address and port that the Service will listen to, you can use these details to connect internally to a service.
 */
export type ListenPortsByIpIndex = Record<string, ListenPorts>;