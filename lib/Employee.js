const inquirer = require("inquirer");
const db = require("../db/connection");

function viewEmployees() {
  const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.dept_name AS dept, CONCAT(manager.first_name, " ", manager.last_name) AS manager
  FROM employees
  LEFT JOIN employees manager on manager.id = employees.manager_id
   JOIN roles ON employees.role_id = roles.id
  JOIN departments ON roles.dept_id = departments.id;`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("\n");
    console.table(rows);
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the new employees first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the new employees last name",
      },
      {
        type: "input",
        name: "dept",
        message: "What is the new employees role?",
      },
      {
        type: "input",
        name: "managerName",
        message: "What is the new employees manager name?",
      },
    ])
    .then((add) => {
      console.log("line 40", add);
      addingEmployees(add);
    });
}

function addingEmployees(add) {
  const val = Object.values(add);
  console.log("line 55", val);
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`;

  db.query(sql, val, (err, res) => {
    if (err) {
      throw err;
    }

    console.log(res);
  });
}

module.exports = { viewEmployees, addEmployee };
