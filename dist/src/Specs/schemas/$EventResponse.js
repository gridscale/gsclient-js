"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$EventResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$EventResponse = {
    properties: {
        events: {
            type: 'array',
            contains: {
                properties: {
                    object_type: {
                        type: 'string',
                    },
                    request_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    activity: {
                        type: 'string',
                    },
                    request_type: {
                        type: 'string',
                    },
                    request_status: {
                        type: 'string',
                    },
                    change: {
                        type: 'string',
                    },
                    timestamp: {
                        type: 'string',
                        format: 'date-time',
                    },
                    user_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                },
            },
        },
    },
};

//# sourceMappingURL=$EventResponse.js.map
