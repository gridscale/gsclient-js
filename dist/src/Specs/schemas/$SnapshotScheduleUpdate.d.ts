export declare const $SnapshotScheduleUpdate: {
    properties: {
        name: {
            type: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        run_interval: {
            type: string;
            minimum: number;
        };
        keep_snapshots: {
            type: string;
            minimum: number;
        };
        next_runtime: {
            type: string;
            format: string;
        };
    };
};
