/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServicesUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};