"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Network = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Network = {
    properties: {
        location_country: {
            type: 'string',
            format: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        public_net: {
            type: 'boolean',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_type: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        l2security: {
            type: 'boolean',
        },
        relations: {
            type: 'NetworkRelation',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        location_iata: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
    },
};

//# sourceMappingURL=$Network.js.map
