var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

//注册
// router.get('/', function(req, res, next) {
//         res.render('register');
// });



router.post('/',(req,res) =>{
  var  name=req.body.name;
    var pass=req.body.pass;

    var selectSQL = "select * from user where username = '"+name+"' and password = '"+pass+"'";
  
  connection.query(selectSQL, function (error, results, fields) {
    if (error){
      throw error;
    } 
    var user=results[0];
    if (user){
      req.session.user=user;
      res.redirect('/index');
    }else{
      res.render("login",{message:'用户名或密码错误'});
    }
    
  });
})

module.exports = router;