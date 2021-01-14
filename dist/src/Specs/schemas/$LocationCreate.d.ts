export declare const $LocationCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        parent_location_uuid: {
            type: string;
            isRequired: boolean;
        };
        cpunode_count: {
            type: string;
            isRequired: boolean;
        };
        product_no: {
            type: string;
            isRequired: boolean;
        };
    };
};
