/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoadbalancerUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * An array of objects containing the forwarding rules of the load balancer. The listen_port field specifies the entry port of the load balancer and the target_port field specifies the exit port that the load balancer uses to forward the traffic to the backend server. The load balancer supports HTTP and TCP modes. Furthermore, the load balancer supports SSL termination for letsencrypt and custom certificates (e.g., bring your own certificate). The certificate_uuid is the UUID of a custom certificate and is an optional field, but letsencrypt is a required field, which should be set to null if no letsencrypt is requested.
     */
    forwarding_rules?: Array<any>;
    /**
     * The servers that this Load balancer can communicate with
     */
    backend_servers?: Array<any>;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Whether the Load balancer is forced to redirect requests from HTTP to HTTPS.
     */
    redirect_http_to_https?: boolean;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The algorithm used to process requests. Accepted values: roundrobin / leastconn.
     */
    algorithm?: string;
}
