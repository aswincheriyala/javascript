// 3.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]


var last = function last(array, n) {
if (array == null) return void 0;
if (n == null) return array[array.length - 1];
return array.slice(Math.max(array.length - n, 1));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));