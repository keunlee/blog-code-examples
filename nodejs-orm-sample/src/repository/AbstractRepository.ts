import * as sequelize from "sequelize";
import {FindOptions, DestroyOptions} from "sequelize";

export abstract class AbstractRepository<TInstance, TAttributes> {
    protected models = require('../domain/sequelize-models');
    protected model : sequelize.Model<TInstance, TAttributes>;

    constructor() {
        this.setModel();
    }

    /**
     *
     */
    protected abstract setModel() : void;

    /**
     *
     * @param pojo
     * @returns {Promise<TInstance>}
     */
    public create( pojo : TAttributes) : Promise<TInstance> {
        return this.model.create( pojo );
    }

    /**
     *
     * @param options
     * @returns {Promise<TInstance[]>}
     */
    public findAll( options? : FindOptions ) : Promise<TInstance[]> {
        return this.model.findAll(options);
    }

    /**
     *
     * @param options
     * @returns {Promise<TInstance>}
     */
    public findOne(  options? : FindOptions ) : Promise<TInstance> {
        return this.model.findOne(options);
    }

    /**
     *
     * @param options
     * @returns {Promise<number>}
     */
    public deleteRecord(  options? : DestroyOptions ) : Promise<number> {
        return this.model.destroy(options);
    }
}