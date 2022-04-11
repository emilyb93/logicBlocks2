const { readFileSync } = require("fs");
const inputCaptcha = readFileSync("./input.txt", "utf8");

// First this will 'circle' the list by moving the '4' from the front to the end of the string

const firstNum = inputCaptcha.slice(0, 1);

const circledList = inputCaptcha + firstNum;

// Use regex to find any repeated number substrings
const repeatedNumRegex =
  /[1]{2,}|[2]{2,}|[3]{2,}|[4]{2,}|[5]{2,}|[6]{2,}|[7]{2,}|[8]{2,}|[9]{2,}/g;

const repeatedNumbers = circledList.match(repeatedNumRegex);

// Add the numbers from the list to a total
let total = 0;

repeatedNumbers.forEach((numString) => {
  total += numString[0] * (numString.length - 1);
});

console.log(total);
