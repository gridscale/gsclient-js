/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskEvents = {
    properties: {
        schedules: {
            properties: {
                schedule_snapshot_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        run_interval: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                schedule_snapshot_perform: {
                    properties: {
                        type: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                    },
                },
                schedule_snapshot_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        run_interval: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                schedule_snapshot_remove: {
                    properties: {
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        ipaddr: {
            properties: {
                ipaddr_update: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        failover: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
                ipaddr_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        family: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'number',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        failover: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        next_runtime: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        loadbalancer: {
            properties: {
                loadbalancer_update: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        algorithm: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        backend_servers: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: 'array',
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: 'number',
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        min: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        nullable: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                certificate_uuid: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        description: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        allowed: {
                                                            type: 'array',
                                                            contains: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                loadbalancer_add: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        algorithm: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        backend_servers: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: 'array',
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: 'number',
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        min: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        nullable: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                                certificate_uuid: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        description: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                        allowed: {
                                                            type: 'array',
                                                            contains: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                        required: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                loadbalancer_remove: {
                    properties: {
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        certificate: {
            properties: {
                certificate_add: {
                    properties: {
                    },
                },
                certificate_remove: {
                    properties: {
                        certificate_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        paas: {
            properties: {
                paas_service_remove: {
                    properties: {
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_remove: {
                    properties: {
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        mpls_mgmt_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        mpls_cust_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_security_zone_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_service_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        credentials: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        resource_limit: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: 'array',
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: 'array',
                                                                        contains: {
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                    max: {
                                                                        type: 'number',
                                                                    },
                                                                    min: {
                                                                        type: 'number',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        parameters: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                paas_service_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        resource_limit: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: 'array',
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: 'array',
                                                                        contains: {
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                },
                                                            },
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: 'string',
                                                                    },
                                                                    required: {
                                                                        type: 'boolean',
                                                                    },
                                                                    max: {
                                                                        type: 'number',
                                                                    },
                                                                    min: {
                                                                        type: 'number',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        marketplace_template: {
            properties: {
                marketplace_template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                marketplace_template_import: {
                    properties: {
                        unique_hash: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
        firewall: {
            properties: {
                firewall_remove: {
                    properties: {
                        tfirewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                firewall_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        rules: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                firewall_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        rules: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        isoimage: {
            properties: {
                isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                isoimage_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        source_url: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                isoimage_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        snapshot: {
            properties: {
                snapshot_remove: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                snapshot_add: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                snapshot_export_tos3: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        s3auth: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        secret_key: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        access_key: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        s3data: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        bucket: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        filename: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                                empty: {
                                                    type: 'string',
                                                },
                                                maxlength: {
                                                    type: 'number',
                                                },
                                                minlength: {
                                                    type: 'number',
                                                },
                                            },
                                        },
                                        private: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                snapshot_rollback: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        rollback: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                snapshot_update: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
            },
        },
        sshkey: {
            properties: {
                sshkey_remove: {
                    properties: {
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                sshkey_add: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                maxlength: {
                                    type: 'number',
                                },
                                minlength: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                sshkey_update: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                empty: {
                                    type: 'boolean',
                                },
                                maxlength: {
                                    type: 'number',
                                },
                                minlength: {
                                    type: 'number',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
            },
        },
        storage: {
            properties: {
                storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                storage_add: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        template: {
                            properties: {
                                schema: {
                                    properties: {
                                        password_type: {
                                            properties: {
                                                allowed: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                                dependencies: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        hostname: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        sshkeys: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                unique: {
                                                    type: 'boolean',
                                                },
                                                schema: {
                                                    properties: {
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        private: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        template_uuid: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                required: {
                                                    type: 'boolean',
                                                },
                                            },
                                        },
                                        password: {
                                            properties: {
                                                type: {
                                                    type: 'string',
                                                },
                                                empty: {
                                                    type: 'boolean',
                                                },
                                                dependencies: {
                                                    type: 'array',
                                                    contains: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        storage_type: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
                isoimage_update: {
                    properties: {
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        capacity: {
                            properties: {
                                required: {
                                    type: 'boolean',
                                },
                                max: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                            },
                        },
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        server: {
            properties: {
                server_relation_isoimage_add: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_isoimage_update: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_ipaddr_add: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l3security: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                unique: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        firewall: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        ordering: {
                            properties: {
                                max: {
                                    type: 'number',
                                },
                                min: {
                                    type: 'number',
                                },
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l3security: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                unique: {
                                    type: 'boolean',
                                },
                                schema: {
                                    properties: {
                                        type: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        firewall: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: 'number',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: 'boolean',
                                                                },
                                                                required: {
                                                                    type: 'boolean',
                                                                },
                                                                type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                        type: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: 'boolean',
                                },
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        ordering: {
                            properties: {
                                max: {
                                    type: 'number',
                                },
                                min: {
                                    type: 'number',
                                },
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_add: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_update: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        bootdevice: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_relation_storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_add: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        availability_zone: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        cores: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        memory: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        legacy: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        availability_zone: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                nullable: {
                                    type: 'boolean',
                                },
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        cores: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        memory: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                response_code: {
                                    type: 'number',
                                },
                                type: {
                                    type: 'string',
                                },
                                min: {
                                    type: 'number',
                                },
                                max: {
                                    type: 'number',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: 'array',
                                    contains: {
                                        type: 'string',
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
                server_remove: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_power_shutdown: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                server_power_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        autotriger: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                            },
                        },
                        power: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                                response_code: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
            },
        },
        template: {
            properties: {
                template_add: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        snapshot_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                template_update: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
        network: {
            properties: {
                network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l2security: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                        location_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
                network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                        l2security: {
                            properties: {
                                description: {
                                    type: 'string',
                                },
                                type: {
                                    type: 'string',
                                },
                            },
                        },
                        labels: {
                            type: 'TaskEventLabel',
                        },
                        name: {
                            type: 'TaskEventName',
                        },
                    },
                },
                network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                description: {
                                    type: 'string',
                                },
                                required: {
                                    type: 'boolean',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};