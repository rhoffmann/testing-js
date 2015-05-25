import Rx from 'rx';
// var Rx = require('rx');

const somePrivate = 'private';

let myProto = {
    somePublic: 'public',
    Rx : Rx,
    someMethod: function() {
        return somePrivate;
    }
};

let init = function(options) {
    return Object.assign(Object.create(myProto), options);
};

module.exports = init;
