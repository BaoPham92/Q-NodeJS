const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
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

