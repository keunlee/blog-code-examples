"use strict";
var moment = require("moment");
var chai_1 = require("chai");
var EmployeesRepository_1 = require("../src/repository/EmployeesRepository");
var models = require('../src/domain/sequelize-models');
var packageJson = require('../package.json');
var AsyncDone = function (fn) {
    var self = this;
    var called = false;
    this.trigger = function (params) {
        if (called) {
            return;
        }
        fn.apply(self, arguments);
        called = true;
    };
};
var employeesRepository = null;
var employees = null;
describe('Employee Repository Test Suit', function () {
    before(function (done) {
        var asyncDone = new AsyncDone(done);
        models.initialize(packageJson.databaseConfig.database, packageJson.databaseConfig.username, packageJson.databaseConfig.password, {
            dialect: packageJson.databaseConfig.dialect,
            define: {
                timestamps: false,
                freezeTableName: false
            }
        });
        employeesRepository = new EmployeesRepository_1.EmployeesRepository();
        asyncDone.trigger();
    });
    it('should verify repository "findAll" operation', function (done) {
        var asyncDone = new AsyncDone(done);
        employeesRepository.findAll()
            .then(function (result) {
            employees = result;
            chai_1.assert.isNotNull(employees);
            chai_1.assert.isTrue(employees.length > 0);
            asyncDone.trigger();
        })
            .done(function (error) {
            asyncDone.trigger(error);
        });
    });
    it('should verify repository "create" operation', function (done) {
        var asyncDone = new AsyncDone(done);
        var newEmp = {
            emp_no: 999999,
            birth_date: moment("01-01-1975 HH:mm", "MM-DD-YYYY 00:00").toDate(),
            hire_date: new Date(),
            first_name: "John",
            last_name: "Doe",
            gender: "M"
        };
        employeesRepository.create(newEmp)
            .then(function (result) {
            chai_1.assert.isNotNull(result);
            chai_1.assert.equal(result.emp_no, newEmp.emp_no);
            chai_1.assert.equal(result.first_name, newEmp.first_name);
            chai_1.assert.equal(result.last_name, newEmp.last_name);
            chai_1.assert.equal(result.gender, newEmp.gender);
            asyncDone.trigger();
        })
            .done(function (error) {
            asyncDone.trigger(error);
        });
    });
    it('should verify repository "findOne" operation', function (done) {
        var asyncDone = new AsyncDone(done);
        employeesRepository.findOne({ where: { emp_no: 999999 } })
            .then(function (result) {
            chai_1.assert.isNotNull(result);
            chai_1.assert.equal(result.emp_no, 999999);
            asyncDone.trigger();
        })
            .done(function (error) {
            asyncDone.trigger(error);
        });
    });
    it('should verify repository "delete" operation', function (done) {
        var asyncDone = new AsyncDone(done);
        employeesRepository.deleteRecord({ where: { emp_no: 999999 } })
            .then(function (result) {
            chai_1.assert.equal(result, 1);
            return employeesRepository.findOne({ where: { emp_no: 999999 } });
        })
            .then(function (result) {
            chai_1.assert.isNull(result);
            asyncDone.trigger();
        })
            .done(function (error) {
            asyncDone.trigger(error);
        });
    });
});
//# sourceMappingURL=EmployeesRepository.spec.js.map