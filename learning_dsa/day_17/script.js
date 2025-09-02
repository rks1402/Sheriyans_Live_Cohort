const prompt = require("prompt-sync")();

// Strings

// Strings are immutable in nature
// String is an array of character - wrong
// strings are sequence of character
// strings shows behaviour like arrays

// string methods

// 1. length

let str = "rahulKumarSharma";
// console.log(str.length);

// 2. substring

/*
console.log(str.substring(2));
console.log(str.substring(2,10));
*/

// 3. slice - also works in negative indexes

/*
console.log(str.slice(2));
console.log(str.slice(2,10));
console.log(str.slice(-5));
console.log(str.slice(-5,-2));
*/

// 4. toUpperCase & toLowerCase

/*
console.log(str.toUpperCase());
console.log(str.toLowerCase());
*/

// 5. concat

/*
console.log(str.concat(" is ", "a ", "great ", "developer."));
*/

// 6. trim - removes spaces from both front and end of string

/*
let s = "  shree ram ji is awesome ram";
console.log(s.trim());
*/

// 7. indexOf - returns the first index of substring

/*
console.log(s.indexOf("ram"));
*/

// 8. lastIndexOf - returns the last index of substring

/*
console.log(s.lastIndexOf("ram"));
*/

// 9. includes - checks if substring exists

/*
console.log(s.includes("ram"));
console.log(s.includes("ramm"));
*/

// 10. startsWith & endsWith - checks if string starts with & ends with the substring

/*
console.log(s.startsWith("ram"));
console.log(s.endsWith("ram"));
*/

// 11. replace - replace first occurance of substring

/*
console.log(s.replace("ram", "rama"));
*/

// 12. replaceAll - replace all occurance of substring

/*
console.log(s.replaceAll("ram", "rama"));
*/

// split - splits string into an array

/*
console.log(s.split(" "));
*/

// charAt - returns character at index

/*
console.log(s.charAt(12));
*/

// charCodeAt - returns unicode value of character

/*
console.log(s.charCodeAt(12));
*/

// Q - Accept a string from user and print its each character on a new line

/*
const userString = prompt("Enter the string : ");
for(let i=0; i<userString.length; i++){
    console.log(userString[i]);
}
*/

// Q - Accept a string from user and print it in reverse

/*
let rev = ""
const userString = prompt("Enter the string : ");
for(let i=userString.length-1; i>=0; i--){
    rev = rev + userString.charAt(i);
}
console.log(rev);
*/

// Q - Check if a string is palindrome or not using two pointer approach

/*
let s = "nitin";
let first = 0;
let last = s.length - 1;
let isPalindrome = true;
while (first < last) {
  if (s[first] != s[last]) {
    isPalindrome = false;
    break;
  }
  first++;
  last--;
}

if (isPalindrome) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}
*/
