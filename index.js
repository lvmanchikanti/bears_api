var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

db.defaults({bears: []})
  .value();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/bears' , function(request, response){
  var read = db.get('bears')
                .value();
  response.send(read);
});

server.get('/bears/:id', function(request, response){
  var bear = db.get('bears')
                .find({id: request.params.id})
                .value();

    response.send(bear);
});

server.post('/bears', function(request, response){
  var bear = {
    id: uuid.v4(),
    isHungry: false,
    hasKids: false
  };

  var result = db.get('bears')
                .push(bear)
                .last()
                .value();
  response.send(result);
});

server.put('/bears/:id', function(request, response){
  response.send('PUT bears :id');
});

server.delete('/bears/:id', function(request, response){
  response.send('DELETE bears :id');
});


server.listen(port, function(){
  console.log('Now listening on port: ', port);
});
