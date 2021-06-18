var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');


var sql="SELECT product.id,product.name,product.p_url,product.type,cart.amount,product.price FROM `cart` INNER JOIN product on `cart`.pid = product.id order by cart.id desc"

router.get('/', function(req, res, next) {
 connection.query(sql,function(err,result){
  // console.log(result)
   if (err){
    throw err
   } else{
      res.render('cart',{
        data:result
      });
   }
 })
 
});
router.get('/cart/:id', function (req, res) {
  var user=req.session.user;
  connection.query("SELECT * FROM `cart` INNER JOIN user on `user`.id = cart.uid INNER JOIN product on `product`.id = cart.pid where product.id =" +req.params.id+" and user.id="+user.id+"", function (err, result) {
      if (err) {
          throw err
      } 
      if(result[0]){
        connection.query("update cart set amount=amount+1 where pid="+req.params.id+"", function (err, result) {
          if (err){
            throw err
          }else{
            res.redirect("/cart");       //直接跳转
          }
  })
      }else {
        // console.log(result[0]);
        connection.query("INSERT INTO cart(uid,pid,updatetime,inserttime) VALUES(?,?,?,?) ",[user.id,req.params.id,time,time], function (err, result2) {
          if (err){
            throw err
          }else{
            res.redirect("/cart");       //直接跳转
          }
  });
}
});
});
router.get('/del/:id', function (req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM `cart` WHERE pid='"+id+"'";
  connection.query(sql, function (err, result) {
      if (err) {
          throw err
      } else {
          res.redirect('/cart')
      }
  });
});
router.get('/reduceamount/:id', (req, res) => { 
    
    connection.query("update cart set amount=amount-1 where pid="+req.params.id+"", function (err, result) {
      if (err) {
        throw err
      } else {
         res.redirect('/cart')
      }
    })
  });
  router.get('/addamount/:id', (req, res) => {
    
      connection.query("update cart set amount=amount+1 where pid="+req.params.id+"", function (err, result) {
        if (err) {
          throw err
        } else {
            res.redirect('/cart')
        }
      })
    });
module.exports = router;