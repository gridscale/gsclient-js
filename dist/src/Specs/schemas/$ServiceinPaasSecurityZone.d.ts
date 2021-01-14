export declare const $ServiceinPaasSecurityZone: {
    type: string;
    contains: {
        properties: {
            object_uuid: {
                type: string;
                format: string;
            };
            listen_ports: {
                type: string;
            };
            name: {
                type: string;
            };
            service_template_uuid: {
                type: string;
                format: string;
            };
            credentials: {
                type: string;
            };
            resources: {
                properties: {};
            };
            security_zone_uuid: {
                type: string;
                format: string;
            };
            parameters: {
                properties: {};
            };
        };
    };
};
