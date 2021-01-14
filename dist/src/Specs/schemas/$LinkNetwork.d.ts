export declare const $LinkNetwork: {
    properties: {
        object_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
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
