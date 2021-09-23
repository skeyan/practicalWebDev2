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
console.log("FOR EACH:");
arr.forEach((element, i) => console.log(element, i));

// MAP //
Array.prototype.myMap = function() {

};

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
