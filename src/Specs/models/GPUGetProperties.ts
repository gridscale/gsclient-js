/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GPUGetProperties = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object, e.g., in-provisioning or active.
     */
    status?: string;
    /**
     * For system configuration on first boot. May contain cloud-config data or shell scripting, encoded as base64 string. Supported tools are cloud-init, Cloudbase-init, and Ignition.
     */
    user_data?: string;
    /**
     * The UUID of GPU flavor.
     */
    gpu_flavor_uuid?: string;
    slices?: number;
}
