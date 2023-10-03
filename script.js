"Use strict"

let number1;
let number2;
let operator;
let result;

const displayValue = document.querySelector(".value");
const displayMemory = document.querySelector(".memory");
let value = 0;
let memory = 0;
displayValue.textContent = value;
displayMemory.textContent = memory;

// console.log(operate(number1, number2));

// function operate(number1, number2) {
//     const operations = {};
//     operations.add = function() {
//         result = number1 + number2;
//     }
//     operations.subtract = function() {
//         result = number1 - number2;
//     }
//     operations.multiply = function() {
//         result = number1 * number2;
//     }
//     operations.divide = function() {
//         result = number1 / number2;
//     }

//     operations[`${operator}`]();
//     return result;
// }
