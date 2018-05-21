'use strict';

let List = require('../lib/list.js');

describe('List Module', () => {
  it('push() returns the updated length of the list', () => {
    let myList = new List();
    myList.push('FOO');
    expect(myList.length).toBe(1);
      
  });

  it('push() adds an element to the end of the list', () => {
    let myList = new List();
    myList.push('foo');
    expect(myList[myList.length-1]).toEqual('foo');
  });

  it('pop() removes the last item in the array', () => {
    let myList = new List();
    myList.push('foo');
    myList.push('foosasd');
    myList.push('fooddd');
    myList.pop(); 
    expect(myList.length).toBe(2);
    
  });


  it('pop() returns the item that was popped off', () => {
    let myList = new List();
    myList.push('fooddd');
    myList.push('as');
    myList.pop();
    expect(myList[0]).toBe('fooddd');
    
  });


  it('forEach() returns undefined', () => {
    let myList = new List();
    myList.push('foopp');
    myList.push('fosss');
    expect(myList.forEach(element =>{
      return element;
    })).toEqual(undefined);
    
  });

  it('forEach() should apply function to each element', () => {
    let myList = new List();
    let array2 = new List();
    myList.push('foopp');
    myList.push('fosss');
    myList.forEach(element =>{
      array2.push(element+3);
    });
    expect(array2[1]).toEqual('fosss3');
    
  });

  it('map() should apply function to each element in the array, and return adultured new array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('foopp');
    myList.push('fosss');
    myList.map(element =>{
      newArr.push(element+3);
    });
    expect(newArr[1]).toEqual('fosss3');

  });

  it('map() should apply function to each element in the array, and return unadultured old array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('foopp');
    myList.push('fosss');
    myList.map(element =>{
      newArr.push(element+3);
    });
    expect(myList[1]).toEqual('fosss');

  });

  it('filter() should apply function to each element in the array, and return a new filtered array ', () => {
    let myList = new List();
    myList.push('cat');
    myList.push('dog');
    myList.push('horse');
    let animalsNew = myList.filter(element => {
      return element.length > 3;
    });
    expect(animalsNew[0]).toBe('horse');
  });

});