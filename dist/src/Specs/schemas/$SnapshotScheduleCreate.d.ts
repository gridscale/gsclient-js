export declare const $SnapshotScheduleCreate: {
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
        run_interval: {
            type: string;
            isRequired: boolean;
            minimum: number;
        };
        keep_snapshots: {
            type: string;
            isRequired: boolean;
            minimum: number;
        };
        next_runtime: {
            type: string;
            format: string;
        };
    };
};
