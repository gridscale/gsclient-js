/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GPUCreateBody = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The UUID of GPU flavor.
     */
    gpu_flavor_uuid: string;
    /**
     * The number of slices.
     */
    slices: number;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * For system configuration on first boot. May contain cloud-config data or shell scripting, encoded as base64 string. Supported tools are cloud-init, Cloudbase-init, and Ignition.
     */
    user_data?: string;
}
