export declare const $PaasServiceTemplate: {
    properties: {
        name: {
            type: string;
        };
        object_uuid: {
            type: string;
            format: string;
        };
        category: {
            type: string;
        };
        flavour: {
            type: string;
        };
        version: {
            type: string;
        };
        performance_class: {
            type: string;
        };
        version_upgrades: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
        performance_class_updates: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
        patch_updates: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        product_no: {
            type: string;
        };
        discount_product_no: {
            type: string;
        };
        discount_period: {
            type: string;
        };
        resources: {
            properties: {
                memory: {
                    type: string;
                };
                connections: {
                    type: string;
                };
            };
        };
        status: {
            type: string;
        };
        parameters_schema: {
            type: string;
        };
    };
};
