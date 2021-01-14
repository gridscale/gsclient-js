export declare const $NetworkCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        l2security: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
    };
};
