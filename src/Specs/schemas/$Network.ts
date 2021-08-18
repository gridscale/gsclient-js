/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Network = {
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
        dhcp_active: {
            type: 'boolean',
        },
        dhcp_range: {
            type: 'string',
        },
        dhcp_gateway: {
            type: 'string',
        },
        dhcp_dns: {
            type: 'string',
        },
        dhcp_reserved_subnet: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        auto_assigned_servers: {
            type: 'array',
            contains: {
                type: 'DhcpServer',
            },
        },
        pinned_servers: {
            type: 'array',
            contains: {
                type: 'DhcpServer',
            },
        },
    },
};