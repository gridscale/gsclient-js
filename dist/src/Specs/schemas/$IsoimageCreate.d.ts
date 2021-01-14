export declare const $IsoimageCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        source_url: {
            type: string;
            isRequired: boolean;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
    };
};
