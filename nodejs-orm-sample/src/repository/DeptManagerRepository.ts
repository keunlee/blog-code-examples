import {AbstractRepository} from "./AbstractRepository";
import {DeptManagerPojo, DeptManagerInstance} from "../domain/sequelize-types";

export class DepartmentsRepository extends AbstractRepository<DeptManagerInstance, DeptManagerPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.DeptManagerModel;
    }
}