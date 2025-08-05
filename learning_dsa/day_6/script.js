// do-while loops - will run atleast one time

// repeat hello

// let userInput;

// do {
//   console.log("namaste duniya");
//   userInput = prompt("kya app repeat krna chahte hai ? yes/no").toLowerCase();
// } while (userInput === "yes");

// guess the number

// let number = Math.floor(Math.random() * 9 + 1);
// let userInput;
// let gameContinue = true;
// do {
//   console.log(number);
//   userInput = Number(prompt("Guess the number between 1 to 10"));
//   if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//     alert("Please enter valid input i.e. number between 1 to 10");
//     continue;
//   }
//   if(userInput < number){
//     console.log("Too low, try higher");
//   }
//   else if (userInput > number) {
//     console.log("Too high, try lower");
//   }else{
//     console.log("Congrats 🎉, correct guess");
//     gameContinue = false;
//   }
// } while (gameContinue);

// sasta calculator

let repeat = true;

do {
  let num1 = Number(prompt("Enter the first number"));
  let num2 = Number(prompt("Enter the second number"));
  let operator = prompt("Enter a valid operator i.e. (+,-,*,/)");

  switch (operator) {
    case "+": {
      console.log("result is : " + (num1 + num2));
      break;
    }
    case "-": {
      console.log("result is : " + (num1 - num2));
      break;
    }
    case "*": {
      console.log("result is : " + num1 * num2);
      break;
    }
    case "/": {
      if (num2 !== 0) {
        console.log("result is : " + (num1 / num2).toFixed(2));
      } else {
        console.log("Please enter valid input.");
      }
      break;
    }
    default: {
      console.log("Please enter valid operator!");
    }
  }
  let isRepeat = prompt("Do you want to continue ? yes/no").toLowerCase();
  if (isRepeat === "no") repeat = false;
} while (repeat);
