var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'hosting',
  user     : 'username',
  password : 'password',
  database : 'Members'
});
connection.connect(function(err){
if(!err) {
    console.log("Database: Connected");
} else {
    console.log("Database: Error");
}
});


var app = express();


/* GET register page. */
router.get('/register', function(req, res) {
  res.render('index');
});

//get login page
router.get('/login', function(req, res) {
  res.render('login1');
});

router.post('/register',function(req,res){
  console.log("req",req.body);
  var today = new Date();
  var Members={
    "name":req.body.name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  };
  connection.query('INSERT INTO Members SET ?',Members, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    });
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
});



router.post('/login',function(req,res){

  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM Members WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    });
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessful"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exist"
          });
    }
  }
  });
});

module.exports = router;
