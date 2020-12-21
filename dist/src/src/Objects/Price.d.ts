import { GridscaleObjects } from './GridscaleObjects';
declare class Price extends GridscaleObjects {
    constructor(_api: any);
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_callback?: any): any;
}
export { Price };
