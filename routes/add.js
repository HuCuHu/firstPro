var express = require('express');
var router = express.Router();
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
var connection = require('./mysql/mysql');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/',(req,res)=>{
    var  name=req.body.name;
    var  price=req.body.price;
    var  type=req.body.type;
    var  introduce=req.body.introduce;
    var  color=req.body.color;
    var  inventory=req.body.inventory;

    connection.query('INSERT INTO product(name,price,type,introduce,color,inventory,updatetime,inserttime) VALUES(?,?,?,?,?,?,?,?)',[name,price,type,introduce,color,inventory,time,time],function (err,result) {
        if (err) {
          throw  err
        }else{
            res.redirect('./goods');
          }
  
})
})



module.exports = router;