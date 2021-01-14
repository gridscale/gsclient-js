export declare const $StorageBackupScheduleUpdate: {
    properties: {
        name: {
            type: string;
        };
        run_interval: {
            type: string;
            minimum: number;
        };
        keep_backups: {
            type: string;
            minimum: number;
        };
        next_runtime: {
            type: string;
            format: string;
        };
        active: {
            type: string;
        };
    };
};
