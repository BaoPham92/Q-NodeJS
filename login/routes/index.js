var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'user',
  password: 'password',
  // host: 'localhost',
  // user: 'root',
  // password: 'password',
  database: 'info'
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database: Connected");
  } else {
    console.log("Database: Error");
  }
});

const jsonModifier = param => JSON.parse(JSON.stringify(param))

router.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, rows, fields) => {
    !!rows === true ? 
    res.status(200).json(jsonModifier(rows)) :
    res.status(404).json({ errorMessage: 'NO DATA FOR U' })
  })
})

router.post('/register', function (req, res) {
  console.log("req", req.body);
  // var today = new Date();
  var users = {
    "username": req.body.username,
    "password": req.body.password,
  };
  connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      });
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code": 200,
        "success": "user registered sucessfully"
      });
    }
  });
});


router.post('/login', function (req, res) {

  var username = req.body.username;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      });
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            "code": 200,
            "success": "login sucessful"
          });
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exist"
        });
      }
    }
  });
});

module.exports = router;

/* GET register page. */
// router.get('/register', function(req, res) {
//   res.render('index');
// });

// //get login page
// router.get('/login', function(req, res) {
//   res.render('login1');
// });