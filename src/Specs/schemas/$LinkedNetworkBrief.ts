/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkedNetworkBrief = {
    properties: {
        network_type: {
            type: 'string',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        bootdevice: {
            type: 'boolean',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        l2security: {
            type: 'boolean',
        },
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        mac: {
            type: 'string',
        },
        ordering: {
            type: 'string',
        },
        firewall: {
            type: 'string',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        public_net: {
            type: 'boolean',
        },
    },
};