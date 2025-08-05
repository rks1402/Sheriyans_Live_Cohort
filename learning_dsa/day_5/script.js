// loops again

// break & continue

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i == 3) continue; // skips current iteration
//   if (i == 6) break; // breaks the flow out of loop i.e. end the loop
//   console.log(i);
// }

// while loop

// print hello n times

// let n = 5;
// let i = 1;
// while (i <= n) {
//   console.log("Hello");
//   i++;
// }

// sum of digits of a number n

// let n = 3432552;
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// reverse of a number

// let n = 345225;
// let n_reverse = 0;
// while (n > 0) {
//   let digit = n % 10;
//   n_reverse = n_reverse * 10 + digit;
//   n = Math.floor(n / 10);
// }
// console.log(n_reverse);

// number n is automorphic or not

// method - 1

// let n = 6;
// let number = n;
// let square = number * number;
// let isAutomorphic = true;
// while (number > 0) {
//   let number_last_digit = number % 10;
//   let square_last_digit = square % 10;
//   if (number_last_digit != square_last_digit) {
//     isAutomorphic = false;
//     break;
//   }
//   number = Math.floor(number / 10);
//   square = Math.floor(square / 10);
// }

// if (isAutomorphic) console.log(n + " is an Automorphic number");
// else console.log(n + " is not an Automorphic number");

// method - 2

// let n = 25;
// let number = n;
// let square = number * number;
// let count = 0;

// while (number > 0) {
//   count++;
//   number = Math.floor(number / 10);
// }

// if (n == square % Math.pow(10, count)) {
//   console.log(n + " is an Automorphic number");
// } else {
//   console.log(n + " is not an Automorphic number");
// }

// switch-case // used when we want execution based on constant value

// let n = 10;

// switch (n) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thrusday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("not valid");
// }

// multiple constant have same execution

// let n = 9;

// switch (n) {
//   case 1:
//   case 2:
//   case 3: {
//     console.log("monday");
//     break;
//   }

//   case 4:
//   case 5:
//   case 6: {
//     console.log("thrusday");
//     break;
//   }

//   case 7: {
//     console.log("sunday");
//     break;
//   }
//   default: {
//     console.log("not valid");
//   }
// }

