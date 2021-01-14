/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerMetrics = {
    type: 'all-of',
    contains: [{
        type: 'Metrics',
    }, {
        properties: {
            server_uuid: {
                type: 'string',
                format: 'uuid',
            },
            core_usage: {
                type: 'MetricsValue',
            },
            storage_read_iops: {
                type: 'MetricsValue',
            },
            storage_write_iops: {
                type: 'MetricsValue',
            },
        },
    }],
};