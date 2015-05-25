'use strict';

let Foo = {
    init: function(who) {
        this.me = who;
        return this;
    },
    identify: function() {
        return "I am " + this.me;
    }
};

let Baz = {
    modify: function(who) {
        this.me = who;
        return this;
    }
};

let Bar = Object.create(
    Object.assign({}, Foo, Baz)
);

Bar.speak = function() {
    return "Hello, " + this.identify();
};

export {Foo, Bar};
