export declare const $ServerCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        cores: {
            type: string;
            isRequired: boolean;
        };
        memory: {
            type: string;
            isRequired: boolean;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        status: {
            type: string;
        };
        availability_zone: {
            type: string;
        };
        auto_recovery: {
            type: string;
        };
        hardware_profile: {
            type: string;
        };
    };
};
