var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var ejs = require('ejs');
var flash = require('connect-flash')


var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var backRouter = require('./routes/back');
var formRouter = require('./routes/form');
var ordersRouter = require('./routes/orders');
var vieworderRouter = require('./routes/vieworder');
var indexRouter = require('./routes/index');
var shopRouter = require('./routes/shop');
var singleRouter = require('./routes/single-product');
var goodsRouter = require('./routes/goods');
var addRouter = require('./routes/add');
var updateRouter = require('./routes/update');
var cartRouter = require('./routes/cart');
var gLoginRouter = require('./routes/gLogin');




var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  secret:"123",
  cookie:{maxAge:600000},
  resave:false,
  saveUninitialized:true,
  name:"cookie_name"
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
//设置flash
app.use(function(req, res, next){
  res.locals.error = req.flash('error') || "";
  res.locals.success = req.flash('success') || "";
  next();
});  

app.use(function (req, res, next) {
    if (req.session.user&&req.session.user!=undefined&&req.originalUrl!="/back"&&req.originalUrl!="/goods"&&req.originalUrl!="/orders"&&req.originalUrl!="/add"&&req.originalUrl!="/update"&&req.originalUrl!="/listing") {  // 判断用户是否登录
      next();
    } else if(req.session.boss&&req.session.boss!=undefined){
        next();
      }else{
      // 解析用户请求的路径
      var arr = req.url.split('/');
      // console.log("arr.length为是"+arr.length)
      // 去除 GET 请求路径上携带的参数
      for (var i = 0, length = arr.length; i < 1; i++) {
        arr[i] = arr[i].split('?')[0];
      }
      // 判断请求路径是否为根、登录、注册、登出，如果是不做拦截
     if ( arr[1]=="fonts"||arr[1]=="img"||arr[1]=="images"||arr[1]=="stylesheets"||arr[1]=="javascripts"||arr[1] == 'font' || (arr[1] == 'register' || arr[1] == 'login' || arr[1] == 'index' || arr[1] == 'shop' || arr[1] == 'single-product' || arr[1] == 'gLogin')) {
        next();
      } else {  // 登录拦截
        req.session.originalUrl = req.originalUrl ? req.originalUrl : null;  // 记录用户原始请求路径
        
        req.flash('error', '登录才能继续操作哦');
        if(arr[1]=="back"||arr[1]=="goods"||arr[1]=="orders"){
           res.redirect('/gLogin');
  }else{
    res.redirect('/login');  // 将用户重定向到登录页面
  }
        
      }
    }
  });

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/back',backRouter);
app.use('/form',formRouter);
app.use('/orders',ordersRouter);
app.use('/vieworder',vieworderRouter);
app.use('/index',indexRouter);
app.use('/shop',shopRouter);
app.use('/single-product',singleRouter);
app.use('/goods',goodsRouter);
app.use('/add',addRouter);
app.use('/update',updateRouter);
app.use('/cart',cartRouter);
app.use('/gLogin',gLoginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

module.exports = app;
