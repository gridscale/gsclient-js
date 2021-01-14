export declare const $LoadbalancerUpdate: {
    properties: {
        name: {
            type: string;
        };
        forwarding_rules: {
            type: string;
            contains: {
                properties: {};
            };
        };
        backend_servers: {
            type: string;
            contains: {
                properties: {};
            };
        };
        status: {
            type: string;
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
        algorithm: {
            type: string;
        };
    };
};
