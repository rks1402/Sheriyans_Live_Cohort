// if-else

// leap year or not

// method - 1

// let year = 2000;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(year + " is a leap year");
//       return;
//     } else {
//       console.log(year + " is not a leap year");
//       return;
//     }
//   } else {
//     console.log(year + " is a leap year");
//     return;
//   }
// } else {
//   console.log(year + " is not a leap year");
// }

// method - 2

// if(year % 4 == 0 && year % 100 != 0){
//     console.log(year + " is a leap year");
// }else if (year % 400 == 0) {
//     console.log(year + " is a leap year");
// } else {
//     console.log(year + " is not a leap year");
// }

// shop discount

// let amount = -10000;
// let discount = 0;

// if(amount >=0 && amount <=5000){
//     discount = 0;
// }else if(amount >=5001 && amount <=7000){
//     discount = 5;
// }else if(amount >=7001 && amount <=9000){
//     discount = 10;
// }else if(amount > 9000){
//     discount = 20;
// }else{
//     console.log("invalid input");
//     return;
// }

// console.log(amount - (amount*discount)/100);

// bijli bill

// method - 1

// let unit = 250;
// let amount = 0;

// if (unit >= 0 && unit <= 100) {
//   amount = unit * 4.2;
// } else if (unit >= 101 && unit <= 200) {
//   amount = (unit - 100) * 6 + 100 * 4.2;
// } else if (unit >= 201 && unit <= 400) {
//   amount = (unit - 200) * 8 + 100 * 6 + 100 * 4.2;
// } else if (unit > 400) {
//   amount = (unit - 400) * 13 + 200 * 8 + 100 * 6 + 100 * 4.2;
// } else {
//   console.log("invalid input");
//   return;
// }
// console.log(amount);

// method - 2

// let unit = 150;
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit >= 201 && unit <= 400) {
//     amount = (unit - 200) * 8 + amount;
//     unit = 200;
// }
// if(unit >= 101 && unit <=200){
//     amount = (unit - 100) * 6 + amount;
//     unit = 100;
// }
// if(unit >=0 && unit <= 100){
//     amount = unit * 4.2 + amount;
// }

// console.log(amount);

// Assignment

// Q1

// let amount = 4327;

// if (amount >= 2000) {
//   console.log("₹2000x" + Math.floor(amount / 2000));
//   amount = amount % 2000;
// } else {
//   console.log("₹2000x0");
// }
// if (amount >= 500) {
//   console.log("₹500x" + Math.floor(amount / 500));
//   amount = amount % 500;
// } else {
//   console.log("₹500x0");
// }
// if (amount >= 200) {
//   console.log("₹200x" + Math.floor(amount / 200));
//   amount = amount % 200;
// } else {
//   console.log("₹200x0");
// }
// if (amount >= 100) {
//   console.log("₹100x" + Math.floor(amount / 100));
//   amount = amount % 100;
// } else {
//   console.log("₹100x0");
// }
// if (amount >= 50) {
//   console.log("₹50x" + Math.floor(amount / 50));
//   amount = amount % 50;
// } else {
//   console.log("₹50x0");
// }
// if (amount >= 20) {
//   console.log("₹20x" + Math.floor(amount / 20));
//   amount = amount % 20;
// } else {
//   console.log("₹20x0");
// }
// if (amount >= 10) {
//   console.log("₹10x" + Math.floor(amount / 10));
//   amount = amount % 10;
// } else {
//   console.log("₹10x0");
// }
// if (amount >= 5) {
//   console.log("₹5x" + Math.floor(amount / 5));
//   amount = amount % 5;
// } else {
//   console.log("₹5x0");
// }
// if (amount >= 2) {
//   console.log("₹2x" + Math.floor(amount / 2));
//   amount = amount % 2;
// } else {
//   console.log("₹2x0");
// }
// if (amount >= 1) {
//   console.log("₹1x1");
// } else {
//   console.log("₹1x0");
// }

// Q2

// let movie = prompt("Enter movie name.");
// let rating = Number(prompt("Enter rating for the movie."));

// if (rating >= 0.0 && rating <= 2.0) {
//   console.log(movie + " is a Flop");
// } else if (rating >= 2.1 && rating <= 3.4) {
//   console.log(movie + " is a Semi-hit");
// } else if (rating >= 3.5 && rating <= 4.5) {
//   console.log(movie + " is a Hit");
// } else if (rating >= 4.6 && rating <= 5.0) {
//   console.log(movie + " is a Super Hit");
// } else {
//   console.log("Invalid input");
// }


// Q3 - easy hai nested if statement lagegi bss