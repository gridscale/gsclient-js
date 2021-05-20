/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { AccumulatedUsage } from './AccumulatedUsage';
import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';

export type Loadbalancer = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * An array of objects containing the forwarding rules of the load balancer. The listen_port field specifies the entry port of the load balancer and the target_port field specifies the exit port that the load balancer uses to forward the traffic to the backend server. The load balancer supports HTTP and TCP modes. Furthermore, the load balancer supports SSL termination for letsencrypt and custom certificates (e.g., bring your own certificate). The certificate_uuid is the UUID of a custom certificate and is an optional field, but letsencrypt is a required field, which should be set to null if no letsencrypt is requested.
     */
    forwarding_rules?: Array<any>;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * The servers that this Load balancer can communicate with (see table below).
     */
    backend_servers?: Array<any>;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Deprecated
     */
    current_price?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Whether the Load balancer is forced to redirect requests from HTTP to HTTPS.
     */
    redirect_http_to_https?: boolean;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Total minutes of cores used
     */
    usage_in_minutes?: number;
    /**
     * The algorithm used to process requests. Accepted values: roundrobin / leastconn.
     */
    algorithm?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The UUID of the IPv4 address the Load balancer will listen to for incoming requests.
     */
    listen_ipv4_uuid?: string;
    /**
     * The UUID of the IPv6 address the Load balancer will listen to for incoming requests.
     */
    listen_ipv6_uuid?: string;
    current_usage_per_minute?: CurrentUsagePerMinute;
    accumulated_usage?: AccumulatedUsage;
}
