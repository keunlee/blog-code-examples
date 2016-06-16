///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
import {EmployeesRepository} from "../src/repository/EmployeesRepository";
import {EmployeesInstance, EmployeesPojo} from "../src/domain/sequelize-types";
import models = require('../src/domain/sequelize-models');
let packageJson = require('../package.json');

let AsyncDone = function (fn) {
    let self = this;
    let called = false;

    this.trigger = function (params) {
        if (called) {
            return;
        }

        fn.apply(self, arguments);
        called = true;
    };
};

let employeesRepository : EmployeesRepository = null;
let employees : EmployeesInstance[] = null;

describe('Employee Repository Test Suit', function () {
    before(function (done) {
        let asyncDone = new AsyncDone(done);

        models.initialize(packageJson.databaseConfig.database, packageJson.databaseConfig.username, packageJson.databaseConfig.password, {
            dialect : packageJson.databaseConfig.dialect,
            define : {
                timestamps : false,
                freezeTableName : false
            }
        });

        employeesRepository = new EmployeesRepository();
        asyncDone.trigger();
    });

    it('should verify repository "findAll" operation', function (done) {
        let asyncDone = new AsyncDone(done);

        employeesRepository.findAll()
            .then((result : EmployeesInstance[]) => {
                employees = result;
                assert.isNotNull(employees);
                assert.isTrue(employees.length > 0);
                asyncDone.trigger();
            })
            .done((error : any) => {
                asyncDone.trigger(error);
            });
    });

    it('should verify repository "create" operation', function (done) {
        let asyncDone = new AsyncDone(done);

        let newEmp : EmployeesPojo = {
            emp_no : 999999,
            birth_date : moment("01-01-1975 HH:mm", "MM-DD-YYYY 00:00").toDate(),
            hire_date : new Date(),
            first_name : "John",
            last_name : "Doe",
            gender : "M"
        };

        employeesRepository.create(newEmp)
            .then((result : EmployeesInstance) => {
                assert.isNotNull(result);
                assert.equal(result.emp_no, newEmp.emp_no);
                assert.equal(result.first_name, newEmp.first_name);
                assert.equal(result.last_name, newEmp.last_name);
                assert.equal(result.gender, newEmp.gender);
                asyncDone.trigger();
            })
            .done((error : any) => {
                asyncDone.trigger(error);
            });
    });

    it('should verify repository "findOne" operation', function (done) {
        let asyncDone = new AsyncDone(done);

        employeesRepository.findOne({where : {emp_no : 999999}})
            .then((result : EmployeesInstance) => {
                assert.isNotNull(result);
                assert.equal(result.emp_no, 999999);
                asyncDone.trigger();
            })
            .done((error : any) => {
                asyncDone.trigger(error);
            });
    });

    it('should verify repository "delete" operation', function (done) {
        let asyncDone = new AsyncDone(done);

        employeesRepository.deleteRecord({where : {emp_no : 999999}})
            .then((result : number) => {
                assert.equal(result, 1);
                return employeesRepository.findOne({where : {emp_no : 999999}});
            })
            .then((result : EmployeesInstance) => {
                assert.isNull(result);
                asyncDone.trigger();
            })
            .done((error : any) => {
                asyncDone.trigger(error);
            });
    });
});