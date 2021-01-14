export declare const $ServerinNetwork: {
    type: string;
    contains: {
        properties: {
            bootdevice: {
                type: string;
            };
            create_time: {
                type: string;
                format: string;
            };
            l3security: {
                type: string;
                contains: {
                    type: string;
                };
            };
            mac: {
                type: string;
            };
            network_uuid: {
                type: string;
            };
            object_name: {
                type: string;
            };
            object_uuid: {
                type: string;
                format: string;
            };
            ordering: {
                type: string;
            };
        };
    };
};
