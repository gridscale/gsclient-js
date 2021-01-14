export declare const $SnapshotExportToS3Payload: {
    properties: {
        s3auth: {
            properties: {
                host: {
                    type: string;
                };
                access_keys: {
                    type: string;
                };
                secret_key: {
                    type: string;
                };
            };
        };
        s3data: {
            properties: {
                host: {
                    type: string;
                };
                bucket: {
                    type: string;
                };
                filename: {
                    type: string;
                };
                private: {
                    type: string;
                };
            };
        };
    };
};
