export declare const $SnapshotSchedule: {
    properties: {
        change_time: {
            type: string;
            format: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        keep_snapshots: {
            type: string;
            minimum: number;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        name: {
            type: string;
        };
        next_runtime: {
            type: string;
            format: string;
        };
        object_uuid: {
            type: string;
            format: string;
        };
        relations: {
            properties: {
                snapshots: {
                    type: string;
                    contains: {
                        properties: {
                            create_time: {
                                type: string;
                                format: string;
                            };
                            name: {
                                type: string;
                            };
                            object_uuid: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
        run_interval: {
            type: string;
            minimum: number;
        };
        status: {
            type: string;
        };
        storage_uuid: {
            type: string;
            format: string;
        };
    };
};
