/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DistributedStoragesUsages = {
    properties: {
        distributed_storages: {
            type: 'array',
            contains: {
                type: 'StoragesUsage',
            },
        },
    },
};