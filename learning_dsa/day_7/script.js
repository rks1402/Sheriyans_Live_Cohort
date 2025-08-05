// Loops assignment

// Q1 - ISBN Number Validatior

// let number = "8175257660";
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum = sum + number[i] * (i + 1);
// }
// if (sum % 11 == 0) console.log("Valid ISBN");
// else console.log("Not valid ISBN");

// Q2 - HCF/GCD
// used Euclidean algorithm - GCD(a,b) = GCD(b,a%b)

// let a = 12;
// let b = 18;

// while (b !== 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log("HCF/GCD of a and b is " + a);

// Q3 - Harshad Number

// let number = 24;
// let number_copy = number;
// let sum = 0;
// while (number_copy != 0) {
//   sum = sum + (number_copy % 10);
//   number_copy = Math.floor(number_copy / 10);
// }
// if (number % sum == 0) console.log("Harshad Number");
// else console.log("Not a Harshad Number");

// Q4 - Perfect Square

// let number = 64;
// let isInteger = Number.isInteger(Math.sqrt(number));
// if(isInteger) console.log("Perfect Square");
// else console.log("Not a Perfect Square");

// Q5 - Abundant Number

// let number = 24;
// let sum = 1;

// if (number <= 0) console.log("Invalid Number");
// if (number == 1) console.log("Not an Abundant Number");
// for (let i = 2; i <= number / 2; i++) {
//   if (number % i == 0) {
//     sum += i;
//   }
// }
// if (sum > number) console.log("Abundant Number");
// else console.log("Not an Abundant Number");

// Q6 - Fibonacci Series using Loop

// let terms = 7;
// let first = 0,
//   second = 1;

// for (let i = 0; i < terms; i++) {
//   if (i == 0) {
//     console.log(first);
//     continue;
//   }
//   if (i == 1) {
//     console.log(second);
//     continue;
//   }
//   console.log(first + second);
//   let temp = second;
//   second = first + second;
//   first = temp;
// }

// Q8 - Prime factors of a Number

let number = 1092;
for (let i = 2; i <=number; ) {
  if (number % i == 0) {
    console.log(i);
    number /= i;
  } else {
    i++;
  }
}
