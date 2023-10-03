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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClickButton);
});

function handleClickButton() {
    if (Number(this.textContent) || this.textContent === "0") {
        updateNumber(this.textContent);
    }
}

function updateNumber(digit) {
    value = Number(value + digit);
    displayValue.textContent = value;
    console.log(value);
    console.log(typeof(value));
}

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
