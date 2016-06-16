import {AbstractRepository} from "./AbstractRepository";
import {TitlesPojo, TitlesInstance} from "../domain/sequelize-types";

export class TitlesRepository extends AbstractRepository<TitlesInstance, TitlesPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.TitlesModel;
    }
}