////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../typings/index.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types'); // important so we can use same fully qualified names in all generated files


var asserters:{[typeName:string]:(pojo:any, allowUndefined?:boolean) => void} = {};

//////////////////////////////////////////////////////////////////////////////
//
//
//               departments
//
//
//////////////////////////////////////////////////////////////////////////////


export interface DepartmentsPojo
{
    dept_no:string;
    dept_name:string;
}

export interface DepartmentsInstance extends sequelize.Instance<DepartmentsPojo>, DepartmentsPojo { }

export interface DepartmentsModel extends sequelize.Model<DepartmentsInstance, DepartmentsPojo> { }

export function AssertValidDepartments(pojo:DepartmentsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid department provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid department provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'dept_no': assertValidFieldType('department', 'dept_no', pojo, 'string'); break;
            case 'dept_name': assertValidFieldType('department', 'dept_name', pojo, 'string'); break;
            default:
                throw new Error('Invalid department provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['department'] = AssertValidDepartments;





//////////////////////////////////////////////////////////////////////////////
//
//
//               dept_emp
//
//
//////////////////////////////////////////////////////////////////////////////


export interface DeptEmpPojo
{
    emp_no:number;
    dept_no:string;
    from_date:Date;
    to_date:Date;
    department?:DepartmentsPojo;
    employee?:EmployeesPojo;
}

export interface DeptEmpInstance extends sequelize.Instance<DeptEmpPojo>, DeptEmpPojo { }

export interface DeptEmpModel extends sequelize.Model<DeptEmpInstance, DeptEmpPojo> { }

export function AssertValidDeptEmp(pojo:DeptEmpPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid dept_emp provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid dept_emp provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'emp_no': assertValidFieldType('dept_emp', 'emp_no', pojo, 'number'); break;
            case 'dept_no': assertValidFieldType('dept_emp', 'dept_no', pojo, 'string'); break;
            case 'from_date': assertValidFieldType('dept_emp', 'from_date', pojo, 'Date'); break;
            case 'to_date': assertValidFieldType('dept_emp', 'to_date', pojo, 'Date'); break;
            case 'department': assertValidFieldType('dept_emp', 'department', pojo, 'DepartmentsPojo'); break;
            case 'employee': assertValidFieldType('dept_emp', 'employee', pojo, 'EmployeesPojo'); break;
            default:
                throw new Error('Invalid dept_emp provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['dept_emp'] = AssertValidDeptEmp;





//////////////////////////////////////////////////////////////////////////////
//
//
//               dept_manager
//
//
//////////////////////////////////////////////////////////////////////////////


export interface DeptManagerPojo
{
    dept_no:string;
    emp_no:number;
    from_date:Date;
    to_date:Date;
    department?:DepartmentsPojo;
    employee?:EmployeesPojo;
}

export interface DeptManagerInstance extends sequelize.Instance<DeptManagerPojo>, DeptManagerPojo { }

export interface DeptManagerModel extends sequelize.Model<DeptManagerInstance, DeptManagerPojo> { }

export function AssertValidDeptManager(pojo:DeptManagerPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid dept_manager provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid dept_manager provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'dept_no': assertValidFieldType('dept_manager', 'dept_no', pojo, 'string'); break;
            case 'emp_no': assertValidFieldType('dept_manager', 'emp_no', pojo, 'number'); break;
            case 'from_date': assertValidFieldType('dept_manager', 'from_date', pojo, 'Date'); break;
            case 'to_date': assertValidFieldType('dept_manager', 'to_date', pojo, 'Date'); break;
            case 'department': assertValidFieldType('dept_manager', 'department', pojo, 'DepartmentsPojo'); break;
            case 'employee': assertValidFieldType('dept_manager', 'employee', pojo, 'EmployeesPojo'); break;
            default:
                throw new Error('Invalid dept_manager provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['dept_manager'] = AssertValidDeptManager;





//////////////////////////////////////////////////////////////////////////////
//
//
//               employees
//
//
//////////////////////////////////////////////////////////////////////////////


export interface EmployeesPojo
{
    emp_no:number;
    birth_date:Date;
    first_name:string;
    last_name:string;
    gender:string;
    hire_date:Date;
}

export interface EmployeesInstance extends sequelize.Instance<EmployeesPojo>, EmployeesPojo { }

export interface EmployeesModel extends sequelize.Model<EmployeesInstance, EmployeesPojo> { }

export function AssertValidEmployees(pojo:EmployeesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid employee provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid employee provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'emp_no': assertValidFieldType('employee', 'emp_no', pojo, 'number'); break;
            case 'birth_date': assertValidFieldType('employee', 'birth_date', pojo, 'Date'); break;
            case 'first_name': assertValidFieldType('employee', 'first_name', pojo, 'string'); break;
            case 'last_name': assertValidFieldType('employee', 'last_name', pojo, 'string'); break;
            case 'gender': assertValidFieldType('employee', 'gender', pojo, 'string'); break;
            case 'hire_date': assertValidFieldType('employee', 'hire_date', pojo, 'Date'); break;
            default:
                throw new Error('Invalid employee provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['employee'] = AssertValidEmployees;





//////////////////////////////////////////////////////////////////////////////
//
//
//               salaries
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SalariesPojo
{
    emp_no:number;
    salary:number;
    from_date:Date;
    to_date:Date;
    employee?:EmployeesPojo;
}

export interface SalariesInstance extends sequelize.Instance<SalariesPojo>, SalariesPojo { }

export interface SalariesModel extends sequelize.Model<SalariesInstance, SalariesPojo> { }

export function AssertValidSalaries(pojo:SalariesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid salary provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid salary provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'emp_no': assertValidFieldType('salary', 'emp_no', pojo, 'number'); break;
            case 'salary': assertValidFieldType('salary', 'salary', pojo, 'number'); break;
            case 'from_date': assertValidFieldType('salary', 'from_date', pojo, 'Date'); break;
            case 'to_date': assertValidFieldType('salary', 'to_date', pojo, 'Date'); break;
            case 'employee': assertValidFieldType('salary', 'employee', pojo, 'EmployeesPojo'); break;
            default:
                throw new Error('Invalid salary provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['salary'] = AssertValidSalaries;





//////////////////////////////////////////////////////////////////////////////
//
//
//               titles
//
//
//////////////////////////////////////////////////////////////////////////////


export interface TitlesPojo
{
    emp_no:number;
    title:string;
    from_date:Date;
    to_date:Date;
    employee?:EmployeesPojo;
}

export interface TitlesInstance extends sequelize.Instance<TitlesPojo>, TitlesPojo { }

export interface TitlesModel extends sequelize.Model<TitlesInstance, TitlesPojo> { }

export function AssertValidTitles(pojo:TitlesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid title provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid title provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'emp_no': assertValidFieldType('title', 'emp_no', pojo, 'number'); break;
            case 'title': assertValidFieldType('title', 'title', pojo, 'string'); break;
            case 'from_date': assertValidFieldType('title', 'from_date', pojo, 'Date'); break;
            case 'to_date': assertValidFieldType('title', 'to_date', pojo, 'Date'); break;
            case 'employee': assertValidFieldType('title', 'employee', pojo, 'EmployeesPojo'); break;
            default:
                throw new Error('Invalid title provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['title'] = AssertValidTitles;





var BOOLEAN_TYPE:string = typeof(true);
var NUMBER_TYPE:string = typeof(1);
var STRING_TYPE:string = typeof('');
var FUNCTION_TYPE:string = typeof(function() {});
var DATE_EXPECTED_TYPE:string = 'Date';
var BUFFER_EXPECTED_TYPE:string = 'Buffer';
var BUFFER_EXISTS:boolean = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node

function assertValidFieldType(pojoName:string, fieldName:string, pojo:any, expectedType:string):void {

    var value:any = pojo[fieldName];
    var actualType:string = typeof value;

    if (value === undefined || value === null) {
        return;
    }

    switch(expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;

        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue:number = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;

        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;

        case DATE_EXPECTED_TYPE:
            var getTime:Function = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue:number = value.getTime();
                if (isNaN(timeValue)){
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }

            if (actualType === STRING_TYPE) {
                var newDate:Date = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;

        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }

            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }

    // one pojo of array of array of pojos?
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType:string = expectedType.substr(0, expectedType.length - 6);

        var asserter:Function = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }

        if (isNaN(value.length)) {
            err();
        }
        for(var i:number = 0; i<value.length; i++) {
            try {
                asserter(value[i], true);
            } catch(e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }

        // all instances valid
        return;
    }

    var asserter:Function = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }

    try {
        asserter(value, true);
    } catch(e) {
        err(e.message);
    }

    function err(extraMessage?:string):void {
        var message:string = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }

    function expectedTypeErr():void {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}

function safeValue(value:any):string {

    if (value === undefined || value === null) {
        return typeof value;
    }

    var s:string = value.toString();
    return s.substr(0, 100);
}

export interface Reference {
    tableName:string;
    primaryKey:string;
    foreignKey:string;
    as:string;
}
