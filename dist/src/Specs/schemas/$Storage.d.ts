export declare const $Storage: {
    properties: {
        parent_uuid: {
            type: string;
            format: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        snapshots: {
            type: string;
            contains: {
                properties: {
                    object_uuid: {
                        type: string;
                        format: string;
                    };
                    storage_uuid: {
                        type: string;
                        format: string;
                    };
                    object_name: {
                        type: string;
                    };
                    schedules_snapshot_uuid: {
                        type: string;
                        format: string;
                    };
                    schedules_snapshot_name: {
                        type: string;
                    };
                    last_used_template: {
                        type: string;
                    };
                    create_time: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
        object_uuid: {
            type: string;
            format: string;
        };
        relations: {
            type: string;
        };
        name: {
            type: string;
        };
        status: {
            type: string;
        };
        location_country: {
            type: string;
            format: string;
        };
        usage_in_minutes: {
            type: string;
        };
        location_uuid: {
            type: string;
            format: string;
        };
        change_time: {
            type: string;
            format: string;
        };
        storage_type: {
            type: string;
        };
        storage_variant: {
            type: string;
        };
        license_product_no: {
            type: string;
        };
        current_price: {
            type: string;
            format: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        last_used_template: {
            type: string;
        };
        capacity: {
            type: string;
        };
        location_name: {
            type: string;
            format: string;
        };
        location_iata: {
            type: string;
        };
    };
};
