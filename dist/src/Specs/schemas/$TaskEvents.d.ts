export declare const $TaskEvents: {
    properties: {
        schedules: {
            properties: {
                schedule_snapshot_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        run_interval: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        next_runtime: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                schedule_snapshot_perform: {
                    properties: {
                        type: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                    };
                };
                schedule_snapshot_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        run_interval: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        keep_snapshots: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        next_runtime: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                schedule_snapshot_remove: {
                    properties: {
                        schedule_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        ipaddr: {
            properties: {
                ipaddr_update: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        name: {
                            type: string;
                        };
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        failover: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                ipaddr_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        reverse_dns: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        family: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        failover: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        next_runtime: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        loadbalancer: {
            properties: {
                loadbalancer_update: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        name: {
                            type: string;
                        };
                        algorithm: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        backend_servers: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: string;
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: string;
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        min: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        nullable: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        allowed: {
                                                            type: string;
                                                            contains: {
                                                                type: string;
                                                            };
                                                        };
                                                    };
                                                };
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                loadbalancer_add: {
                    properties: {
                        listen_ipv6_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        name: {
                            type: string;
                        };
                        algorithm: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        redirect_http_to_https: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        listen_ipv4_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        backend_servers: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                host: {
                                                    properties: {
                                                        anyof_schema: {
                                                            type: string;
                                                            contains: {
                                                                properties: {
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                weight: {
                                                    properties: {
                                                        max: {
                                                            type: string;
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        min: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        forwarding_rule: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        schema: {
                                            properties: {
                                                target_port: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                letsencrypt_ssl: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        nullable: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                mode: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                        allowed: {
                                                            type: string;
                                                            contains: {
                                                                type: string;
                                                            };
                                                        };
                                                    };
                                                };
                                                listen_port: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                        required: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                loadbalancer_remove: {
                    properties: {
                        lb_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        paas: {
            properties: {
                paas_service_remove: {
                    properties: {
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                paas_security_zone_remove: {
                    properties: {
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                paas_security_zone_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        mpls_mgmt_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        mpls_cust_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                paas_security_zone_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                paas_service_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        paas_security_zone_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        paas_template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        credentials: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        resource_limit: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: string;
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: string;
                                                                        contains: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                    max: {
                                                                        type: string;
                                                                    };
                                                                    min: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        parameters: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                paas_service_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        resource_limit: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        anyof: {
                                            type: string;
                                            contains: {
                                                properties: {
                                                    schema: {
                                                        properties: {
                                                            resource: {
                                                                properties: {
                                                                    allowed: {
                                                                        type: string;
                                                                        contains: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                            limit: {
                                                                properties: {
                                                                    type: {
                                                                        type: string;
                                                                    };
                                                                    required: {
                                                                        type: string;
                                                                    };
                                                                    max: {
                                                                        type: string;
                                                                    };
                                                                    min: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        paas_service_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        marketplace_template: {
            properties: {
                marketplace_template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                marketplace_template_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        capacity: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                            };
                        };
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                empty: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                marketplace_template_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        capacity: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                            };
                        };
                        object_storage_path: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                empty: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                marketplace_template_import: {
                    properties: {
                        unique_hash: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        firewall: {
            properties: {
                firewall_remove: {
                    properties: {
                        tfirewall_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                firewall_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        rules: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                firewall_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        firewall_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        rules: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        isoimage: {
            properties: {
                isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                isoimage_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        source_url: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                isoimage_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        snapshot: {
            properties: {
                snapshot_remove: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                snapshot_add: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
                snapshot_export_tos3: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        s3auth: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        secret_key: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                                empty: {
                                                    type: string;
                                                };
                                                maxlength: {
                                                    type: string;
                                                };
                                                minlength: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        access_key: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                                empty: {
                                                    type: string;
                                                };
                                                maxlength: {
                                                    type: string;
                                                };
                                                minlength: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        s3data: {
                            properties: {
                                schema: {
                                    properties: {
                                        host: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        bucket: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                                empty: {
                                                    type: string;
                                                };
                                                maxlength: {
                                                    type: string;
                                                };
                                                minlength: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        filename: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                                empty: {
                                                    type: string;
                                                };
                                                maxlength: {
                                                    type: string;
                                                };
                                                minlength: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        private: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                snapshot_rollback: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        rollback: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                snapshot_update: {
                    properties: {
                        snaapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
            };
        };
        sshkey: {
            properties: {
                sshkey_remove: {
                    properties: {
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                sshkey_add: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                empty: {
                                    type: string;
                                };
                                maxlength: {
                                    type: string;
                                };
                                minlength: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
                sshkey_update: {
                    properties: {
                        sshkey: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                empty: {
                                    type: string;
                                };
                                maxlength: {
                                    type: string;
                                };
                                minlength: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        sshkey_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
            };
        };
        storage: {
            properties: {
                storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                storage_add: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        template: {
                            properties: {
                                schema: {
                                    properties: {
                                        password_type: {
                                            properties: {
                                                allowed: {
                                                    type: string;
                                                    contains: {
                                                        type: string;
                                                    };
                                                };
                                                dependencies: {
                                                    type: string;
                                                    contains: {
                                                        type: string;
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        hostname: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        sshkeys: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                unique: {
                                                    type: string;
                                                };
                                                schema: {
                                                    properties: {
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        private: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        template_uuid: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                required: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        password: {
                                            properties: {
                                                type: {
                                                    type: string;
                                                };
                                                empty: {
                                                    type: string;
                                                };
                                                dependencies: {
                                                    type: string;
                                                    contains: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        capacity: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                            };
                        };
                        storage_type: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                            };
                        };
                    };
                };
                isoimage_update: {
                    properties: {
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        capacity: {
                            properties: {
                                required: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                            };
                        };
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        server: {
            properties: {
                server_relation_isoimage_add: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_isoimage_update: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_isoimage_remove: {
                    properties: {
                        isoimage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_ipaddr_add: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_ipaddr_remove: {
                    properties: {
                        ipaddr_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        l3security: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                unique: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        firewall: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        ordering: {
                            properties: {
                                max: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        l3security: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                unique: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        type: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        firewall: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                schema: {
                                    properties: {
                                        'rules-v4-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-out': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v4-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        'rules-v6-in': {
                                            properties: {
                                                schema: {
                                                    properties: {
                                                        src_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        action: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        src_port: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        dst_cidr: {
                                                            properties: {
                                                                nullable: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        order: {
                                                            properties: {
                                                                min: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        protocol: {
                                                            properties: {
                                                                allowed: {
                                                                    type: string;
                                                                };
                                                                required: {
                                                                    type: string;
                                                                };
                                                                type: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        firewall_template_uuid: {
                            properties: {
                                nullable: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        ordering: {
                            properties: {
                                max: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_storage_add: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_storage_update: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        bootdevice: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_relation_storage_remove: {
                    properties: {
                        storage_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_add: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                        availability_zone: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                            };
                        };
                        cores: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                            };
                        };
                        memory: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                        legacy: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        auto_recovery: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                        availability_zone: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                nullable: {
                                    type: string;
                                };
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                            };
                        };
                        cores: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                            };
                        };
                        memory: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                min: {
                                    type: string;
                                };
                                max: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        hardware_profile: {
                            properties: {
                                allowed: {
                                    type: string;
                                    contains: {
                                        type: string;
                                    };
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_remove: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_power_shutdown: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                server_power_update: {
                    properties: {
                        server_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        autotriger: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                            };
                        };
                        power: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                                response_code: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        template: {
            properties: {
                template_add: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        snapshot_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                template_update: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
                template_remove: {
                    properties: {
                        template_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        network: {
            properties: {
                network_add: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        l2security: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        location_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                network_update: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                        l2security: {
                            properties: {
                                description: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                        labels: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
                network_remove: {
                    properties: {
                        network_uuid: {
                            properties: {
                                type: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                required: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
