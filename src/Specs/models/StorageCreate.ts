/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { StorageType } from './StorageType';
import { StorageVariant } from './StorageVariant';

export type StorageCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * Required (integer - minimum: 1 - maximum: 4096).
     */
    capacity: number;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    storage_type?: StorageType;
    storage_variant?: StorageVariant;
    /**
     * An object holding important values such as hostnames, passwords, and SSH keys. Creating a storage with a template is required sshkey and/or password. Windows template is only accepted password
     */
    template?: any;
}
