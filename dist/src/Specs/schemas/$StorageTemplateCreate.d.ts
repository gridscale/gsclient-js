export declare const $StorageTemplateCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        snapshot_uuid: {
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
    };
};
