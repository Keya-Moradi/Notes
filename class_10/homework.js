/**
 * homework:
 *
 * - create a JS program that takes the two arrays, A and B, and uses push/pop to put all elements in A into B, in reverse order
 * e.g.:
 *
 * 		at the end, A will be [],
 * 		and B will be [9,8,7,6,5,4,3,2,1,0]
 */

var A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var B = [];

// your code here

// this is a mental tongue-twister; and you *can* do this using only push and pop together (hint! hint!)

/**
 * Part 2
 *
 * Investigate this, we'll discuss tomorrow
 *
 * Hint: write some code with push('jace'), pop('dennis'), and arr[1] = 'mark' and investigate what is happening. Just try to explain in English :-)
 */

var arr = [];
arr[999] = 'john';
console.log(arr.length);

/**
 * Part 3
 *
 * sort() an array with your own comparator (refer to notes)
 *
 * one comparator will return the objects in alphabetical order compared to their name,
 * one comparator will return the objects in reverse
 *
 * array reference on w3c: http://www.w3schools.com/jsref/jsref_obj_array.asp
 */

var myComparator = function(a, b) {
    return a - b;
}

var myComparatorReverse = function(a, b) {
    return b - a;
}

// fix the above two to sort the objects by 'name'

var list1 = [{
    name: 'michael'
}, {
    name: 'khalid'
}, {
    name: 'amy'
}, {
    name: 'keya'
}, {
    name: 'joey'
}, {
    name: 'david'
}, {
    name: 'roberto'
}, {
    name: 'darron'
}]

var list2 = list1.concat([]);

list1.sort(myComparator);
list2.sort(myComparatorReverse);
