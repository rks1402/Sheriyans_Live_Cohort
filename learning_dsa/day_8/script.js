// Assignment

// Q7 - Find Numbers with Exactly X Divisors

// Method - 1

let x = 5;
let limit = 100000;
if (x == 1) {
  return console.log(1);
}
for (let i = 2; i <= limit; i++) {
  let count = 1; // includes the number itself.

  for (let j = 1; j <= Math.floor(i / 2); j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == x) {
    console.log(i);
  }
}

// Method - 2 - optimised

// let x = 5;
// let limit = 1000000;
// if (x == 1) {
//   return console.log(1);
// }
// for (let i = 2; i <= limit; i++) {
//   let count = 0;
//   for (let j = 1; j * j <= i; j++) {
//     if (i % j == 0) {
//       if (i == j * j) {
//         count += 1;
//       } else {
//         count += 2;
//       }
//     }
//   }
//   if (count == x) {
//     console.log(i);
//   }
// }

// Q9 - Calculate area using Switch statement

// let shape = prompt("Enter the shape");

// switch (shape) {
//   case "circle": {
//     let radius = Number(prompt("Enter radius"));
//     console.log("Area is : " + (Math.PI * radius * radius).toFixed(2));
//     break;
//   }
//   case "rectangle": {
//     let length = Number(prompt("Enter length"));
//     let breadth = Number(prompt("Enter breadth"));
//     console.log("Area is : " + length * breadth);
//     break;
//   }
//   case "triangle": {
//     let base = Number(prompt("Enter base"));
//     let height = Number(prompt("Enter height"));
//     console.log("Area is : " + 0.5 * base * height);
//     break;
//   }
//   default: {
//     console.log("Invalid shape");
//   }
// }

// Q10 - Neon Number

// let number = 12;
// let square = number * number;
// let sum = 0;
// while (square > 0) {
//   sum += square % 10;
//   square = Math.floor(square / 10);
// }
// if (sum == number) console.log("Neon Number");
// else console.log("Not A Neon Number");

// Q11 - Sum of Even Indexed Fibonacci Numbers

// let n = 4;
// let sum = 0;
// let fib_n;
// let first = 0;
// let second = 1;
// for (let i = 0; i <= 2 * n; i++) {
//   if (i == 0) {
//     fib_n = first;
//     continue;
//   }
//   if (i == 1) {
//     fib_n = second;
//     continue;
//   }
//   let temp = second;
//   second = first + second;
//   first = temp;
//   fib_n = second;
//   if (i % 2 == 0) {
//     sum += fib_n;
//   }
// }
// console.log(sum);

// Q12 - Largest Digit in a Number

// let number = 54829;
// let largest = number % 10;

// while (number > 0) {
//   let digit = number % 10;
//   if (digit > largest) largest = digit;
//   number = Math.floor(number / 10);
// }

// console.log(largest);

// Q13 - Find LCM of two numbers - LCM(a,b) = (a * b) / GCD(a,b)

// let a = 12;
// let a_copy = a;
// let b = 15;
// let b_copy = b;
// let gcd;

// while (b_copy !== 0) {
//   let temp = b_copy;
//   b_copy = a_copy % b_copy;
//   a_copy = temp;
// }
// gcd = a_copy;
// let lcm = (a * b) / gcd;
// console.log("LCM of a and b is : " + lcm);

// Q14 - Find sum of even digits in a number

// let number = 2384;
// let sum = 0;

// while (number > 0) {
//   let digit = number % 10;
//   if (digit % 2 == 0) {
//     sum += digit;
//   }
//   number = Math.floor(number / 10);
// }

// console.log(sum);

// Q15 - Number of days in a month

// let month = 8;
// let year = 2021;

// if (month >=1 && month <= 7) {
//   if (month % 2 == 0) {
//     if (month == 2) {
//       if (year % 4 == 0 && year % 100 != 0) {
//         console.log(29);
//       } else if (year % 400 == 0) {
//         console.log(29);
//       } else {
//         console.log(28);
//       }
//     } else {
//       console.log(30);
//     }
//   } else {
//     console.log(31);
//   }
// }else if(month >=8 && month <=12){
//     if(month%2 == 0){
//         console.log(31);
//     }else{
//         console.log(30);
//     }
// }
