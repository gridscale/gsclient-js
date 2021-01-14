export declare const $PaasService: {
    properties: {
        object_uuid: {
            type: string;
            format: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        credentials: {
            type: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        listen_ports: {
            type: string;
        };
        security_zone_uuid: {
            type: string;
            format: string;
        };
        service_template_uuid: {
            type: string;
            format: string;
        };
        usage_in_minutes: {
            type: string;
        };
        current_price: {
            type: string;
            format: string;
        };
        change_time: {
            type: string;
            format: string;
        };
        status: {
            type: string;
        };
        name: {
            type: string;
        };
        parameters: {
            type: string;
        };
        resource_limits: {
            type: string;
        };
        upgrade_options: {
            type: string;
            contains: {
                type: string;
            };
        };
    };
};
