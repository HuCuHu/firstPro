var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/',(req,res)=>{
    var  name=req.body.username;
    var  password=req.body.password;
    var  wname=req.body.wname;
    var  phone=req.body.phone;
    var  user={
      username:name,
      password:password,
      wname:wname,
      phone:phone
    };
    connection.query('INSERT INTO user(username,password,phone,wname,updatetime,inserttime) VALUES(?,?,?,?,?,?)',[name,password,phone,wname,time,time],function (err,rs) {
        if (err) {
          throw  err
        }else{
            console.log(user)
            res.redirect('./login');
          }
  
})
})



module.exports = router;