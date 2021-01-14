export declare const $PaasServiceMetrics: {
    type: string;
    contains: ({
        type: string;
        properties?: undefined;
    } | {
        properties: {
            paas_service_uuid: {
                type: string;
                format: string;
            };
            core_usage: {
                type: string;
            };
            storage_size: {
                type: string;
            };
        };
        type?: undefined;
    })[];
};
