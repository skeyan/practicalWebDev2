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
arr = [1,,2,3]
arr2 = [10,12,14]
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
    mapped = []
    for (let i = 0; i < this.length; i++) {
        if (!(i in this)) {
            continue;
        }
        mapped[i] = callback(this[i], i, this);
    }
    return mapped;
};

/* Tests for MAP */
arr = [1,undefined,2,3]
arr2 = [10,12,14]
arr3 = [1,,2,3]
console.log("MY MAP:", arr2.myMap(element => element * 2));
console.log("MAP (expected):", arr2.map(element => element * 2));

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

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
