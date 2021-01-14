export declare const $LoadbalancerCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        forwarding_rules: {
            type: string;
            contains: {
                properties: {};
            };
            isRequired: boolean;
        };
        backend_servers: {
            type: string;
            contains: {
                properties: {};
            };
            isRequired: boolean;
        };
        status: {
            type: string;
        };
        redirect_http_to_https: {
            type: string;
            isRequired: boolean;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
            isRequired: boolean;
        };
        algorithm: {
            type: string;
            isRequired: boolean;
        };
        listen_ipv4_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
        listen_ipv6_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
    };
};
