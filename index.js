var express = require('express');
var bodyParser = require('body-parser');
var server = express();

var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/bears' , function(){
  response.send('GET bears');
});

server.get('/bears/:id', function(){
  response.send('GET bears :id');
});

server.post('/bears', function(){
  response.send('POST bears');
});

server.put('/bears/:id', function(){
  response.send('PUT bears :id');
});

server.delete('/bears/:id', function(){
  response.send('DELETE bears :id');
});


server.listen(port, function(){
  console.log('Now listening on port: ', port);
});
