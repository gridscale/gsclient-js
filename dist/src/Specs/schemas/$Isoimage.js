"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Isoimage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Isoimage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        relations: {
            type: 'IsoimageRelation',
        },
        description: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        source_url: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_iata: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        private: {
            type: 'boolean',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
    },
};

//# sourceMappingURL=$Isoimage.js.map
