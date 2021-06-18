var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gLogin');
});

//注册
// router.get('/', function(req, res, next) {
//         res.render('register');
// });



router.post('/',(req,res) =>{
  var  name=req.body.name;
    var pass=req.body.pass;

    var selectSQL = "select * from supplier where suppliername = '"+name+"' and password = '"+pass+"'";
  
  connection.query(selectSQL, function (error, results, fields) {
    if (error){
      throw error;
    } 
    var user=results[0];
    if (user){
      req.session.boss=user;
      res.redirect('/back');
    }else{
      res.render("gLogin",{message:'用户名或密码错误'});
    }
    
  });
})

module.exports = router;