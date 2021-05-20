/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SnapshotExportToS3Payload = {
    s3auth?: {
        access_keys?: string,
        secret_key?: string,
    };
    s3data?: {
        bucket?: string,
        filename?: string,
        private?: boolean,
    };
}
