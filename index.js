const inquirer = require("inquirer");
const {viewDepartment, addDepartment } = require("./lib/Department");

const optionInput = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Update employee role",
          "Add a Department",
          "Add a role",
          "Add an employee",
        ],
      },
    ])
    .then(answers => {
      switch (answers.options) {
        case "View all departments":
          viewDepartment();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Update an employee":
          updateEmployee();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
      }
    });
};

optionInput();

module.exports = {optionInput};



