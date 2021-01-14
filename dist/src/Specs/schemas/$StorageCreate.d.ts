export declare const $StorageCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        capacity: {
            type: string;
            isRequired: boolean;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        storage_type: {
            type: string;
        };
        template: {
            properties: {};
        };
    };
};
