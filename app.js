var http = require('http');
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var path    = require("path");
server.listen(3000,'127.0.0.1');
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/assets')));

app.get('/',function(req,res){

res.sendFile('index.html');

});