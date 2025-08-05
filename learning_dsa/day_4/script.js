// Loops

// print "hello world" n times

// let n = 3;
// if (isNaN(n)) {
//   console.log("Invalid Input");
// } else {
//     let i;
//   for (i = 1; i <= n; i++) {
//     console.log("hello world");
//   }
//   console.log("Loop condition fail at i = " + i);
// }

// print natural number upto n;

// let n = 10;

// 1 to n

// for(let i=1; i<=n; i++){
//     console.log(i);
// }

// n to 1

// for(let i=n; i>=1; i--){
//     console.log(i);
// }

// print a table of number n

// let n = 4;
// for(let i = 1; i<=10; i++){
//     console.log(n + " x " + i + " = " + (i*n));
// }

// print the sum of all numbers upto n

// let n = 8;
// let sum = null;
// for(let i=1; i<=n; i++){
//     sum += i;
// }
// console.log(sum);

// factorial of a number n

// let n = 6;
// let factorial = 1;
// for(let i=1; i<=n; i++){
//     factorial *= i;
// }
// console.log(factorial);

// sum of all even and odd number in a range seperately

// let start = 3;
// let end = 10;
// let even_sum = null;
// let odd_sum = null;

// for (let i = start; i <= end; i++) {
//   if (i % 2 == 0) {
//     even_sum += i;
//   } else {
//     odd_sum += i;
//   }
// }

// console.log("Even sum is : " + even_sum);
// console.log("Odd sum is : " + odd_sum);

// print all the factors of a number n

// let n = 77;

// console.log(1);
// for (let i = 2; i <= n / 2; i++) {
//   if (n % i == 0) console.log(i);
// }
// console.log(n);

// print a number is prime or not

// method - 1

// let n = 15;
// let isPrime = true;
// for (let i = 2; i <= n / 2; i++) {
//   if (n % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log(n + " is a prime number");
// } else {
//   console.log(n + " is not a prime number");
// }

// method - 2

// let n = 23;

// function isPrimeNum(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i=i+2) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let isPrime = isPrimeNum(n);

// if (isPrime) {
//   console.log(n + " is a prime number");
// } else {
//   console.log(n + " is not a prime number");
// }