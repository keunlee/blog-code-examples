# Sample Employees Database - Postgres

## Prerequisites

* Install Postgresql, if not already installed on your system.
* To proceed with the instructions below, make sure postgres commandline tools are located in your $PATH (if they aren't already)

## Instructions

* Clone the following repository: https://github.com/keunlee/pgsql-sample-data.git
* Once cloned, from the command line, change directories to the "employees" directory. Inside of that directory, you
will see all the necessary scripts for creating the sample "employee" database.
* Execute the following commands at the commandline prompt:
    * Create the "employees" database:

        `createdb employees -U [database-username]`
    * Execute the SQL script to create tables and load data:

        `psql -f employees.sql -d employees -U [database-username]`


