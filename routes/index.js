var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

/* GET home page. */
var sql="SELECT * FROM `product`"

router.get('/', function(req, res, next) {
 connection.query(sql,function(err,result){
  // console.log(result)
   if (err){
    throw err
   } else{
      res.render('index',{
        data:result
      });
   }
 })
 
});






module.exports = router;