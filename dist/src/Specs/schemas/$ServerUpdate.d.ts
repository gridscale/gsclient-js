export declare const $ServerUpdate: {
    properties: {
        name: {
            type: string;
        };
        cores: {
            type: string;
        };
        memory: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        availability_zone: {
            type: string;
        };
        auto_recovery: {
            type: string;
        };
    };
};
