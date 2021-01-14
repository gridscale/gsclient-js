export declare const $StorageBackupScheduleCreate: {
    properties: {
        name: {
            type: string;
            isRequired: boolean;
        };
        run_interval: {
            type: string;
            isRequired: boolean;
            minimum: number;
        };
        keep_backups: {
            type: string;
            isRequired: boolean;
            minimum: number;
        };
        next_runtime: {
            type: string;
            isRequired: boolean;
            format: string;
        };
        active: {
            type: string;
            isRequired: boolean;
        };
    };
};
