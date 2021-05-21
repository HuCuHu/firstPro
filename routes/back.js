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
var sql="SELECT * FROM `order` INNER JOIN product on `order`.pid = product.id INNER JOIN `user`  ON `order`.uid=`user`.id"
 connection.query(sql,function(err,result){
  console.log(result)
   if (err){
    throw err
   } else{
    router.get('/', function(req, res, next) {
      res.render('back',{
        data:result
      });
    });
   }
   
 })
/* GET home page. */


module.exports = router;