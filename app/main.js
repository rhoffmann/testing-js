import 'fetch';

import React from 'react';
import RepositoryList from './components/repository-list';

import { reposForUser } from './api/repos';

class HelloWorld extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <p>A List of Repositories!</p>
        <RepositoryList username="rhoffmann" />
      </div>
    );
  }
}

React.render(<HelloWorld />, document.getElementById('app'));

// reposForUser('rhoffmann').then(repos => console.log(repos));
/*
* JSPM Hint: you can not mix and match require (CJS) and import (ES6) statements in a file (is this true?)
* same is true for module.exports={} and export {}
*/

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
