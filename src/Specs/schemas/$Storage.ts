/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Storage = {
    properties: {
        parent_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        backups: {
            type: 'array',
            contains: {
                properties: {
                    create_time: {
                        type: 'string',
                        format: 'uuid',
                    },
                    last_used_template: {
                        type: 'string',
                    },
                    object_capacity: {
                        type: 'number',
                    },
                    object_name: {
                        type: 'string',
                    },
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    schedules_storages_backups_name: {
                        type: 'string',
                    },
                    schedules_storages_backups_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    status: {
                        type: 'string',
                    },
                    storage_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                },
            },
        },
        snapshots: {
            type: 'array',
            contains: {
                properties: {
                    object_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    object_name: {
                        type: 'string',
                    },
                    object_capacity: {
                        type: 'number',
                    },
                    schedules_snapshot_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                    schedules_snapshot_name: {
                        type: 'string',
                    },
                    last_used_template: {
                        type: 'string',
                    },
                    create_time: {
                        type: 'string',
                        format: 'uuid',
                    },
                    storage_uuid: {
                        type: 'string',
                        format: 'uuid',
                    },
                },
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        relations: {
            type: 'StoragesRelation',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        storage_type: {
            type: 'Enum',
        },
        storage_variant: {
            type: 'StorageVariant',
        },
        license_product_no: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        last_used_template: {
            type: 'string',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};