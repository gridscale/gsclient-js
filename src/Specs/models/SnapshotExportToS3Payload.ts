/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SnapshotExportToS3Payload = {
    s3auth?: {
        host?: string,
        access_keys?: string,
        secret_key?: string,
    };
    s3data?: {
        host?: string,
        bucket?: string,
        filename?: string,
        private?: boolean,
    };
}
