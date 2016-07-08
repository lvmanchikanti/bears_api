var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var Bear = require('./models/bear.js');

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
  var bear = new Bear(request.body.type, request.body.gender, request.body.size)
  var result = db.get('bears')
                .push(bear)
                .last()
                .value();
  response.send(result);
});

server.put('/bears/:id', function(request, response){
  var bear = new Bear(request.body.type, request.body.gender, request.body.size, request.params.id);
  bear.updateHungry(request.body.isHungry);
  bear.updateAwake(request.body.isAwake);
  bear.updateKids(request.body.hasKids);
  var updatedBear = db.get('bears')
                      .find({id: request.params.id})
                      .assign(bear)
                      .value();
  response.send(updatedBear);
});

server.delete('/bears/:id', function(request, response){
  var bear = db.get('bears')
                .remove({id: request.params.id})
                .value();

  response.send(bear);
});


server.listen(port, function(){
  console.log('Now listening on port: ', port);
});
