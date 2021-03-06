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
      res.render('single-product',{
        data:result
      });
   }
 })
 
});
router.get('/single/:id', function (req, res) {
  var id = req.params.id;
  connection.query("SELECT * FROM `product` where id =" + id, function (err, result) {
      if (err) {
          throw err
      } else {
          res.render("single-product",{
            data:result
          });       //直接跳转
      }
  });
});

module.exports = router;