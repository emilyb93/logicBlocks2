const { readFileSync } = require("fs");
const inputCaptcha = readFileSync("./input.txt", "utf8");

let total = 0;

const firstNum = inputCaptcha.slice(0, 1);

const circledList = inputCaptcha + firstNum;

const repeatedNumRegex =
  /[1]{2,}|[2]{2,}|[3]{2,}|[4]{2,}|[5]{2,}|[6]{2,}|[7]{2,}|[8]{2,}|[9]{2,}/g;

const repeatedNumbers = circledList.match(repeatedNumRegex);

repeatedNumbers.forEach((numString) => {
  total += numString[0] * (numString.length - 1);
});

console.log(total);
