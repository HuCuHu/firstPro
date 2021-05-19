var express = require('express');
var router = express.Router();
var mysql = require('mysql');

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'project'
});
 
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
 

  
  res.render('login');
});

//注册
// router.get('/', function(req, res, next) {
//         res.render('register');
// });



router.post('/',(req,res) =>{
  var  name=req.body.username;
    var pass=req.body.password;

    var selectSQL = "select * from user where username = '"+name+"' and password = '"+pass+"'";
  
  connection.query(selectSQL, function (error, results, fields) {
    if (error){
      throw error;
    } else{
      res.redirect('/index');
    }
    
  });
})

module.exports = router;