import {GridscaleObjects} from './GridscaleObjects';


class Label extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/labels'); }


    /**
    * Get Single Object by UUID
    *
    * @param _uuid
    * @param _callback
    */
    remove(_uuid, _callback?) {
        console.info('client.Label.remove( uuid [, callback ] ) is deprecated and will get removed soon.');
        return this._api.remove(this._basepath + '/' + _uuid, _callback);
    }


    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    create(_attributes, _callback?) {
        console.info('client.Label.create( uuid [, callback ] ) is deprecated and will get removed soon.');
        return this._api.post(this._basepath, _attributes, _callback);
    }

}


export { Label }
