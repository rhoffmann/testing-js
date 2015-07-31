
var Animal = {
  create(type) {
    var animal = Object.create(Animal.prototype);
    animal.type = type;
    return animal;
  },
  isAnimal(obj, type) {
    if (!Animal.prototype.isPrototypeOf(obj)) {
      return false;
    }
    return type ? obj.type === type : true;
  },
  prototype: {}
};

var Dog = {
  create(name, breed) {
    var proto = Object.assign(Animal.create('dog'), Dog.prototype);
    var dog = Object.create(proto);
    dog.name = name;
    dog.breed = breed;
    return dog;
  },
  isDog(obj) {
    return Animal.isAnimal(obj, 'dog');
  },
  prototype: {
    bark() {
      console.log('wuff');
    },
    print() {
      console.log('the dog ' + this.name + ' is a ' + this.breed);
    }
  }
};

export { Animal, Dog };
