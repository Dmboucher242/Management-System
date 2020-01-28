const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "bubba242",
    database: "cms_db"
});

connection.contact(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "list",
                message: "What would you like to do?",
                choices: [
                    "View Departments",
                    "View Roles",
                    "View Employees",
                    "Add Departments",
                    "Add Roles",
                    "Add Employees",
                    "Update Employee Roles"
                ]
            }
        )
        .then(function (answer) {
            switch (answer.action) {
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "Add Departments":
                    addDepartments();
                    break;
                case "Add Roles":
                    addRoles();
                    break;
                case "Add Employees":
                    addEmployees();
                    break;
                case "Update Employee Roles":
                    updateEmployeeRoles();
                    break;

            }
        })





};


