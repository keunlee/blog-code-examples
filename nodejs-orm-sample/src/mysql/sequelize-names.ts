////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    departmentFields:DepartmentsFields;
    dept_empFields:DeptEmpFields;
    dept_managerFields:DeptManagerFields;
    employeeFields:EmployeesFields;
    salaryFields:SalariesFields;
    titleFields:TitlesFields;
}

export class TableNames {
    departments:string = 'departments';
    dept_emp:string = 'dept_emp';
    dept_manager:string = 'dept_manager';
    employees:string = 'employees';
    salaries:string = 'salaries';
    titles:string = 'titles';
}
export var tableNames:TableNames = new TableNames();

export class DepartmentsFields {
    dept_no:string = 'dept_no';
    dept_name:string = 'dept_name';
}
export var departmentsFields:DepartmentsFields = new DepartmentsFields();


export class DeptEmpFields {
    emp_no:string = 'emp_no';
    dept_no:string = 'dept_no';
    from_date:string = 'from_date';
    to_date:string = 'to_date';
    employee:string = 'employee';
    department:string = 'department';
}
export var deptEmpFields:DeptEmpFields = new DeptEmpFields();


export class DeptManagerFields {
    dept_no:string = 'dept_no';
    emp_no:string = 'emp_no';
    from_date:string = 'from_date';
    to_date:string = 'to_date';
    employee:string = 'employee';
    department:string = 'department';
}
export var deptManagerFields:DeptManagerFields = new DeptManagerFields();


export class EmployeesFields {
    emp_no:string = 'emp_no';
    birth_date:string = 'birth_date';
    first_name:string = 'first_name';
    last_name:string = 'last_name';
    gender:string = 'gender';
    hire_date:string = 'hire_date';
}
export var employeesFields:EmployeesFields = new EmployeesFields();


export class SalariesFields {
    emp_no:string = 'emp_no';
    salary:string = 'salary';
    from_date:string = 'from_date';
    to_date:string = 'to_date';
    employee:string = 'employee';
}
export var salariesFields:SalariesFields = new SalariesFields();


export class TitlesFields {
    emp_no:string = 'emp_no';
    title:string = 'title';
    from_date:string = 'from_date';
    to_date:string = 'to_date';
    employee:string = 'employee';
}
export var titlesFields:TitlesFields = new TitlesFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    emp_no:types.Reference = { tableName: 'employees', primaryKey: 'employeeId', foreignKey: 'emp_no', as: undefined};
    dept_no:types.Reference = { tableName: 'departments', primaryKey: 'departmentId', foreignKey: 'dept_no', as: undefined};
}

export var references:References = new References();
