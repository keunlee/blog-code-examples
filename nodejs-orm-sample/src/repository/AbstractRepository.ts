import sequelize = require('sequelize');
import {FindOptions} from "sequelize";
import {DestroyOptions} from "sequelize";

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
     * @returns {Promise<TInstance[]>}
     */
    public findAll() : Promise<TInstance[]> {
        return this.model.findAll();
    }
    
    public findOne(  options? : FindOptions ) : Promise<TInstance> {
        return this.model.findOne(options);
    }

    public deleteRecord(  options? : DestroyOptions ) : Promise<number> {
        return this.model.destroy(options);
    }
}