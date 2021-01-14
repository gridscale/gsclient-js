export declare const $StorageCreateTemplateSshkey: {
    properties: {
        template_uuid: {
            type: string;
            isRequired: boolean;
            format: string;
        };
        hostname: {
            type: string;
        };
        sshkeys: {
            type: string;
            contains: {
                type: string;
            };
            isRequired: boolean;
        };
    };
};
