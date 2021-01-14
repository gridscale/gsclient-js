export declare const $PaasServiceCredentials: {
    type: string;
    contains: {
        properties: {
            kubeconfig: {
                type: string;
            };
            expiration_time: {
                type: string;
                format: string;
            };
            password: {
                type: string;
            };
            username: {
                type: string;
            };
            type: {
                type: string;
                isRequired: boolean;
            };
        };
    };
};
