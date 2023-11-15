"Use strict"

let number1 = null;
let number2 = null;
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
    if (result === "warning") {
        number1 = null;
        number2 = null;
        result = null;
        value = null;
        displayValue.textContent = value;
    }
    displayValue.style.fontSize = "50px";
    displayValue.style.removeProperty("white-space");

    if (this.textContent === ".") {
        if (displayValue.textContent.includes(".")) return;
        updateNumber(this.textContent);
    } else if (Number(this.textContent) || this.textContent == "0") {
        updateNumber(this.textContent);
    } else if ( this.textContent === "+" || 
                this.textContent === "-" || 
                this.textContent === "x" || 
                this.textContent === "/") {
                    if (value === null) return;
                    if (displayMemory.textContent) {
                        number2 = value;
                        operate(number1, number2);
                    };
                    rememberNumber1(this.textContent);
    } else if (this.textContent === "=") {
        number2 = value;
        operate(number1, number2);
    };
};

function updateNumber(digit) {
    if (value === null || value === "0") {
        if (digit === ".") {
            value = "0.";
        } else {
            value = digit;
        }
    } else {
        value += digit;
    }
    displayValue.textContent = value;
};

function rememberNumber1(oper) {
    if (result === "warning") return;
    number1 = value;
    memory = number1 + " " + oper;
    displayMemory.textContent = memory;
    value = null;
    displayValue.textContent = value;

    if (oper === "+") operator = "add";
    if (oper === "-") operator = "subtract";
    if (oper === "x") operator = "multiply";
    if (oper === "/") operator = "divide";
};

function operate(number1, number2) {
    if (number1 === null || number2 === null) return;
    operations[operator]();

    if (result === "warning") {
        displayValue.style.fontSize = "17px";
        displayValue.style.whiteSpace = "pre";
        value = "What would your math teacher said \r\n";
        value += "if saw you are dividing by 0!? \r\n";
        value += "Never do this again!";
    } else {
        const integerLength = result.toFixed().toString().split("").length;
        value = Math.round(result*Math.pow(10, 9-integerLength))/Math.pow(10, 9-integerLength);
    }

    displayValue.textContent = value;
    displayMemory.textContent = null;
};

const textField = document.querySelector(".row-1 .right-column");
const operations = {};
operations["add"] = function() {
    result = number1 + number2;
};
operations["subtract"] = function() {
    result = number1 - number2;
};
operations["multiply"] = function() {
    result = number1 * number2;
};
operations["divide"] = function() {
    if (number2 === 0) {
        result = "warning";
    } else {
        result = number1 / number2;
    }
};

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", cleanDisplay);

function cleanDisplay() {
    number1 = null;
    number2 = null;
    value = null;
    memory = null;
    displayValue.textContent = value;
    displayMemory.textContent = memory;
};