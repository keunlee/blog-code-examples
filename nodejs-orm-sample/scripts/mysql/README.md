# Sample Employees Database - MySql

## Prerequisites

* Install MySql, if not already installed on your system.
* To proceed with the instructions below, make sure MySql commandline tools are located in your $PATH (if they aren't already)

## Instructions

* Goto to the following url: https://launchpad.net/test-db/+download
* Click the link to download the file: "employees_db-full-1.0.6.tar.bz2"
* Once downloaded, decompress the file.
* If you are running MySql >= 5.7.5, you will need to edit the file, "employees.sql" so that it will work with your
version of MySQL, otherwise continue to next step.
    * For versions >= 5.7.5, change all instances of the variable `storage_engine` to `default_storage_engine`. You can
    probably get away with just doing a global replace, if you're editor supports it.
* From the command line, make sure you're at the root of the decompressed directory. Inside of that directory, you
will see all the necessary scripts for creating the sample "employee" database.
* Execute the following command at the commandline prompt:
    * Create the "employees" database and execute the SQL script to create tables and load data:

        `mysql -u [database-username] -p -t < employees.sql`