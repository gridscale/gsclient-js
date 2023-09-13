/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GPUGetProperties } from './GPUGetProperties';

export interface GPUSingleGetProperties extends GPUGetProperties {
    gpu_ips: {
        family: 4 | 6;
        ipaddr_uuid: string;
        prefix: string;
    }[]
}

export type GPUGetResponse = {
    gpu?: GPUSingleGetProperties;
}
