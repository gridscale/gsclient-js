/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Types of GPUs which can be used in the specified location
 */
export type LocationRelationsGpuFlavor = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Name of the GPU flavor
     */
    name?: string;
    /**
     * Amount of memory per slice in gigabytes
     */
    memory_per_slice?: number;
    /**
     * Amount of graphics cards per slice
     */
    graphics_cards_per_slice?: number;
    /**
     * Amount of CPU cores per slice
     */
    cores_per_slice?: number;
    /**
     * Amount of storage per slice in gigabytes
     */
    local_storage_capacity_per_slice?: number;
    /**
     * Total amount of slices available of this flavor
     */
    max_slices?: number;
}
