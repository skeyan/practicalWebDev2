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
let arr = [1,,2,3];
let arr2 = [10,12,14];
console.log("MY EACH:");
arr.myEach((element, i) => console.log(element, i));
console.log("FOR EACH (expected):");
arr.forEach((element, i) => console.log(element, i));

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
const mapArr = [1,undefined,2,3];
const mapArr2 = [10,12,14];
const mapArr3 = [1,,2,3];
console.log("MY MAP:", mapArr2.myMap(element => element * 2));
console.log("MAP (expected):", mapArr2.map(element => element * 2));

// FILTER //
/**
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
const words = ['spray', 'limit', 'elite',, 'exuberant', 'destruction', 'present'];
const nums = [0,1,,2,3,-1, undefined];
console.log("MY FILTER:", words.myFilter(word => word.length > 6));
console.log("FILTER (expected):", words.filter(word => word.length > 6));
console.log("MY FILTER:", nums.myFilter(num => num < 2));
console.log("FILTER (expected):", nums.filter(num => num < 2));

// SOME //
/**
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
const someArray = [-10,0,3,undefined,10.1,10]; 
console.log("MY SOME:", someArray.mySome(element => element > 10));
console.log("SOME (expected):", someArray.some(element => element > 10));

// EVERY //
Array.prototype.myEvery = function() {
    
};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

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
