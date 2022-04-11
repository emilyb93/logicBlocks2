const { readFileSync } = require("fs");
const inputCaptcha = readFileSync("./input.txt", "utf8");

// First this will 'circle' the list by joining the back to the front with any possible succeeding numbers

const lastNum = inputCaptcha[inputCaptcha.length - 1];

let indexOfLastMatch;

for (let i = 0; i < inputCaptcha.length; i++) {
  if (inputCaptcha[i] !== lastNum) {
    indexOfLastMatch = i;
    break;
  }
}

// Once we find the point at which the end data stops matching the start data, we can slice and join them together
const firstNums = inputCaptcha.substring(0, indexOfLastMatch);

const circledList = inputCaptcha.substring(indexOfLastMatch) + firstNums;

// Using regEx i get an array of all the substrings that have repeated numbers

const repeatedNumRegex =
  /[1]{2,}|[2]{2,}|[3]{2,}|[4]{2,}|[5]{2,}|[6]{2,}|[7]{2,}|[8]{2,}|[9]{2,}/g;

const repeatedNumbers = circledList.match(repeatedNumRegex);

// Here i total all the numbers in the list i created, saving me from having to loop over every single number and check whats behind/in front

let total = 0;

repeatedNumbers.forEach((numString) => {
  total += numString[0] * (numString.length - 1);
});

console.log(total);
