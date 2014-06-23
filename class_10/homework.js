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
 * I'm removing this part 3 :-) on array.sort()
 *
 * I've concluded it was too fast, and I'm sorry for that oversight. We'll talk about the following in the morning, and recollect our thoughts on sort().
 *
 * instead, just play with:
 *
 * array.reverse(),
 * array.concat(),
 * array.shift(),
 * and array.unshift()
 *
 * details: http://www.w3schools.com/jsref/jsref_obj_array.asp
 */