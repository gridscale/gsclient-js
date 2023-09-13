/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LocationRelationsGpuFlavor = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        memory_per_slice: {
            type: 'number',
        },
        graphics_cards_per_slice: {
            type: 'number',
        },
        cores_per_slice: {
            type: 'number',
        },
        local_storage_capacity_per_slice: {
            type: 'number',
        },
        max_slices: {
            type: 'number',
        },
    },
};