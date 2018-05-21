'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;//?
    return this.length;
  }
  

  pop() {
    this[this.length--];
    delete this[this.length];
    return this;
  }
  
  forEach(func) {
    for(let i=0; i < this.length; i ++){
      func(this[i]);
    }
    return undefined;
  }

  map(funct) {
    var arr = this;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      funct(newArr[i] = arr[i]);
    } 
    return newArr;
  }

  filter(animals){
   
    var threeLetterAnimals = [];
    for (let count = 0; count < animals.length; count++){
      if (animals[count].length === 3) {
        threeLetterAnimals.push(animals[count]);
      }
    }
    return threeLetterAnimals;//?
  }
}

module.exports = List;
