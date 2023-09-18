"Use strict"

const number1 = parseInt(prompt("number1"));
const number2 = parseInt(prompt("number2"));
let result;

function sum() {
    result = number1 + number2;
    console.log(`sum = ${result}`);
}
sum();

function extract() {
    result = number1 - number2;
    console.log(`extraction = ${result}`);
}
extract();

function multiply() {
    result = number1 * number2;
    console.log(`multiplication = ${result}`);
}
multiply();

function divide() {
    result = number1 / number2;
    console.log(`division = ${result}`);
}
divide();
