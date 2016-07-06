var express = require('express');
var bodyParser = require('body-parser');
var server = express();

var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.listen(port, function(){
  console.log('Now listening on port: ', port);
});
