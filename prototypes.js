// FOR EACH //
/**
 * @param callback function
 * @return none
 * forEach() calls a provided callbackFn function once for each element in an array 
 * in ascending index order. It is not invoked for index properties that have been 
 * deleted or are uninitialized.
 * 
 * callbackFn is invoked with three arguments: the value of the element, the index of the element,
 * the Array object being traversed
 */
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            continue;
        }
        callback(this[i], i, this);
    }
};

/* Tests for FOR EACH */
// let arr = [1,,2,3];
// let arr2 = [10,12,14];
// console.log("MY EACH:");
// arr.myEach((element, i) => console.log(element, i));
// console.log("FOR EACH (expected):");
// arr.forEach((element, i) => console.log(element, i));

// MAP //
/**
 * @param callback function
 * @return new array
 * 
 * map calls a provided callbackFn function once for each element in an array, 
 * in order, and constructs a new array from the results. callbackFn is invoked only 
 * for indexes of the array which have assigned values (including undefined).
 * 
 * The callback function accepts the following arguments: current element being processed,
 * (optional) index of curernt element being processed, (optional) array map was called on
 */
Array.prototype.myMap = function(callback) {
    let mapped = [];
    for (let i = 0; i < this.length; i++) {
        if (!(i in this)) {
            continue;
        }
        mapped[i] = callback(this[i], i, this);
    }
    return mapped;
};

/* Tests for MAP */
// const mapArr = [1,undefined,2,3];
// const mapArr2 = [10,12,14];
// const mapArr3 = [1,,2,3];
// console.log("MY MAP:", mapArr2.myMap(element => element * 2));
// console.log("MAP (expected):", mapArr2.map(element => element * 2));

// FILTER //
/**
 * @param callback function
 * @return new array
 * filter() calls a provided callbackFn function once for each element in an 
 * array, and constructs a new array of all the values for which callbackFn 
 * returns a value that coerces to true. callbackFn is invoked only for indexes 
 * of the array which have assigned values; it is not invoked for indexes which 
 * have been deleted or which have never been assigned values. Array elements 
 * which do not pass the callbackFn test are skipped, and are not included in 
 * the new array.
 * 
 * callbackFn is invoked with three arguments: value of element, index of element,
 * array object being traversed.
 */
Array.prototype.myFilter = function(callback) {
    let passed = [];
    for (let i = 0; i < this.length; i++) {
        if (!(i in this)) {
            continue;
        }
        if (callback(this[i], i, this)) {
            passed.push(this[i]);
        }
    }
    return passed;
};

/* Tests for FILTER */
// const words = ['spray', 'limit', 'elite',, 'exuberant', 'destruction', 'present'];
// const nums = [0,1,,2,3,-1, undefined];
// console.log("MY FILTER:", words.myFilter(word => word.length > 6));
// console.log("FILTER (expected):", words.filter(word => word.length > 6));
// console.log("MY FILTER:", nums.myFilter(num => num < 2));
// console.log("FILTER (expected):", nums.filter(num => num < 2));

// SOME //
/**
 * @param callback function
 * @return boolean
 * The some() method executes the callbackFn function once for each 
 * element present in the array until it finds the one where callbackFn 
 * returns a truthy value (a value that becomes true when converted to a Boolean). 
 * If such an element is found, some() immediately returns true. 
 * Otherwise, some() returns false. 
 * 
 * callbackFn is invoked only for indexes of the array with assigned values. 
 * It is not invoked for indexes which have been deleted or which have never been assigned values.
 * 
 * callbackFn is invoked with three arguments: the value of the element, 
 * the index of the element, and the Array object being traversed.
 */
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

/* Tests for SOME */
// const someArray = [-10,0,3,undefined,10.1,10]; 
// console.log("MY SOME:", someArray.mySome(element => element > 10));
// console.log("SOME (expected):", someArray.some(element => element > 10));

// EVERY //
/**
 * @param callback function
 * @return boolean
 * The every method executes the provided callbackFn function once 
 * for each element present in the array until it finds the one where 
 * callbackFn returns a falsy value. 
 * If such an element is found, the every method immediately returns false. 
 * Otherwise, if callbackFn returns a truthy value for all elements, every returns true.
 * 
 * callbackFn is invoked only for array indexes which have assigned values. It is not 
 * invoked for indexes which have been deleted, or which have never been assigned values.
 * 
 * callbackFn is invoked with three arguments: the value of the element, the index 
 * of the element, and the Array object being traversed.
 */
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!(callback(this[i], i, this))) {
            return false
        }
    }
    return true;
};

/* Tests for EVERY */
// const everyArray = [,1,10.1,100]; 
// console.log("MY EVERY:", everyArray.every(element => element > 10));
// console.log("EVERY (expected):", everyArray.every(element => element > 10));

// REDUCE //
/**
 * @param callback, (optional) value
 * @return value
 * callbackfn should be a function that takes four arguments. 
 * reduce calls the callback, as a function, once for each element 
 * after the first element present in the array, in ascending order.
 * 
 * callbackfn is called with four arguments: the previousValue (value from the previous call to callbackfn),
 * the currentValue (value of the current element), the currentIndex, and the object being traversed
 * 
 * The first time that callback is called, the previousValue and currentValue can be one of two values:
 * 1. If an initialValue was supplied in the call to reduce, then previousValue will be equal to 
 * initialValue and currentValue will be equal to the first value in the array.
 * 2. If no initialValue was supplied, then previousValue will be equal to the first value in the 
 * array and currentValue will be equal to the second.
 * 
 * It is a TypeError if the array contains no elements and initialValue is not provided.
 */
Array.prototype.myReduce = function(callback, initialValue) {
    // TypeError
    if (this.length == 0 && initialValue == undefined) {
        throw new Error(TypeError);
    }

    // Edge cases
    if (this.length == 1 && initialValue == undefined) {
        return this[0]
    }
    if (initialValue && this.length == 0) {
        return initialValue;
    }

    // Other cases
    let accumulator = initialValue || this[0];
    const start = initialValue ? 0 : 1;
    for (let i = start; i < this.length; i++) {
        if (!(i in this)) {
            continue;
        }
        result = callback(accumulator, this[i], i, this)
        accumulator = result;
    }
    return accumulator;
};

/* Tests for REDUCE */
// const getSum = (a, b) => a + b;
// console.log("MY REDUCE:", [1, 100].myReduce(getSum, 50));
// console.log("REDUCE (expected):", [1, 100].reduce(getSum, 50));
// console.log("MY REDUCE:", [1, 100].myReduce(getSum));
// console.log("REDUCE (expected):", [1, 100].reduce(getSum));
// console.log("MY REDUCE:", [1].myReduce(getSum));
// console.log("REDUCE (expected):", [1].reduce(getSum));
// console.log("MY REDUCE:", [1,29,230,,-10].myReduce(getSum, 1));
// console.log("REDUCE (expected):", [1,29,230,,-10].reduce(getSum, 1));

// console.log("MY REDUCE:", [].myReduce(getSum));
// console.log("REDUCE (expected):", [].reduce(getSum));

// INCLUDES //
/**
 * @param searchElement, (optional) index 
 * @return boolean 
 * The includes() method determines whether an array includes a 
 * certain value among its entries, returning true or false as appropriate.
 */
Array.prototype.myIncludes = function(searchElement) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == searchElement) {
            return true;
        }
    }
    return false;
};

/* Tests for INCLUDES */
const includesArr = [1,2,3,undefined,,4,5];
console.log("MY INCLUDES:", includesArr.myIncludes(2));
console.log("INCLUDES (expected):", includesArr.includes(2));

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
