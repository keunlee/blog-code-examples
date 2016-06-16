import {AbstractRepository} from "./AbstractRepository";
import {SalariesPojo, SalariesInstance} from "../domain/sequelize-types";

export class SalariesRepository extends AbstractRepository<SalariesInstance, SalariesPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.SalariesModel;
    }
}