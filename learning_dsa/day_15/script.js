/*

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(`${arr[i][j]} `);
  }
  console.log("");
}

*/

/*

let prompt = require("prompt-sync")();
let arraySize = Number(prompt("Enter size of array : "));
let arr = new Array(arraySize);
let innerArraySize = Number(prompt("Enter the size of inner array : "));

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(innerArraySize);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(prompt("Enter element : "));
  }
}

console.log(arr);

*/

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
let mid = Math.floor(arr.length / 2);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i + j == arr.length - 1 || i == j) {
      sum += arr[i][j];
    }
  }
}

console.log(sum);