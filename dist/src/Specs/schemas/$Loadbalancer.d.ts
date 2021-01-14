export declare const $Loadbalancer: {
    properties: {
        object_uuid: {
            type: string;
            format: string;
        };
        name: {
            type: string;
        };
        forwarding_rules: {
            type: string;
            contains: {
                properties: {};
            };
        };
        location_iata: {
            type: string;
        };
        location_uuid: {
            type: string;
            format: string;
        };
        backend_servers: {
            type: string;
            contains: {
                properties: {};
            };
        };
        change_time: {
            type: string;
            format: string;
        };
        status: {
            type: string;
        };
        current_price: {
            type: string;
            format: string;
        };
        location_country: {
            type: string;
            format: string;
        };
        redirect_http_to_https: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        location_name: {
            type: string;
            format: string;
        };
        usage_in_minutes: {
            type: string;
        };
        algorithm: {
            type: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        listen_ipv4_uuid: {
            type: string;
            format: string;
        };
        listen_ipv6_uuid: {
            type: string;
            format: string;
        };
    };
};
