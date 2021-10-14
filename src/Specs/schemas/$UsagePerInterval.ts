/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UsagePerInterval = {
    type: 'array',
    contains: {
        properties: {
            interval_start: {
                type: 'string',
                format: 'datetime',
            },
            interval_end: {
                type: 'string',
                format: 'datetime',
            },
            accumulated_usage: {
                type: 'array',
                contains: {
                    type: 'ProductUsage',
                },
            },
        },
    },
};