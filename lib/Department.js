const inquirer = require("inquirer");
const db = require("../db/connection");

function viewDepartment() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "deptName",
        message: " What is the new department name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a valid department name!");
            return false;
          }
        },
      },
    ])
    .then((add) => {
      //   addingDept(add);
      console.log("line 32", add);
      addingDept(add);
    });
}

function addingDept(add) {
  const val = Object.values(add);
  console.log(val);
  const sql = `INSERT INTO departments(dept_name)
     VALUES(?)`;
  db.query(sql, val, (err, res) => {
    if (err) {
      throw err;
    }

    console.log(res);
  });
}

module.exports = { viewDepartment, addDepartment };
