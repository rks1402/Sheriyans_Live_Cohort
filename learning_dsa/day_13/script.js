const prompt = require("prompt-sync")();

// Bubble Sort

// let arr = [2,4,1,6,3,7];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     } else {
//       continue;
//     }
//   }
// }

// console.log(arr);

// Selection Sort

// let arr = [2, 4, 1, 6, 3, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) {
//       small = j;
//     }
//   }
//   if (small != i) {
//     let temp = arr[i];
//     arr[i] = arr[small];
//     arr[small] = temp;
//   }
// }

// console.log(arr);

// Insertion Sort

let arr = [1, 4, 3, 2, 9, 10];

for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}

console.log(arr);


