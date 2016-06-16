import {AbstractRepository} from "./AbstractRepository";
import {EmployeesPojo, EmployeesInstance} from "../domain/sequelize-types";

export class EmployeesRepository extends AbstractRepository<EmployeesInstance, EmployeesPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.EmployeesModel;
    }
}