"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotSchedulesinStorage = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotSchedulesinStorage = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            next_runtime: {
                type: 'string',
                format: 'date-time',
            },
            keep_snapshots: {
                type: 'number',
            },
            create_time: {
                type: 'string',
            },
            name: {
                type: 'string',
            },
            run_interval: {
                type: 'number',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

//# sourceMappingURL=$SnapshotSchedulesinStorage.js.map
