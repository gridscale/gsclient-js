/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaasSecurityZoneUpdate = {
    /**
     * The new name you give to the security zone.
     */
    name?: string;
    /**
     * Identifies which data-center the object belongs to.
     */
    location_uuid?: string;
    /**
     * The UUID for the security zone you would like to update.
     */
    paas_security_zone_uuid?: string;
}
