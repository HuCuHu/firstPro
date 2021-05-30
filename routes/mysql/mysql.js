// var express = require('express');
// var router = express.Router();
var mysql = require('mysql');


 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'project'
});
 
connection.connect();

module.exports = connection;
