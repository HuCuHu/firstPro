var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

var sql="SELECT order.id,product.price,order.inserttime,order.status,order.statuscolor,`user`.username,order.orderid FROM `order` INNER JOIN product on `order`.pid = product.id INNER JOIN `user`  ON `order`.uid=`user`.id"
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
router.post('/search', function (req, res) {
  var name = req.body.s_name;
  var price1 = req.body.s_price1;
  var price2 = req.body.s_price2;
  var status = req.body.s_status;

  var sql="SELECT * FROM `order` INNER JOIN product on `order`.pid = product.id INNER JOIN `user`  ON `order`.uid=`user`.id where 1=1";

  if (name) {
      sql += " and username like'%" + name + "%' or order.id='"+name+"'";
  }

  if (price1) {
      sql += " and order.inserttime >='" + price1 + "' ";
  }
  if (price2) {
    sql += " and order.inserttime <='" + price2 + "' ";
  }
  if (status) {
  sql += " and status ='" + status + "' ";
  }



  connection.query(sql,function(err,result){
    console.log(result)
    if (err){
      throw err
     } else{
      console.log(sql)
      res.render("orders", {data: result, s_name: name, s_price1: price1,s_price2: price2,s_status:status});
      }
  });
});

module.exports = router;