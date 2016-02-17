
/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var sum = 0;
    forEach(args, function(a){ sum += a; });
    return sum;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var sum = 0;
    forEach(args, function(a){ sum += a; });
    return sum / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 );

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var max = args[0];
    for (var i = 0; i < args.length; i++) {
      for (var j = 1; j < args.length; j++) {
        if (args[i] < args[j]) {
          max = args[j];
          break;
        }
      }
    }
    return max;
}

console.assert( largest(2, 4, 6, 8) === 8 );

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var longest = args[0];
    for (var i = 0; i < args.length; i++) {
      for (var j = 1; j < args.length; j++) {
        if (args[i].length < args[j].length) {
          longest = args[j];
          break;
        }
      }
    }
    return longest;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// test variables
  var numArr = [6.32, 1, -1, 3, 9, 11, 0, -5];
  var charArr = ["c", "A", "b", "*", "aa", "2", "a", "D"];
  var wordArr = ["cherries", "bananas", "apples", "Apples"];
  var longStr = "this is a long string to test";
  var numStr = "1235 48 020392 0 128 -833 2";
// equalArrays(array1, array2)
// determines if two arrays contain the same elements
 var equalArrays = function(array1, array2) {
   if (array1.length != array2.length) {
     return false;
   }
   for (var i = 0; i < array1.length; i++) {
     if (array1[i] != array2[i]) {
       return false;
     }
   }
   return true;
 }
 console.assert(equalArrays(numArr, [6.32, 1, -1, 3, 9, 11, 0, -5]));
 console.assert(!equalArrays(numArr, [6.32, 1, -1, 3, 9, 11, 0, -5, 6]));
// .sort()
// sorts the elements of an array in place according
// to string Unicode code pointsand returns the array
  var sortArr = numArr.sort();
  console.assert(equalArrays(numArr.sort(), [-1, -5, 0, 1, 11, 3, 6.32, 9]));
  console.assert(equalArrays(charArr.sort(), ["*", "2", "A", "D", "a", "aa", "b", "c"]));
  console.assert(equalArrays(wordArr.sort(), ["Apples", "apples", "bananas", "cherries"]));
// .concat()
// combines the text of two or more strings and returns a new string
  console.assert("con".concat("cat") === "concat");
  console.assert("easy as abc".concat(" 123") === "easy as abc 123");
  console.assert(equalArrays(longStr.concat(numStr), "this is a long string to test1235 48 020392 0 128 -833 2"));
// .indexOf()
// returns the index within the calling String object of the first
// occurrence of the specified value, starting the search at fromIndex
  numArr = [-1, -5, 0, 1, 11, -1, 6.32, 9];
  charArr = ["c", "A", "b", "*", "aa", "2", "a", "D"];
  console.assert(numArr.indexOf(11) === 4);
  console.assert(numArr.indexOf(-1) === 0);
  console.assert(numArr.indexOf(-1, 4) === 5);
  console.assert(charArr.indexOf("a") === 6);
  console.assert(longStr.indexOf("long") === 10);
  console.assert(numStr.indexOf("203") === 9);
// .split()
  var splitLongArr = longStr.split(" ");
  var splitNumArr = numStr.split("0");
  console.assert(equalArrays(splitLongArr, ["this", "is", "a", "long", "string", "to", "test"]));
  console.assert(equalArrays(splitNumArr, ["1235 48 ", "2", "392 ", " 128 -833 2"]));
  console.assert(equalArrays("mississippi river".split("i"), (["m", "ss", "ss", "pp", " r", "ver"])));
// .join()
// joins all elements of an array into a string
  var joinStr = wordArr.join();
  console.assert(equalArrays(splitLongArr.join("-"), "this-is-a-long-string-to-test"));
  console.assert(equalArrays(splitNumArr.join("0"), numStr));
  console.assert(equalArrays(joinStr, "cherriesbananasapplesApples"))
// .pop()
// removes the last element from an array and returns that element
  var arr1 = [1,2,3,4];
  var arr2 = ["A", "B", "C", "D"];
  console.assert(arr1.pop() === 4);
  console.assert(arr2.pop() === "D");
// .push()
// adds one or more elements to the end of an array and
// returns the new length of the array
  var newLength1 = arr1.push(5);
  var newLength2 = arr2.push("E");
  console.assert(newLength1 === 4);
  console.assert(newLength2 === 4);
  console.assert(equalArrays(arr1, [1, 2, 3, 5]));
  console.assert(equalArrays(arr2, ["A", "B", "C", "E"]));
// .slice()
// returns a shallow copy of a portion of an array into a new array object
  var origStr = "A nice string to slice";
  var sliceWholeStr = origStr.slice();
  var slicePartStr = origStr.slice(4, 15);
  var sliceEndStr = origStr.slice(4);
  console.assert(equalArrays((origStr), "A nice string to slice"));
  console.assert(equalArrays((sliceWholeStr), "A nice string to slice"));
  console.assert(equalArrays((slicePartStr), "ce string t"));
  console.assert(equalArrays((sliceEndStr), "ce string to slice"));
  var origArr = [0, 4, "gerbil", 3, "%", "ice Cream"];
  var sliceWholeArr = origArr.slice();
  var slicePartArr = origArr.slice(2, 5);
  var sliceEndArr = origArr.slice(2);
  console.assert(equalArrays((origArr), [0, 4, "gerbil", 3, "%", "ice Cream"]));
  console.assert(equalArrays((sliceWholeArr), [0, 4, "gerbil", 3, "%", "ice Cream"]));
  console.assert(equalArrays((slicePartArr), ["gerbil", 3, "%"]));
  console.assert(equalArrays((sliceEndArr), ["gerbil", 3, "%", "ice Cream"]));
// .splice()
// changes the content of an array by removing existing elements
// and/or adding new elements.
  // var origArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var spliceArr = origArr.splice(2, 3);
  console.assert(equalArrays((origArr), [0, 4, "ice Cream"]));
  console.assert(equalArrays((spliceArr), ["gerbil", 3, "%"]));
  spliceArr = origArr.splice(2, 1, "gelato");
  console.assert(equalArrays((origArr), [0, 4, "gelato"]));
  console.assert(equalArrays((spliceArr), ["ice Cream"]));
// .shift()
// adds one or more elements to the beginning of an array
// and returns the new length of the array
  var firstEntry =  origArr.shift();
  console.assert(firstEntry === 0);
  console.assert(equalArrays((origArr), [4, "gelato"]));
// .unshift()
// adds one or more elements to the beginning of an array
// and returns the new length of the array
  var newLength = origArr.unshift("to", "the", "front");
  console.assert(newLength === 5);
  console.assert(equalArrays((origArr), ["to", "the", "front", 4, "gelato"]));
// .filter()
// creates a new array with all elements that pass the test
// implemented by the provided function
  numArr = [0, 45, 23, 4, 6, 7, 12, 9, 76];
  var evenArr = numArr.filter(function(a) {return a % 2 === 0;});
  console.assert(equalArrays((numArr), [0, 45, 23, 4, 6, 7, 12, 9, 76]));
  console.assert(equalArrays((evenArr), [0, 4, 6, 12, 76]));
// .map()
// creates a new array with the results of calling a provided
// function on every element in this array
  var doubleArr = numArr.map(function(a) {return a * 2;});
  console.assert(equalArrays((numArr), [0, 45, 23, 4, 6, 7, 12, 9, 76]));
  console.assert(equalArrays((doubleArr), [0, 90, 46, 8, 12, 14, 24, 18, 152]));
