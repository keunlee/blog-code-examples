import {AbstractRepository} from "./AbstractRepository";
import {DeptEmpPojo, DeptEmpInstance} from "../domain/sequelize-types";

export class DepartmentsRepository extends AbstractRepository<DeptEmpInstance, DeptEmpPojo> {

    constructor() {
        super();
    }

    protected setModel() : void {
        this.model = this.models.DeptEmpModel;
    }
}