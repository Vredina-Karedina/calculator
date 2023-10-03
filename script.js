"Use strict"

let number1;
let number2;
let operator;
let result;

const displayValue = document.querySelector(".value");
const displayMemory = document.querySelector(".memory");
let value = null;
let memory = null;
displayValue.textContent = value;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClickButton);
});

function handleClickButton() {
    if (Number(this.textContent) || this.textContent === "0") {
        updateNumber(this.textContent);
    } else if ( this.textContent === "+" || 
                this.textContent === "-" || 
                this.textContent === "x" || 
                this.textContent === "/") {
        rememberNumber1(this.textContent);
    } else if (this.textContent = "=") {
        number2 = value;
        operate(number1, number2);
    }
}

function updateNumber(digit) {
    if (value === null) value = 0;
    value = Number(value + digit);
    displayValue.textContent = value;
}

function rememberNumber1(oper) {
    number1 = value;
    memory = number1 + " " + oper;
    displayMemory.textContent = memory;
    value = null;
    displayValue.textContent = value;

    if (oper === "+") operator = "add";
    if (oper === "-") operator = "subtract";
    if (oper === "x") operator = "multiply";
    if (oper === "/") operator = "divide";
}

function operate(number1, number2) {
    const operations = {};

    operations["add"] = function() {
        result = number1 + number2;
    }
    operations["subtract"] = function() {
        result = number1 - number2;
    }
    operations["multiply"] = function() {
        result = number1 * number2;
    }
    operations["divide"] = function() {
        result = number1 / number2;
    }

    operations[operator]();
    value = result;

    displayValue.textContent = value;
    displayMemory.textContent = null;
    return result;
}
