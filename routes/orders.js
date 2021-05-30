var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

var sql="SELECT * FROM `order` INNER JOIN product on `order`.pid = product.id INNER JOIN `user`  ON `order`.uid=`user`.id"
router.get('/', function(req, res, next) {
 connection.query(sql,function(err,result){
  // console.log(result)
   if (err){
    throw err
   } else{
      res.render('orders',{
        data:result
      });
   }
 })
});

module.exports = router;