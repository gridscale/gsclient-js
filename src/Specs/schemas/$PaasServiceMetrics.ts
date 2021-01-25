/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServiceMetrics = {
    type: 'all-of',
    contains: [{
        type: 'Metrics',
    }, {
        properties: {
            paas_service_uuid: {
                type: 'string',
                format: 'uuid',
            },
            core_usage: {
                type: 'MetricsValue',
            },
            storage_size: {
                type: 'MetricsValue',
            },
        },
    }],
};