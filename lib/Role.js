const inquirer = require("inquirer");
const db = require("../db/connection");

function viewRoles() {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the new role name?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the new salary for the role?",
      },
      {
        type: "input",
        name: "dept",
        message: "What department will this new role be in?",
      },
    ])
    .then((add) => {
      //   addingDept(add);

      addingRoles(add);
    });
}

function addingRoles(add) {
  const sql = `SELECT * FROM departments WHERE dept_name = ?`;
  db.query(sql, add.dept, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    const val = [add.title, rows[0]?.id, add.salary];
    console.log(val);
    const sql2 = `INSERT INTO roles (title, dept_id, salary) VALUES(?,?,?)`;

    db.query(sql2, val, (err, res) => {
      if (err) {
        throw err;
      }

      console.log(res);
    });
  });
}

module.exports = { viewRoles, addRole };
