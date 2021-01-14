"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SnapshotExportToS3Payload = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SnapshotExportToS3Payload = {
    properties: {
        s3auth: {
            properties: {
                host: {
                    type: 'string',
                },
                access_keys: {
                    type: 'string',
                },
                secret_key: {
                    type: 'string',
                },
            },
        },
        s3data: {
            properties: {
                host: {
                    type: 'string',
                },
                bucket: {
                    type: 'string',
                },
                filename: {
                    type: 'string',
                },
                private: {
                    type: 'boolean',
                },
            },
        },
    },
};

//# sourceMappingURL=$SnapshotExportToS3Payload.js.map
