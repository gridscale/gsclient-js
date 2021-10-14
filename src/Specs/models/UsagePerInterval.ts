/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ProductUsage } from './ProductUsage';

export type UsagePerInterval = Array<{
    /**
     * Start accumulation period
     */
    interval_start?: string,
    /**
     * End accumulation period
     */
    interval_end?: string,
    /**
     * Accumulation of product's usage in given period
     */
    accumulated_usage?: Array<ProductUsage>,
}>;