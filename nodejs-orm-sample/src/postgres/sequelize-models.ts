////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../typings/main.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var DepartmentsModel:types.DepartmentsModel;
export var DeptEmpModel:types.DeptEmpModel;
export var DeptManagerModel:types.DeptManagerModel;
export var EmployeesModel:types.EmployeesModel;
export var SalariesModel:types.SalariesModel;
export var TitlesModel:types.TitlesModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    DepartmentsModel = <types.DepartmentsModel> SEQUELIZE.define<types.DepartmentsInstance, types.DepartmentsPojo>('department', {
        'dept_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'dept_name': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetDepartments:(department:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(department);
                    if (isNaN(id)) {
                        if (department['dept_no'] !== undefined) { where['dept_no'] = department['dept_no']}
                        if (department['dept_name'] !== undefined) { where['dept_name'] = department['dept_name']}
                    } else {
                        where['!!cannotFindIdFieldOndepartments!!'] = id;
                    }
                    return DepartmentsModel.find({where: where});
                }
            }
        });
    
    DeptEmpModel = <types.DeptEmpModel> SEQUELIZE.define<types.DeptEmpInstance, types.DeptEmpPojo>('dept_emp', {
        'emp_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'dept_no': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'from_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined},
        'to_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetDeptEmp:(dept_emp:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(dept_emp);
                    if (isNaN(id)) {
                        if (dept_emp['emp_no'] !== undefined) { where['emp_no'] = dept_emp['emp_no']}
                        if (dept_emp['dept_no'] !== undefined) { where['dept_no'] = dept_emp['dept_no']}
                        if (dept_emp['from_date'] !== undefined) { where['from_date'] = dept_emp['from_date']}
                        if (dept_emp['to_date'] !== undefined) { where['to_date'] = dept_emp['to_date']}
                    } else {
                        where['!!cannotFindIdFieldOndept_emp!!'] = id;
                    }
                    return DeptEmpModel.find({where: where});
                }
            }
        });
    
    DeptManagerModel = <types.DeptManagerModel> SEQUELIZE.define<types.DeptManagerInstance, types.DeptManagerPojo>('dept_manager', {
        'dept_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'emp_no': {type: Sequelize.INTEGER, allowNull: false, defaultValue: undefined},
        'from_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined},
        'to_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetDeptManager:(dept_manager:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(dept_manager);
                    if (isNaN(id)) {
                        if (dept_manager['dept_no'] !== undefined) { where['dept_no'] = dept_manager['dept_no']}
                        if (dept_manager['emp_no'] !== undefined) { where['emp_no'] = dept_manager['emp_no']}
                        if (dept_manager['from_date'] !== undefined) { where['from_date'] = dept_manager['from_date']}
                        if (dept_manager['to_date'] !== undefined) { where['to_date'] = dept_manager['to_date']}
                    } else {
                        where['!!cannotFindIdFieldOndept_manager!!'] = id;
                    }
                    return DeptManagerModel.find({where: where});
                }
            }
        });
    
    EmployeesModel = <types.EmployeesModel> SEQUELIZE.define<types.EmployeesInstance, types.EmployeesPojo>('employee', {
        'emp_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'birth_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined},
        'first_name': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'last_name': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'gender': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'hire_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetEmployees:(employee:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(employee);
                    if (isNaN(id)) {
                        if (employee['emp_no'] !== undefined) { where['emp_no'] = employee['emp_no']}
                        if (employee['birth_date'] !== undefined) { where['birth_date'] = employee['birth_date']}
                        if (employee['first_name'] !== undefined) { where['first_name'] = employee['first_name']}
                        if (employee['last_name'] !== undefined) { where['last_name'] = employee['last_name']}
                        if (employee['gender'] !== undefined) { where['gender'] = employee['gender']}
                        if (employee['hire_date'] !== undefined) { where['hire_date'] = employee['hire_date']}
                    } else {
                        where['!!cannotFindIdFieldOnemployees!!'] = id;
                    }
                    return EmployeesModel.find({where: where});
                }
            }
        });
    
    SalariesModel = <types.SalariesModel> SEQUELIZE.define<types.SalariesInstance, types.SalariesPojo>('salary', {
        'emp_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'salary': {type: Sequelize.INTEGER, allowNull: false, defaultValue: undefined},
        'from_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined},
        'to_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetSalaries:(salary:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(salary);
                    if (isNaN(id)) {
                        if (salary['emp_no'] !== undefined) { where['emp_no'] = salary['emp_no']}
                        if (salary['salary'] !== undefined) { where['salary'] = salary['salary']}
                        if (salary['from_date'] !== undefined) { where['from_date'] = salary['from_date']}
                        if (salary['to_date'] !== undefined) { where['to_date'] = salary['to_date']}
                    } else {
                        where['!!cannotFindIdFieldOnsalaries!!'] = id;
                    }
                    return SalariesModel.find({where: where});
                }
            }
        });
    
    TitlesModel = <types.TitlesModel> SEQUELIZE.define<types.TitlesInstance, types.TitlesPojo>('title', {
        'emp_no': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'title': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'from_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined},
        'to_date': {type: Sequelize.DATE, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetTitles:(title:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(title);
                    if (isNaN(id)) {
                        if (title['emp_no'] !== undefined) { where['emp_no'] = title['emp_no']}
                        if (title['title'] !== undefined) { where['title'] = title['title']}
                        if (title['from_date'] !== undefined) { where['from_date'] = title['from_date']}
                        if (title['to_date'] !== undefined) { where['to_date'] = title['to_date']}
                    } else {
                        where['!!cannotFindIdFieldOntitles!!'] = id;
                    }
                    return TitlesModel.find({where: where});
                }
            }
        });
    
    EmployeesModel.hasMany(SalariesModel, {foreignKey: 'emp_no' });
    SalariesModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'emp_no' });

    
    EmployeesModel.hasMany(TitlesModel, {foreignKey: 'emp_no' });
    TitlesModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'emp_no' });

    
    DepartmentsModel.hasMany(DeptEmpModel, {foreignKey: 'dept_no' });
    DeptEmpModel.belongsTo(DepartmentsModel, {as: undefined, foreignKey: 'dept_no' });

    
    EmployeesModel.hasMany(DeptEmpModel, {foreignKey: 'emp_no' });
    DeptEmpModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'emp_no' });

    
    DepartmentsModel.hasMany(DeptManagerModel, {foreignKey: 'dept_no' });
    DeptManagerModel.belongsTo(DepartmentsModel, {as: undefined, foreignKey: 'dept_no' });

    
    EmployeesModel.hasMany(DeptManagerModel, {foreignKey: 'emp_no' });
    DeptManagerModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'emp_no' });

    
    return exports;
}
