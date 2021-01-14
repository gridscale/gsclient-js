/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Firewall = {
    properties: {
        status: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        rules: {
            type: 'FirewallRules',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        private: {
            type: 'boolean',
        },
        relations: {
            type: 'FirewallRelation',
        },
        description: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        name: {
            type: 'string',
        },
    },
};