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
    console.log(myList);//?   
    expect(myList.length).toBe(2);
    
  });


  it('pop() returns the item that was popped off', () => {
    let myList = new List();
    myList.push('fooddd');
    myList.push('as');
    myList.pop();
    expect(myList[0]).toBe('fooddd');
    
  });


  it('foreach() returns ', () => {
    let myList = new List();
    myList.push('foopp');
    myList.push('fosss');
    myList.foreach();
    console.log(myList);
    expect(myList.foreach()).toEqual(undefined);
    
    
  });

  it('foreach() returns ', () => {
    let myList = new List();
    myList.push('foopp');
    myList.push('fosss');
    myList.foreach();
    console.log(myList);
    expect(myList).toEqual(undefined);
    
    
  });

});


