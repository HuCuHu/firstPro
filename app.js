var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var ejs = require('ejs');


var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var backRouter = require('./routes/back');
var listingRouter = require('./routes/listing');
var formRouter = require('./routes/form');
var ordersRouter = require('./routes/orders');
var vieworderRouter = require('./routes/vieworder');
var indexRouter = require('./routes/index');
var shopRouter = require('./routes/shop');
var singleRouter = require('./routes/single-product');
var goodsRouter = require('./routes/goods');
var addRouter = require('./routes/add');
var updateRouter = require('./routes/update');
// var mysqlRouter = require('./routes/mysql/mysql');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"123",
  cookie:{maxAge:60000},
  resave:false,
  saveUninitialized:true,
  name:"cookie_name"
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/back',backRouter);
app.use('/listing',listingRouter);
app.use('/form',formRouter);
app.use('/orders',ordersRouter);
app.use('/vieworder',vieworderRouter);
app.use('/index',indexRouter);
app.use('/shop',shopRouter);
app.use('/single-product',singleRouter);
app.use('/goods',goodsRouter);
app.use('/add',addRouter);
app.use('/update',updateRouter);
// app.use('./mysql/mysql',mysqlRouter);


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
});

module.exports = app;
