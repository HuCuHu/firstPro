var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'project'
});
 
connection.connect();

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



module.exports = router;