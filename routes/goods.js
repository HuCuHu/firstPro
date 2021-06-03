var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');
   
//  if ($( "#find" ).click){
  router.get('/', function(req, res, next) {
  var sql="SELECT * FROM `product` order by id desc"
  connection.query(sql,function(err,result){
   console.log(result)
    if (err){
     throw err
    } else{
       res.render('goods',{
         data:result
       });
    }
  })
});
//  }else{
  router.post('/find', function (req, res) {
    var name = req.body.s_name;
    var price1 = req.body.s_price1;
    var price2 = req.body.s_price2;
    
  
    var sql = "select * from `product` where 1=1";

    if (name) {
        sql += " and name like'%" + name + "%' ";
    }

    if (price1) {
        sql += " and price>=" + price1 + " ";
    }
    if (price2) {
      sql += " and price<=" + price2 + " ";

  }

  

    connection.query(sql,function(err,result){
      console.log(result)
      if (err){
        throw err
       } else{
        console.log(sql)
        res.render("goods", {data: result, s_name: name, s_price1: price1,s_price2: price2});
        }
    });
  });
//  }




router.get('/del/:id', function (req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM `product` WHERE id='"+id+"'";
  connection.query(sql, function (err, result) {
      if (err) {
          throw err
      } else {
          res.redirect('/goods')
      }
  });
});

 module.exports = router;