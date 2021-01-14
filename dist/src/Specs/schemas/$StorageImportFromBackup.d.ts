export declare const $StorageImportFromBackup: {
    properties: {
        backup: {
            properties: {
                name: {
                    type: string;
                };
                backup_uuid: {
                    type: string;
                    isRequired: boolean;
                    format: string;
                };
            };
            isRequired: boolean;
        };
    };
};
