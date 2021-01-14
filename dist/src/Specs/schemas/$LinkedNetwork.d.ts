export declare const $LinkedNetwork: {
    properties: {
        network_type: {
            type: string;
        };
        l3security: {
            type: string;
            contains: {
                type: string;
            };
        };
        bootdevice: {
            type: string;
        };
        network_uuid: {
            type: string;
            format: string;
        };
        l2security: {
            type: string;
        };
        mac: {
            type: string;
        };
        ordering: {
            type: string;
        };
        firewall: {
            type: string;
        };
        firewall_template_uuid: {
            type: string;
            format: string;
        };
        object_name: {
            type: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        object_uuid: {
            type: string;
            format: string;
        };
        public_net: {
            type: string;
        };
    };
};
