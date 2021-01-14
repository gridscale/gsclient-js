export declare const $MarketplaceApplicationCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        object_storage_path: {
            type: string;
            isRequired: boolean;
        };
        category: {
            type: string;
        };
        publish: {
            type: string;
        };
        setup: {
            properties: {
                cores: {
                    type: string;
                    isRequired: boolean;
                    maximum: number;
                    minimum: number;
                };
                memory: {
                    type: string;
                    isRequired: boolean;
                    maximum: number;
                    minimum: number;
                };
                capacity: {
                    type: string;
                    isRequired: boolean;
                    maximum: number;
                    minimum: number;
                };
            };
            isRequired: boolean;
        };
        metadata: {
            type: string;
        };
    };
};
