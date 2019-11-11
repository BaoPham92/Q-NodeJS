const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'user',
  password: 'password',
  database: 'info',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Database: Connected [Success]');
  }
});

module.exports = mysqlConnection;

