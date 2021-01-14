export declare const $StorageCreateTemplatePassword: {
    properties: {
        template_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
        hostname: {
            type: string;
        };
        password: {
            type: string;
            isRequired: boolean;
        };
        password_type: {
            type: string;
            isRequired: boolean;
        };
    };
};
