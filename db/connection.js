require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "Employees",
  },
  console.log("Connected to the Employee database.")
);

module.exports = db;
