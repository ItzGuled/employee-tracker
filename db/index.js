const db = require ("./connection.js");

console.log(db.query('SELECT * from roles;'));
