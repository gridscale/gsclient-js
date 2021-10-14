/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ObjectUsageOverview } from './ObjectUsageOverview';

export type UsageGetResponseOverview = {
    products?: {
        servers?: ObjectUsageOverview,
        rocket_storages?: ObjectUsageOverview,
        distributed_storages?: ObjectUsageOverview,
        storage_backups?: ObjectUsageOverview,
        snapshots?: ObjectUsageOverview,
        templates?: ObjectUsageOverview,
        iso_images?: ObjectUsageOverview,
        ip_addresses?: ObjectUsageOverview,
        load_balancers?: ObjectUsageOverview,
        paas_services?: ObjectUsageOverview,
    };
}
