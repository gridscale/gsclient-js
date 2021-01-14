/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageImportFromS3Object = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The source URL from which the object should be downloaded.
     */
    url: string;
    /**
     * The extension of source gz,iso, ..., but for now we will support gz
     */
    extension: StorageImportFromS3Object.extension;
}

export namespace StorageImportFromS3Object {

    /**
     * The extension of source gz,iso, ..., but for now we will support gz
     */
    export enum extension {
        GZ = 'gz',
    }


}
