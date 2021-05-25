var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var cheerio = require('cheerio');
// var request = require('request');
// var $= cheerio.load(html);

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'project'
});
 
connection.connect();
   
//  if ($( "#find" ).click){
  router.get('/', function(req, res, next) {
  var sql="SELECT * FROM `product`"
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
  router.post('/', function (req, res) {
    var name = req.body.s_name;
    var price1 = req.body.s_price1;
    var price2 = req.body.s_price2;
    var type = req.body.s_type;
    
  
    var sql = "SELECT * FROM `product` where name like '%"+name+"%' AND price>='"+price1+"' && price<='"+price2+"' AND type='"+type+"'";
  
    
    connection.query(sql,function(err,result){
      console.log(result)
      if (err){
        throw err
       } else{
        res.json({
              data:result
            });
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