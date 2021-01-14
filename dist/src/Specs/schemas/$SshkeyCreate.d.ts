export declare const $SshkeyCreate: {
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
        sshkey: {
            type: string;
        };
    };
};
