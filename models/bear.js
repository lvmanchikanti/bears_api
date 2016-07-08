var uuid = require('uuid')
//bear constructor that hold all the objects in the schema
function Bear(type, gender, size, id){
  this.id = id || uuid.v4();
  this.type = type;  //manually make array w/ koala, panda, polar, grizzly, black
  this.gender = gender; //if else thing
  this.size = size; //if else if else thing
  this.isHungry = false;
  this.hasKids = false;
  this.isAwake = false;
}

Bear.prototype.updateHungry= function(value) {
  if(value.toLowerCase() === 'true'){
    this.isHungry = true;
  }
  else {
    this.isHungry = false;
  }
};

Bear.prototype.updateAwake= function(value) {
  if(value.toLowerCase() === 'true'){
    this.isAwake = true;
  }
  else {
    this.isAwake = false;
  }
};

Bear.prototype.updateKids= function(value) {
  if(value.toLowerCase() === 'true'){
    this.hasKids = true;
  }
  else {
    this.hasKids = false;
  }
};


//for testing purposes
// var bear1 = new Bear('read my book');
// var bear2 = new Bear('practice programming');
// var bear3 = new Bear('go running');
// console.log(bear1,bear2,bear3);

module.exports = Bear;
