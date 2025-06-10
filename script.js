function plus(a, b) {
    console.log(a + " + " + b + " = ");
    return a + b;
}

function substract(a, b) {
    console.log(a + " - " + b + " = ");
    return a - b;
}

function multiply(a, b) {
    console.log(a + " * " + b + " = ");
    return a * b;
}

function devide(a, b) {
    console.log(a + " / " + b + " = ");
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return plus(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return devide(a, b);
        default:
            return "Error: Unknown operator";
    }
}

const buttons = document.querySelectorAll("button");

let numbA = [];
let numbB = [];
let operator = null;
let clickedButton = null;
let calculationDone = false;

const calculatorDisplay = document.getElementById("calculatorDisplay");
const displayInput = document.createElement("h2");
const firstInput = document.createElement("h3");
const operatorInput = document.createElement("h3");
const secondInput = document.createElement("h3");
const equals = document.createElement("h3");
const inputResult = document.createElement("h3");

function performCalculation() {
    if (numbA.length === 0 || numbB.length === 0 || operator === null) {
        console.log("Missing numbers or operator. Cannot perform calculation.");
        return null;
    }

    const a = parseFloat(numbA.join(""));
    const b = parseFloat(numbB.join(""));

    let result = operate(operator, a, b);

    displayInput.textContent = result;
    console.log("Calculation Result:", result);

    if (typeof result === 'number' && !isNaN(result)) {
        numbA = [result];
        numbB = [];
        operator = null;
        return result;
    } else if (result === "Error: Division by zero") {
        numbA = [];
        numbB = [];
        operator = null;
        firstInput.textContent = '';
        operatorInput.textContent = '';
        secondInput.textContent = '';
        equals.textContent = '';
        inputResult.textContent = '';
        displayInput.textContent = result;
        return result;
    }
    return null;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.id;

        if (id.startsWith("number")) {
            clickedButton = parseInt(id.replace("number", ""), 10);
            console.log("Number clicked:", clickedButton);

            if (calculationDone) {
                numbA = [clickedButton];
                numbB = [];
                operator = null;
                calculationDone = false;

                firstInput.textContent = 'First Number: ' + numbA.join('');
                operatorInput.textContent = '';
                secondInput.textContent = '';
                equals.textContent = '';
                inputResult.textContent = '';
                displayInput.textContent = numbA.join('');
            } else if (operator === null) {
                numbA.push(clickedButton);
                firstInput.textContent = 'First Number: ' + numbA.join('');
                displayInput.textContent = numbA.join('');
            } else {
                numbB.push(clickedButton);
                secondInput.textContent = 'Second Number: ' + numbB.join('');
                displayInput.textContent = numbB.join('');
            }
            console.log("Stored in a:", numbA, "Stored in b:", numbB);
        } else if (id === "operatorC") {
            numbA = [];
            numbB = [];
            operator = null;
            clickedButton = null;
            calculationDone = false;
            firstInput.textContent = '';
            operatorInput.textContent = '';
            secondInput.textContent = '';
            inputResult.textContent = '';
            equals.textContent = '';
            displayInput.textContent = '';
            console.log("Cleared all values.");
        } else if (id.startsWith("operator") && id !== "operator=") {
            if (numbA.length === 0) {
                console.log("Select a number first before choosing an operator.");
                return;
            }

            if (numbA.length > 0 && operator !== null && numbB.length > 0) {
                const intermediateResult = performCalculation();

                if (intermediateResult !== null && typeof intermediateResult === 'number' && !isNaN(intermediateResult)) {
                    firstInput.textContent = 'First Number: ' + numbA[0];
                    secondInput.textContent = '';
                    equals.textContent = '';
                    inputResult.textContent = '';
                } else if (typeof intermediateResult === 'string' && intermediateResult.startsWith("Error")) {
                    return;
                }
            } else if (calculationDone) {
                firstInput.textContent = 'First Number: ' + numbA[0];
                secondInput.textContent = '';
                equals.textContent = '';
                inputResult.textContent = '';
                calculationDone = false;
            }

            operator = id.replace("operator", "");
            operatorInput.textContent = 'Operator: ' + operator;
            displayInput.textContent = operator;
            console.log("Operator selected:", operator);
        } else if (id === "operator=") {
            if (numbA.length === 0 || numbB.length === 0 || operator === null) {
                console.log("Cannot calculate: incomplete expression.");
                return;
            }

            performCalculation();

            equals.textContent = "=";
            inputResult.textContent = '';
        } else {
            console.log("Other button clicked:", id);
        }
    });

    calculatorDisplay.appendChild(firstInput);
    calculatorDisplay.appendChild(operatorInput);
    calculatorDisplay.appendChild(secondInput);
    calculatorDisplay.appendChild(equals);
    calculatorDisplay.appendChild(inputResult);
    calculatorDisplay.appendChild(displayInput);
});
