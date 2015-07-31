// ES5 / CommonJS
module.exports = {
  Animal : Animal,
  Dog : Dog
};

// export Animal;
// export Dog;
// export default Animal;

function Animal(type) {
  this.type = type;
}

Animal.isAnimal = function(obj, type) {
  if (!Animal.prototype.isPrototypeOf(obj)) {
    return false;
  }
  return type ? obj.type === type : true;
}


function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype = new Animal('dog');
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log('wuff!');
};
Dog.prototype.print = function() {
  console.log('the dog ' + this.name + ' is a ' + this.breed);
};
Dog.isDog = function(obj) {
  return Animal.isAnimal(obj, 'dog');
};
