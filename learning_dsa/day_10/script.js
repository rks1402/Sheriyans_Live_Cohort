const prompt = require("prompt-sync")();

// const n = prompt("Enter the value of n : ");

// for (let i = 0; i < n; i++) {
//   process.stdout.write("* ");
// }
// console.log("");

// right triangle

// const n = prompt("Enter the value of n : ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("");
// }

// right triangle with numbers

// const n = prompt("Enter the value of n : ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log("");
// }

// right traingle with alphabets

// const n = prompt("Enter the value of n : ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(j + 64) + " ");
//   }
//   console.log("");
// }

// inverted right triangle

// const n = prompt("Enter the value of n : ");

// for (let i = n; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     process.stdout.write("* ");
//   }
//   console.log("");
// }

// mirror right angle triangle

// const n = prompt("Enter the value of n : ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("");
// }

// pyramid

// const n = prompt("Enter the value of n : ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("");
// }

// X pattern

// const n = Number(prompt("Enter the value of n : "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log("");
// }

// V pattern

const n = Number(prompt("Enter the value of n : "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n*2; j++) {
    if (i == j || i + j == n*2) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log("");
}
