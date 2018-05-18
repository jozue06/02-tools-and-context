'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }
  

  pop() {
    this[this.length-1];
    return this.length-1;
  }

}

module.exports = List;
