<img src="https://travis-ci.com/jozue06/02-tools-and-context.svg?branch=lab-02-josh">

# lab-02-Josh


## Describe the exported values of each module you have defined:

The List module is being exported to be available to list.test.js. The methods in that module are:

* **push**:
_push_ is an airity of one pure function exported as a method of List. It takes a new element(s) and "pushes" it onto an existing array, returning the array + the the element(s).

* **pop**:
_pop_ is an airity of one pure function exported as a method of List. It will remove the last element in the input array and return the array without that element.

* **forEach**:
_forEach_ is an airity of two pure function exported as a method of List. It takes in a function and an element. It will iterate through an array and for each element it will execute the function passed to it. Strangely, forEach always _returns_ **undefined**, but other tests can be done to show that the function has been executed on each element of the array.

* **map**:
_map_ is an airity of two pure function exported as a method of List. It iterates through an existing array, applies a function
to each element of that array and assembles a new array of the elements of the old array after the function has been applied to each element. _Map_ returns the new array and does not tamper with the integrity of the input array.

* **filter**:
Have yet to complete.

* **reduce**:
Have yet to complete.
