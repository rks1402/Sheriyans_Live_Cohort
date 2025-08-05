const prompt = require("prompt-sync")();

// second largest element in array

// let arr = [23, 4545, 223, 12543, 66, 787, 12543];
// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secMax = max;
//     max = arr[i];
//   } else if (arr[i] > secMax && arr[i] != max) {
//     secMax = arr[i];
//   }
// }

// console.log("Second largest element is : " + secMax);

// reverse the array

// let arr = [1,2,3,4,5];
// let start = 0;
// let end = arr.length - 1;

// while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }

// console.log(arr);

// all the zeros to the left and ones to the right

// let arr = [1, 1, 0, 0, 1, 0, 1, 1, 0, 0];
// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j++;
//   } else {
//     i++;
//   }
// }

// console.log(arr);

// array left rotation by 1

// let arr = [1, 2, 3, 4, 5, 6];
// let first = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;

// console.log(arr);

// array left rotation by k elements

// Method - 1

// let arr = [1, 2, 3, 4, 5, 6];
// let k = Number(prompt("Enter the value of k : "));
// k = k % arr.length; // for optimization, when k == arr.length or k > arr.length

// for (let j = 0; j < k; j++) {
//   let first = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = first;
// }

// console.log(arr);

// Method - 2 - more efficient

// let arr = [1, 2, 3, 4, 5, 6];
// let k = Number(prompt("Enter the value of k : "));
// k = k % arr.length; // for optimization, when k == arr.length or k > arr.length
// let temp = new Array(arr.length);

// for(let i=0; i<arr.length; i++){
//     temp[i] = arr[(i+k) % arr.length];
// }

// console.log(temp);

// Method - 3 - most efficient - block swap reverse algorithm

// let arr = [1, 2, 3, 4, 5, 6];
// let k = Number(prompt("Enter the value of k : "));
// k = k % arr.length; // for optimization, when k == arr.length or k > arr.length

// function reverseArray(arr, i, j) {
//   let start = i;
//   let end = j;
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// reverseArray(arr, 0, k - 1);
// reverseArray(arr, k, arr.length - 1);
// reverseArray(arr, 0, arr.length - 1);

// console.log(arr);

// Linear Search Algorithm

// let arr = [12, 43, 21, 45, 76, 34, 55, 22, 88, 77, 65];
// let n = Number(prompt("Enter the number to search : "));
// let index = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === n) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// Binary Search Algorithm

let arr = [12, 23, 43, 54, 65, 72, 88, 100];
let n = Number(prompt("Enter the number to search : "));

let start = 0;
let end = arr.length - 1;
let mid = 0;
let index = -1;
while (start <= end) {
  mid = start + Math.floor((end - start) / 2);
  if (arr[mid] == n) {
    index = mid;
    break;
  } else if (arr[mid] < n) {
    start = mid + 1;
  } else if (arr[mid] > n) {
    end = mid - 1;
  }
}

if (index == -1) {
  console.log("Number not found");
} else {
  console.log("Number found at index : " + index);
}
