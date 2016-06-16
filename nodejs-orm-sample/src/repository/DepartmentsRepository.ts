import {AbstractRepository} from "./AbstractRepository";
import {DepartmentsPojo, DepartmentsInstance} from "../domain/sequelize-types";

export class DepartmentsRepository extends AbstractRepository<DepartmentsInstance, DepartmentsPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.DepartmentsModel;
    }
}