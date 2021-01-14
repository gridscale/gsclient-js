export declare const $PaasServiceUpdate: {
    properties: {
        name: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        parameters: {
            type: string;
        };
        resource_limits: {
            type: string;
        };
        paas_service_template_uuid: {
            type: string;
            format: string;
        };
    };
};
