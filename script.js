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

const screenWidth = window.screen.width;
if (screenWidth <= 600) {
    displayValue.style.setProperty("font-size", "45px");
} else {
    displayValue.style.setProperty("font-size", "50px");
};
const displayFontSize = displayValue.style.getPropertyValue("font-size");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClickButton);
});

function handleClickButton () {
    this.classList.remove("hovering");
    handleSymbol(this);
}

function handleSymbol(key) {
    key.classList.add("triggered");
    if (result === "warning" ||
        key.classList.value.includes("clear-button")) {
            cleanDisplay();
            displayValue.style.fontSize = displayFontSize;
            displayValue.style.removeProperty("white-space");
    };

    if (key.classList.value.includes("backspace")) handleBackspace();

    if (key.textContent === ".") {
        if (displayValue.textContent.includes(".")) return;
        updateNumber(key.textContent);
    } else if (Number(key.textContent) || key.textContent == "0") {
        updateNumber(key.textContent);
    } else if ( key.textContent === "+" || 
                key.textContent === "x" || 
                key.textContent === "/") {
                    if (value === null) return;
                    if (displayMemory.textContent) {
                        number2 = value;
                        operate(number1, number2);
                    };
                    rememberNumber1(key.textContent);
    } else if (key.textContent === "-") {
        if (!value) {
            updateNumber(key.textContent);
        } else if (value === "-") {
            return;
        } else if (value.includes("-") && value.length > 1 && !displayMemory.textContent) {
            rememberNumber1(key.textContent);
        } else {
            number2 = value;
            operate(number1, number2);
            rememberNumber1(key.textContent);
        };
    } else if (key.textContent === "=") {
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
        };
    } else if (value === "-0" && Number(digit)) {
        value = `-${digit}`;
    } else if (value === "-" && digit === ".") {
        value = `-0${digit}`;
    } else if (value.length >= 10) {
        return;
    } else {
        value += digit;
    };
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
        value = "What would your math teacher say\r\n";
        value += "if they saw you dividing by 0?!\r\n";
        value += "";
    } else {
        const integerLength = result.toFixed().toString().split("").length;
        if (integerLength >= 10) {
            value = result.toExponential(3);
        } else {
            value = Math.round(result*Math.pow(10, 9-integerLength))/Math.pow(10, 9-integerLength);
        }
        value = value.toString();
    };

    displayValue.textContent = value;
    displayMemory.textContent = null;
};

const textField = document.querySelector(".row-1 .right-column");
const operations = {};
operations["add"] = function() {
    result = Number(number1) + Number(number2);
};
operations["subtract"] = function() {
    result = number1 - number2;
};
operations["multiply"] = function() {
    result = number1 * number2;
};
operations["divide"] = function() {
    if (Math.abs(number2) == 0) {
        result = "warning";
    } else {
        result = number1 / number2;
    };
};

function cleanDisplay() {
    number1 = null;
    number2 = null;
    result = null;
    value = null;
    memory = null;
    displayValue.textContent = value;
    displayMemory.textContent = memory;
};

function handleBackspace() {
    if (value === null) return;
    value = value.slice(0, value.length - 1);
    displayValue.textContent = value;
};

window.addEventListener("keydown", handleKeyboard);

function handleKeyboard (e) {
    const key = document.querySelector(`.keycode-${e.keyCode}`);
    if (!key) return;
    handleSymbol(key);
    e.preventDefault();
};

buttons.forEach(button => button.addEventListener("transitionend", removeTransition));

function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("triggered");
}

buttons.forEach(button => button.addEventListener("mouseover", () => button.classList.add("hovering")));
buttons.forEach(button => button.addEventListener("mouseout", () => button.classList.remove("hovering")));