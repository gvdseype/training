let rlSync = require('readline-sync');

function multiply(number1, number2) {
  let sum = number1 * number2;
  return sum;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let firstNumber = getNumber("What's the first number?\n")
let secondNumber = getNumber("What's the second number?\n")
multiply(firstNumber, secondNumber)