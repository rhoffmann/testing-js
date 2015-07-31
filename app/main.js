import React from 'react';
import RepositoryList from './components/repository-list';

import { reposForUser } from './api/repos';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>A List of Repositories!</p>
        <RepositoryList username="rhoffmann" />
      </div>
    );
  }
}

React.render(<HelloWorld />, document.getElementById('app'));


//
import {Foo, Bar} from './modules/noconstructor';
// var {add, mult} = require('./modules/numbers');

var bar = Object.create(Bar);
console.log( bar.init('Richard').speak() );
console.log( bar.modify('Peng').speak() );


import { Animal, Dog } from './objects/class.es6.js';
var jack = new Dog('Jack', 'Hund');
jack.bark();
jack.print();


import * as piff from  './objects/object.create.js';
import { Dog as ProDog } from './objects/object.create.js';
// var pete = piff.Dog.create('pete', 'labrador');
var pete = ProDog.create('pete', 'labrador');
pete.bark();
pete.print();
