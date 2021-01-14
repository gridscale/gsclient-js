export declare const $IpCreate: {
    properties: {
        family: {
            type: string;
            isRequired: boolean;
        };
        failover: {
            type: string;
        };
        reverse_dns: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        name: {
            type: string;
        };
    };
};
