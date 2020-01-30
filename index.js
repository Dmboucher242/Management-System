const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bubba242",
    database: "cms_db"
});

connection.connect(function (err) {
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

function viewDepartments() {
    inquirer
        .prompt({
            type: "list",
            name: "departments",
            message: "Which department would you like to view?",
            choices: [
                "Sales",
                "Engineering",
                "Finance",
                "Legal"
            ]
        })
        .then(function (answer) {
            const query = "SELECT * FROM cms_db.department";
            connection.query(query, [answer.departments], function (err, res) {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    console.log(departments)
                }
            })
        })
};

function viewRoles() {
    inquirer
        .prompt({
            type: "list",
            name: "roles",
            message: "Which roles would you like to view?",
            choices: [
                "Sales Lead",
                "Sales Person",
                "Lead Engineer",
                "Lawyer",
                "Accountant",
                "Legal Team Lead"
            ]
        })
        .then(function (answer) {
            const query = "SELECT role FROM cms_db";
            connection.query(query, { role: answer.roles }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log(roles)
                }
            })
        })
}

// function viewEmployees() {
 //show a list of all of the employees in the data

 // function for adding new departments

 //function for adding new roles

 function addEmployees() {
     inquirer
     .prompt(
         {
            type: "input",
            name: "first name",
            message: "What is the employees first name?"
         },
         {
             type: "input",
             name: "last name",
             message: "What is the employees last name?"
         },
         {
             type: "input",
             name: "role",
             message: "What is the employees role?"
         },
         {
             type: "input",
             name: "manager",
             message: "Who is the employees manager?"
         }
     )
 }