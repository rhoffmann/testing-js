function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return 'I am ' + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

// console.dir(Bar);
// console.dir(Bar.prototype);
// console.dir(Bar.__proto__);

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar; // Fix constructor

Bar.prototype.speak = function() {
  console.log('Hello, ' + this.identify() + '.');
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

// console.dir(b1);
// console.dir(b2);
// console.log(b1.__proto__.__proto__);

b1.speak();
b2.speak();

module.exports = {
  Foo: Foo,
  Bar: Bar
};

export {Foo, Bar};
