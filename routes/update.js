var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

/* GET home page. */
router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    connection.query("select * from `product` where id=" + id, function (err, result) {
        if (err) {
            throw err
        } else {
            res.render("update", {data: result});       //直接跳转
        }
    });
});

router.post('/',(req,res)=>{
    var id=req.body.id;
    var  name=req.body.name;
    var  price=req.body.price;
    var  type=req.body.type;
    var  introduce=req.body.introduce;
    var  color=req.body.color;
    var  inventory=req.body.inventory;
  
    connection.query("update `product` set name='"+name+"',price='"+price+"',type='"+type+"',introduce='"+introduce+"',color='"+color+"',inventory='"+inventory+"' where id="+id+"",function (err,rs) {
        if (err) {
          throw  err
        }else{
            res.redirect('./goods');
          }
  
  })
  })
  router.get('/toUpdate2/:id', function (req, res) {
    var id = req.params.id;
    connection.query("select * from `order` where id=" + id, function (err, result) {
        
        if (err) {
            throw err
        } else {
            res.render("orderUpdate", {data: result});       //直接跳转
        }
    });
});
router.post('/orderUpdate',(req,res)=>{
    var id=req.body.id;
    var  status=req.body.status;
  
    connection.query("update `order` set status='"+status+"' where id="+id+"",function (err,rs) {
        if (err) {
          throw  err
        }else{
            res.redirect('../orders');
          }
  
  })
  })



module.exports = router;