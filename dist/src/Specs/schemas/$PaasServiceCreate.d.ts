export declare const $PaasServiceCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        paas_service_template_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        paas_security_zone_uuid: {
            type: string;
            format: string;
        };
        parameters: {
            type: string;
        };
        resource_limits: {
            type: string;
        };
    };
};
