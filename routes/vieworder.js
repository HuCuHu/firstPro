var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

var sql="SELECT * FROM `order` INNER JOIN product on `order`.pid = product.id INNER JOIN `user`  ON `order`.uid=`user`.id"
 connection.query(sql,function(err,result){
  // console.log(result)
   if (err){
    throw err
   } else{
    router.get('/', function(req, res, next) {
      res.render('vieworder',{
        data:result
      });
    });
   }
   
 })

module.exports = router;