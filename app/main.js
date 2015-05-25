import 'fetch';

import React from 'react';
import $ from 'jquery';

console.log($.fn.jquery);

class HelloWorld extends React.Component {
  render() {
    return (
      <p>Hello World!</p>
    );
  }
}

React.render(<HelloWorld />, document.getElementById('app'));

// System.import('./app/modules/numbers').then(function(add, mult) {
//   var v1 = add(1, 2, 3, 4, 555);
//   var v2 = mult(1, 3, 4, 5, 6);
//   console.log(v1, v2);
// });

// var deconstruction = require('./modules/deconstruction');
// var collections = require('./modules/collections');
// var reactive = require('./modules/reactive');

import {Foo, Bar} from './modules/noconstructor';
// var {add, mult} = require('./modules/numbers');

var bar = Object.create(Bar);
console.log( bar.init('Richard').speak() );
console.log( bar.modify('Peng').speak() );

// var rxInstance = reactive({ 'some' : 'stuff'});
// console.dir(rxInstance);
