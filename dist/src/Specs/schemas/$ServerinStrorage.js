"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerinStrorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerinStrorage = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            bus: {
                type: 'number',
            },
            controller: {
                type: 'number',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            lun: {
                type: 'number',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            target: {
                type: 'number',
            },
        },
    },
};

//# sourceMappingURL=$ServerinStrorage.js.map
