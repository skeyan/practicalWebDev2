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
Array.prototype.myIncludes = function(searchElement, index) {
    let start = 0;
    if (index) {
        if (index < 0) {
            calc = this.length + index;
            if (calc > 0) {
                start = calc;
            }
        } else if (index >= this.length) {
            return false;
        } else {
            start = index;
        }
    }
    for (let i = start; i < this.length; i++) {
        if (this[i] == searchElement || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
            return true;
        }
    }
    return false;
};

/* Tests for INCLUDES */
// const includesArr = [undefined,1,2,3,4,5];
// console.log("MY INCLUDES:", includesArr.myIncludes(3, -10));
// console.log("INCLUDES (expected):", includesArr.includes(3, -10));
// console.log("MY INCLUDES:",[1, 2, NaN].myIncludes(NaN));
// console.log("INCLUDES (expected):",[1, 2, NaN].includes(NaN));
// console.log("MY INCLUDES:",[1,2,3].myIncludes(3,3));
// console.log("INCLUDES (expected):",[1,2,3].includes(3,3));

// INDEXOF //
/**
 * @param searchElement, (optional) index
 * @return first index of element in array; -1 if not found
 * 
 * indexOf() compares searchElement to elements of the Array 
 * using strict equality (the same method used by the === or triple-equals operator).
 */
Array.prototype.myIndexOf = function(searchElement, index) {
    let start = 0;
    if (index) {
        if (index < 0) {
            calc = this.length + index;
            if (calc > 0) {
                start = calc;
            }
        } else if (index >= this.length) {
            return false;
        } else {
            start = index;
        }
    }
    for (let i = start; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;
};

/* Tests for INDEX OF */
// const indexArr = [2, 9, 9];
// console.log("MY INDEX OF:", indexArr.myIndexOf(2)); 
// console.log("MY INDEX OF:", indexArr.indexOf(2)); 
// console.log("MY INDEX OF:", indexArr.myIndexOf(7)); 
// console.log("MY INDEX OF:", indexArr.indexOf(7)); 
// console.log("MY INDEX OF:", indexArr.myIndexOf(2,-8)); 
// console.log("MY INDEX OF:", indexArr.indexOf(2,-8)); 
// console.log("MY INDEX OF:", indexArr.myIndexOf(9,-2)); 
// console.log("MY INDEX OF:", indexArr.indexOf(9,-2)); 


// PUSH //
/**
 * @param element(s) to add to end of array
 * @return new length
 * The push method appends values to an array. The push method relies 
 * on a length property to determine where to start inserting the given 
 * values. If the length property cannot be converted into a number, 
 * the index used is 0. This includes the possibility of length being nonexistent, 
 * in which case length will also be created.
 */
Array.prototype.myPush = function(...elements) {
    let elementIndex = 0;
    const length = this.length;
    for (let i = length; i < length + elements.length; i++) {
        this[i] = elements[elementIndex];
        elementIndex++;
    }
    return this.length;
};

/* Tests for PUSH */
// let pushArr = [];
// pushArr.myPush(1,1,1,1,1,undefined);
// console.log(pushArr);

// LASTINDEXOF //
/**
 * @param searchElement, (optional) index
 * @returns last index of the element in the array; -1 if not found
 * The lastIndexOf() method returns the last index at which a given element 
 * can be found in the array, or -1 if it is not present. The array is searched backwards, 
 * starting at fromIndex.
 * lastIndexOf compares searchElement to elements of the Array 
 * using strict equality (the same method used by the ===, or triple-equals, operator).
 * 
 * index is the index at which to start searching backward. It defauls to (arr.length - 1)
 * ie. searches the whole array. If the index is greater than or equal to the length of the 
 * array, the whole array will be searched. If negative, it is taken as the offset from the 
 * end of the array. Note that even when the index is negative, the array is still searched 
 * from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array 
 * will not be searched.
 */
Array.prototype.myLastIndexOf = function(searchElement, index) {
    let start = this.length - 1;
    if (index) {
        if (index < 0) {
            calc = this.length + index;
            if (calc < 0) {
                return -1;
            }
            start = calc;
        } else if (index < this.length) {
           start = index;
        }
    }
    for (let i = start; i >= 0; i--) {
        if (this[i] == searchElement) {
            return i;
        }
    }
    return -1;
};

/* Tests for LAST INDEX OF */
// const numbers = [2, 2, 9, 2];
// console.log("MY LAST INDEX OF:", numbers.myLastIndexOf(2));
// console.log("LAST INDEX OF (expected):", numbers.lastIndexOf(2));
// console.log("MY LAST INDEX OF:", numbers.myLastIndexOf(9));
// console.log("LAST INDEX OF (expected):", numbers.lastIndexOf(9));
// console.log("MY LAST INDEX OF:", numbers.myLastIndexOf(2,-2));
// console.log("LAST INDEX OF (expected):", numbers.lastIndexOf(2,-2));

// KEYS //
/**
 * @param Object
 * @return array of strings that represent all the enumerable properties of the given object
 * The Object.keys() method returns an array of a given object's own 
 * enumerable property names, iterated in the same order that a normal loop would.
 */
Object.grabKeys = function() {
    let keys = [];
    for(const key in this) {
        keys.push(key);
    }
    return keys;
};

/* Tests for KEYS */
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj)); // console: ['2', '7', '100']
// const arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); // console: ['0', '1', '2']
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// VALUES //
Object.grabValues = function() {

};
