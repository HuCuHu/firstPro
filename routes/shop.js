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
      res.render('shop',{
        data:result
      });
   }
 })
 
});
router.post('/serach', function (req, res) {
  var key = req.body.s_key;
  
  var sqls = "SELECT * FROM `product` where name like ?";

  // if (key) {
  //     sqls += " and name like'%" + key + "%' ";
  // }

  // sqls = sqls.replace("and","where");
  
  connection.query(sqls,["%"+key+"%"],function(err,result){
    if (err){
      throw err
     } else{
      console.log(sqls)
      res.render("shop", {data: result, s_key: key});
      }
  });
});

module.exports = router;