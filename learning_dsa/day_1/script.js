// - sum of two integers

// let a = 12;
// let b = 13
// console.log(a+b);

/*
    string + string = string (concatenation)
    string + int = string (concatenation)
    int + int = int (arithmatic)
*/

// let a = "Hello";
// let b = "World";
// console.log(a+b);

// let a = "Hello";
// let b = 10;
// console.log(a+b);

// let a = 13;
// let b = 10;
// console.log(a+b);

// - sum and message

// let a = 12;
// let b = 13;

// console.log("sum of " + a + " and sum of " + b + " is " + (a+b));

// - type coercion

// console.log(5 + "2"); // output is 52 (string)
// console.log(5 - "2"); // outoput is 3 (int)

// - accept and print the answer

// process.stdin.setEncoding('utf8');
// process.stdout.write("Enter your age ");

// process.stdin.on("data", (input) => {
//   let age = input.trim();
//   console.log("Your age is",age);
//   console.log(typeof(age));
//   process.exit();
// });

// let age = Number(prompt("Enter a age")); // by default prompt give string data and by usign Number we are converting it to integer.
// console.log(age);

// - swap two variables via 3 methods

// first method - by using a third variable

// let a = 10;
// let b = 20;
// console.log(a,b);

// let temp = a;
// a = b;
// b = temp;
// console.log(a,b);

// second method - mathematical calculation

// let a = 10;
// let b = 20;
// console.log(a,b);

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// third method - by destructuring operator

// let a = 10;
// let b = 20;
// console.log(a,b);

// [a, b] = [b, a];
// console.log(a,b);

// Assignment questions

// Q1

// let i = 11;
// i = i++ + ++i;
// console.log(i);

// Q2

// let a = 11,
//   b = 22,
//   c;
// c = a + b + a++ + b++ + ++a + ++b;
// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c = " + c);

// Q3

// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i);

// Q4

// let b = true;
// b++;
// console.log(b);

// Q5

// let i = 1,
//   j = 2,
//   k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// console.log("m=" + m);

// Q6

// let a = 1, b = 2;
// console.log(--b - ++a + ++b - --a);

// Q7

// let i = 19, j = 29, k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);

// Q8

// let i = 11;
// let j = --(i++);

// Q9

// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p);

// Q10

// let a = 1;
// a = a++ + ++a * --a - a--;
// console.log(a);

// Q11

// let a = 11++;
// console.log(a);

// Q12

// let i = 0, j = 0;
// console.log(--i * i++ * ++j * j++);