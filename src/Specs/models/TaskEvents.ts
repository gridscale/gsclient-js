/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { TaskEventLabel } from './TaskEventLabel';
import { TaskEventName } from './TaskEventName';

export type TaskEvents = {
    schedules?: {
        schedule_snapshot_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            run_interval?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            keep_snapshots?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            next_runtime?: {
                type?: string,
                description?: string,
                nullable?: boolean,
            },
            schedule_uuid?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                required?: boolean,
            },
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        schedule_snapshot_perform?: {
            type?: string,
            description?: string,
        },
        schedule_snapshot_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            run_interval?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            keep_snapshots?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            next_runtime?: {
                type?: string,
                description?: string,
                nullable?: boolean,
            },
            schedule_uuid?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                required?: boolean,
            },
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        schedule_snapshot_remove?: {
            schedule_uuid?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                required?: boolean,
            },
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
    };
    ipaddr?: {
        ipaddr_update?: {
            ipaddr_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            name?: TaskEventName,
            reverse_dns?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                response_code?: number,
            },
            labels?: TaskEventLabel,
            failover?: {
                type?: string,
                description?: string,
                response_code?: number,
            },
        },
        ipaddr_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            reverse_dns?: {
                type?: string,
                description?: string,
                nullable?: boolean,
            },
            family?: {
                type?: string,
                description?: string,
                allowed?: Array<number>,
                required?: boolean,
            },
            failover?: {
                type?: string,
                description?: string,
            },
            next_runtime?: {
                type?: string,
                description?: string,
                nullable?: boolean,
            },
            ipaddr_uuid?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                required?: boolean,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        ipaddr_remove?: {
            ipaddr_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
    };
    loadbalancer?: {
        loadbalancer_update?: {
            listen_ipv6_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            name?: TaskEventName,
            algorithm?: {
                type?: string,
                allowed?: Array<string>,
                required?: boolean,
            },
            labels?: TaskEventLabel,
            redirect_http_to_https?: {
                type?: string,
                required?: boolean,
            },
            lb_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            listen_ipv4_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            backend_servers?: {
                type?: string,
                schema?: {
                    schema?: {
                        host?: {
                            anyof_schema?: Array<{
                                type?: string,
                                required?: boolean,
                            }>,
                        },
                        weight?: {
                            max?: number,
                            type?: string,
                            required?: boolean,
                            min?: number,
                        },
                    },
                    type?: string,
                },
                required?: boolean,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            forwarding_rule?: {
                type?: string,
                required?: boolean,
                schema?: {
                    schema?: {
                        target_port?: {
                            type?: string,
                            required?: boolean,
                        },
                        letsencrypt_ssl?: {
                            type?: string,
                            required?: boolean,
                            nullable?: boolean,
                        },
                        certificate_uuid?: {
                            type?: string,
                            description?: string,
                        },
                        mode?: {
                            type?: string,
                            required?: boolean,
                            allowed?: Array<string>,
                        },
                        listen_port?: {
                            type?: string,
                            required?: boolean,
                        },
                    },
                    type?: string,
                },
            },
        },
        loadbalancer_add?: {
            listen_ipv6_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            name?: TaskEventName,
            algorithm?: {
                type?: string,
                allowed?: Array<string>,
                required?: boolean,
            },
            labels?: TaskEventLabel,
            redirect_http_to_https?: {
                type?: string,
                required?: boolean,
            },
            lb_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            listen_ipv4_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            backend_servers?: {
                type?: string,
                schema?: {
                    schema?: {
                        host?: {
                            anyof_schema?: Array<{
                                type?: string,
                                required?: boolean,
                            }>,
                        },
                        weight?: {
                            max?: number,
                            type?: string,
                            required?: boolean,
                            min?: number,
                        },
                    },
                    type?: string,
                },
                required?: boolean,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                min?: number,
                required?: boolean,
            },
            forwarding_rule?: {
                type?: string,
                required?: boolean,
                schema?: {
                    schema?: {
                        target_port?: {
                            type?: string,
                            required?: boolean,
                        },
                        letsencrypt_ssl?: {
                            type?: string,
                            required?: boolean,
                            nullable?: boolean,
                        },
                        certificate_uuid?: {
                            type?: string,
                            description?: string,
                        },
                        mode?: {
                            type?: string,
                            required?: boolean,
                            allowed?: Array<string>,
                        },
                        listen_port?: {
                            type?: string,
                            required?: boolean,
                        },
                    },
                    type?: string,
                },
            },
        },
        loadbalancer_remove?: {
            lb_uuid?: {
                type?: string,
                required?: boolean,
            },
        },
    };
    certificate?: {
        certificate_add?: any,
        certificate_remove?: {
            certificate_uuid?: {
                type?: string,
                required?: boolean,
            },
        },
    };
    paas?: {
        paas_service_remove?: {
            paas_service_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        paas_security_zone_remove?: {
            paas_security_zone_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        paas_security_zone_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            mpls_mgmt_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            mpls_cust_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            paas_security_zone_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        paas_security_zone_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            paas_security_zone_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        paas_service_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            paas_security_zone_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            paas_service_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            paas_template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            credentials?: {
                type?: string,
                schema?: {
                    type?: string,
                },
                required?: boolean,
            },
            resource_limit?: {
                type?: string,
                schema?: {
                    anyof?: Array<{
                        schema?: {
                            resource?: {
                                allowed?: Array<string>,
                                type?: string,
                                required?: boolean,
                            },
                            limit?: {
                                type?: string,
                                required?: boolean,
                                max?: number,
                                min?: number,
                            },
                        },
                    }>,
                },
                required?: boolean,
            },
            parameters?: {
                type?: string,
                required?: boolean,
            },
        },
        paas_service_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            resource_limit?: {
                type?: string,
                schema?: {
                    anyof?: Array<{
                        schema?: {
                            resource?: {
                                allowed?: Array<string>,
                                type?: string,
                                required?: boolean,
                            },
                            limit?: {
                                type?: string,
                                required?: boolean,
                                max?: number,
                                min?: number,
                            },
                        },
                    }>,
                },
                required?: boolean,
            },
            paas_service_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
    };
    marketplace_template?: {
        marketplace_template_remove?: {
            template_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        marketplace_template_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            capacity?: {
                required?: boolean,
                max?: number,
                type?: string,
                description?: string,
                min?: number,
            },
            object_storage_path?: {
                required?: boolean,
                empty?: boolean,
                type?: string,
            },
        },
        marketplace_template_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            capacity?: {
                required?: boolean,
                max?: number,
                type?: string,
                description?: string,
                min?: number,
            },
            object_storage_path?: {
                required?: boolean,
                empty?: boolean,
                type?: string,
            },
        },
        marketplace_template_import?: {
            unique_hash?: {
                required?: boolean,
                type?: string,
            },
        },
    };
    firewall?: {
        firewall_remove?: {
            tfirewall_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        firewall_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            firewall_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            rules?: {
                nullable?: boolean,
                type?: string,
                response_code?: number,
                schema?: {
                    'rules-v4-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v4-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                },
            },
        },
        firewall_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            firewall_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            rules?: {
                nullable?: boolean,
                type?: string,
                response_code?: number,
                schema?: {
                    'rules-v4-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v4-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                },
            },
        },
    };
    isoimage?: {
        isoimage_remove?: {
            isoimage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        isoimage_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            isoimage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
                nullable?: boolean,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            source_url?: {
                required?: boolean,
                type?: string,
                description?: string,
            },
        },
        isoimage_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            isoimage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
                nullable?: boolean,
            },
        },
    };
    snapshot?: {
        snapshot_remove?: {
            snaapshot_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        snapshot_add?: {
            snaapshot_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
        snapshot_export_tos3?: {
            snaapshot_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            s3auth?: {
                schema?: {
                    host?: {
                        type?: string,
                        required?: boolean,
                    },
                    secret_key?: {
                        type?: string,
                        required?: boolean,
                        empty?: string,
                        maxlength?: number,
                        minlength?: number,
                    },
                    access_key?: {
                        type?: string,
                        required?: boolean,
                        empty?: string,
                        maxlength?: number,
                        minlength?: number,
                    },
                },
                type?: string,
                required?: boolean,
            },
            s3data?: {
                schema?: {
                    host?: {
                        type?: string,
                        required?: boolean,
                    },
                    bucket?: {
                        type?: string,
                        required?: boolean,
                        empty?: string,
                        maxlength?: number,
                        minlength?: number,
                    },
                    filename?: {
                        type?: string,
                        required?: boolean,
                        empty?: string,
                        maxlength?: number,
                        minlength?: number,
                    },
                    private?: {
                        type?: string,
                        required?: boolean,
                    },
                },
                type?: string,
                required?: boolean,
            },
        },
        snapshot_rollback?: {
            snaapshot_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            rollback?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        snapshot_update?: {
            snaapshot_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
    };
    sshkey?: {
        sshkey_remove?: {
            sshkey_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        sshkey_add?: {
            sshkey?: {
                type?: string,
                description?: string,
                empty?: boolean,
                maxlength?: number,
                minlength?: number,
                required?: boolean,
            },
            sshkey_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
        sshkey_update?: {
            sshkey?: {
                type?: string,
                description?: string,
                empty?: boolean,
                maxlength?: number,
                minlength?: number,
                required?: boolean,
            },
            sshkey_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
    };
    storage?: {
        storage_remove?: {
            storage_uuid?: {
                type?: string,
                required?: boolean,
                description?: string,
            },
        },
        storage_add?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
                nullable?: boolean,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            template?: {
                schema?: {
                    password_type?: {
                        allowed?: Array<string>,
                        dependencies?: Array<string>,
                        type?: string,
                    },
                    hostname?: {
                        type?: string,
                    },
                    sshkeys?: {
                        type?: string,
                        unique?: boolean,
                        schema?: {
                            type?: string,
                        },
                    },
                    private?: {
                        type?: string,
                    },
                    template_uuid?: {
                        type?: string,
                        required?: boolean,
                    },
                    password?: {
                        type?: string,
                        empty?: boolean,
                        dependencies?: Array<string>,
                    },
                },
                type?: string,
                description?: string,
            },
            capacity?: {
                required?: boolean,
                max?: number,
                type?: string,
                description?: string,
                min?: number,
            },
            storage_type?: {
                type?: string,
                description?: string,
                allowed?: Array<string>,
            },
        },
        isoimage_update?: {
            labels?: TaskEventLabel,
            name?: TaskEventName,
            capacity?: {
                required?: boolean,
                max?: number,
                type?: string,
                description?: string,
                min?: number,
            },
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
                nullable?: boolean,
            },
        },
    };
    server?: {
        server_relation_isoimage_add?: {
            isoimage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
        },
        server_relation_isoimage_update?: {
            isoimage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
        },
        server_relation_isoimage_remove?: {
            isoimage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_relation_ipaddr_add?: {
            ipaddr_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_relation_ipaddr_remove?: {
            ipaddr_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_relation_network_add?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            l3security?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                unique?: boolean,
                schema?: {
                    type?: string,
                },
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
            firewall?: {
                nullable?: boolean,
                type?: string,
                schema?: {
                    'rules-v4-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v4-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                },
            },
            firewall_template_uuid?: {
                nullable?: boolean,
                type?: string,
                description?: string,
            },
            ordering?: {
                max?: number,
                min?: number,
                description?: string,
                type?: string,
            },
        },
        server_relation_network_update?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            l3security?: {
                type?: string,
                description?: string,
                nullable?: boolean,
                unique?: boolean,
                schema?: {
                    type?: string,
                },
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
            firewall?: {
                nullable?: boolean,
                type?: string,
                schema?: {
                    'rules-v4-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-out'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v4-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                    'rules-v6-in'?: {
                        schema?: {
                            src_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            action?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            src_port?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            dst_cidr?: {
                                nullable?: boolean,
                                type?: string,
                            },
                            order?: {
                                min?: number,
                                required?: boolean,
                                type?: string,
                            },
                            protocol?: {
                                allowed?: boolean,
                                required?: boolean,
                                type?: string,
                            },
                            type?: string,
                        },
                        type?: string,
                    },
                },
            },
            firewall_template_uuid?: {
                nullable?: boolean,
                type?: string,
                description?: string,
            },
            ordering?: {
                max?: number,
                min?: number,
                description?: string,
                type?: string,
            },
        },
        server_relation_network_remove?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_relation_storage_add?: {
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
        },
        server_relation_storage_update?: {
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            bootdevice?: {
                type?: string,
                description?: string,
            },
        },
        server_relation_storage_remove?: {
            storage_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_add?: {
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            auto_recovery?: {
                description?: string,
                response_code?: number,
                type?: string,
            },
            availability_zone?: {
                description?: string,
                response_code?: number,
                type?: string,
                nullable?: boolean,
                allowed?: Array<string>,
            },
            cores?: {
                description?: string,
                response_code?: number,
                type?: string,
                min?: number,
                max?: number,
            },
            memory?: {
                description?: string,
                response_code?: number,
                type?: string,
                min?: number,
                max?: number,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
            hardware_profile?: {
                allowed?: Array<string>,
                type?: string,
            },
            legacy?: {
                type?: string,
                description?: string,
            },
            location_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_update?: {
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            auto_recovery?: {
                description?: string,
                response_code?: number,
                type?: string,
            },
            availability_zone?: {
                description?: string,
                response_code?: number,
                type?: string,
                nullable?: boolean,
                allowed?: Array<string>,
            },
            cores?: {
                description?: string,
                response_code?: number,
                type?: string,
                min?: number,
                max?: number,
            },
            memory?: {
                description?: string,
                response_code?: number,
                type?: string,
                min?: number,
                max?: number,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
            hardware_profile?: {
                allowed?: Array<string>,
                type?: string,
            },
        },
        server_remove?: {
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_power_shutdown?: {
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        server_power_update?: {
            server_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            autotriger?: {
                type?: string,
                description?: string,
            },
            power?: {
                type?: string,
                description?: string,
                required?: boolean,
                response_code?: number,
            },
        },
    };
    template?: {
        template_add?: {
            template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
            snapshot_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        template_update?: {
            template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
        template_remove?: {
            template_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
    };
    network?: {
        network_add?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            l2security?: {
                description?: string,
                type?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
            location_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
        network_update?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
            l2security?: {
                description?: string,
                type?: string,
            },
            labels?: TaskEventLabel,
            name?: TaskEventName,
        },
        network_remove?: {
            network_uuid?: {
                type?: string,
                description?: string,
                required?: boolean,
            },
        },
    };
}
