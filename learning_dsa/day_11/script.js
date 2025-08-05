let prompt = require("prompt-sync")();

// strong number

// let n = Number(prompt("Enter the value of n : "));
// let n_copy = n;
// let sum = 0;

// while (n_copy) {
//   let digit = n_copy % 10;
//   let factorial = 1;
//   for (let i = 1; i <= digit; i++) {
//     factorial *= i;
//   }
//   sum += factorial;
//   n_copy = Math.floor(n_copy / 10);
// }

// if (sum == n) {
//   console.log(n + " is a strong number.");
// } else {
//   console.log(n + " is not a strong number.");
// }

// Arrays

// let arr = [10, 20, 30, 40];
// arr.push(100); // adds element to the end
// arr.unshift(101); // adds element to the start
// console.log(arr);
// arr.pop(); // removes element from the end
// console.log(arr);
// arr.shift(); // remove element from the start
// console.log(arr);

// another way to define array

// let arr = new Array(4); // array size is 4;
// arr.push(100); // will push after the 4 empty spaces
// console.log(arr);

// Hence, all arrays in JS are dynamic arrays, there are no static arrays in JS

// getting array element from user

// let size = Number(prompt("Enter the size of array : "));
// let arr = new Array(size);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the value : "));
// }

// console.log(arr);

// Sum of element of an array

// let size = Number(prompt("Enter the size of array : "));
// let arr = new Array(size);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the value : "));
//   sum += arr[i];
// }

// console.log("Sum of array is : " + sum);

// Max element of an array

let arr = [23, 4545, 223, 12543, 66, 787];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Max of an array is : " + max);
