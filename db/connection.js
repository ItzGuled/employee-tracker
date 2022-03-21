const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Tango1234!",
    database: "Employees",
  },
  console.log("Connected to the Employee database.")
); 

module.exports = db;
