function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return 'I am ' + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

// prototypal inheritance

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar; // Fix constructor

Bar.prototype.speak = function() {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak();
b2.speak();

module.exports = {
  Foo: Foo,
  Bar: Bar
};

export {Foo, Bar};
