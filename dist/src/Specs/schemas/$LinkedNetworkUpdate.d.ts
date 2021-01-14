export declare const $LinkedNetworkUpdate: {
    properties: {
        ordering: {
            type: string;
        };
        bootdevice: {
            type: string;
        };
        l3security: {
            type: string;
            contains: {
                type: string;
            };
        };
        firewall: {
            type: string;
        };
        firewall_template_uuid: {
            type: string;
            format: string;
        };
    };
};
