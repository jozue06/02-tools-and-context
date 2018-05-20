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

  foreach() {
    let forLoop = function() {
      for(let i=0; i < this.length ;i++){
        return undefined;
      }
      forLoop();
    };
  }

}

module.exports = List;
