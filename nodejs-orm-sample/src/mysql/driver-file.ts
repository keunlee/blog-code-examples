import types = require('./sequelize-types');
import models = require('./sequelize-models');
let config = require('../../package.json');
let databaseConfig = config.databaseConfig[1];

models.initialize( databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    dialect : databaseConfig.dialect,
    define : {
        timestamps : false
    }
});

let findall = models.EmployeesModel.findAll();

findall
    .catch((error : any) => {
        throw error;
    })
    .done((users : any) => {
        users.forEach((emp : types.EmployeesPojo) => {
            let info = `NAME: ${emp.first_name} ${emp.last_name} HIRED: ${emp.hire_date}\n`;
            console.log(info);
        });

        console.log('Returned ' + users.length + ' employees.');
    });
