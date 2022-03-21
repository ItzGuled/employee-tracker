const inquirer = require("inquirer");
const { viewDepartment, addDepartment } = require("./lib/Department");
const { viewRoles, addRole } = require("./lib/Role");
const { viewEmployees, addEmployee } = require("./lib/Employee");

const optionInput = async () => {
  try {
    let answers = await inquirer.prompt([
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
    ]);
    console.log("\n");

    switch (answers.options) {
      case "View all departments":
        await viewDepartment();
        break;
      case "View all roles":
        await viewRoles();
        break;
      case "View all employees":
        await viewEmployees();
        break;
      case "Update an employee":
        await updateEmployee();
        break;
      case "Add a Department":
        await addDepartment();
        break;
      case "Add a role":
        await addRole();
        break;
      case "Add an employee":
        await addEmployee();
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

optionInput();

module.exports = { optionInput };
