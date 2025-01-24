/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaasDeprecatedCluster = {
    /**
     * The UUID of the deprecated cluster.
     */
    cluster_uuid?: string;
    /**
     * The name of the cluster.
     */
    cluster_name?: string;
    /**
     * The UUID of the containing project.
     */
    project_uuid?: string;
    /**
     * The full version of the cluster
     */
    version?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
}
