/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Metrics } from './Metrics';
import { MetricsValue } from './MetricsValue';

export type PaasServiceMetrics = (Metrics & {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    paas_service_uuid?: string,
    core_usage?: MetricsValue,
    storage_size?: MetricsValue,
});
