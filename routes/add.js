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
    var user={
        name:name,
        price:price,
        type:type,
        introduce:introduce,
        color:color,
        inventory:inventory
    }

    connection.query('INSERT INTO product(name,price,type,introduce,color,inventory,updatetime,inserttime) VALUES(?,?,?,?,?,?,?,?)',[name,price,type,introduce,color,inventory,time,time],function (err,rs) {
        if (err) {
          throw  err
        }else{
            console.log(user)
            res.redirect('./goods');
          }
  
})
})



module.exports = router;