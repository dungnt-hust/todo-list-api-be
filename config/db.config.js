'use strict'
const mysql = require('mysql');

//setup database connection
const dbConn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '041100',
    database: 'todo_list'
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database is connected");
});

module.exports = dbConn;