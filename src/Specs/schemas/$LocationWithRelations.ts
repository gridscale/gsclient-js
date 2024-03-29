/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LocationWithRelations = {
    properties: {
        iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_uuid: {
            type: 'string',
            format: 'uuid',
        },
        hybrid_core_id: {
            type: 'string',
            format: 'uuid',
        },
        country: {
            type: 'string',
            format: 'string',
        },
        active: {
            type: 'boolean',
        },
        change_requested: {
            type: 'LocationChangeRequested',
        },
        cpunode_count: {
            type: 'number',
        },
        public: {
            type: 'boolean',
        },
        product_no: {
            type: 'number',
        },
        location_information: {
            type: 'LocationInformation',
        },
        features: {
            type: 'LocationFeatures',
        },
        relations: {
            type: 'LocationRelations',
        },
    },
};