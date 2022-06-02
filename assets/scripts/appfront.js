alert('Under Development!');

const defaultResult = 0;

let currentResult = defaultResult;
function UserInputNumber() {
    return parseInt(userInput.value);
}

function calcLog(operator, resultBeforeCalc, inputNumber) {
    const calcDescription = `${currentResult} S{operator} ${inputNumber}`;
    outputResult(currentResult, calcDescription);
}
function add() {
    const enteredNumber = UserInputNumber();
    currentResult = currentResult + enteredNumber ;
    calcLog ('+',currentResult, enteredNumber);
}
function subtract() {
    const EnteredNumber = UserInputNumber();
    let calcDescription = `${currentResult} - ${EnteredNumber}`
    currentResult = currentResult -  EnteredNumber ;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const EnteredNumber = UserInputNumber();
    let calcDescription = `${currentResult} * ${EnteredNumber}`
    currentResult = currentResult *  EnteredNumber ;
    outputResult(currentResult, calcDescription);
}

function Division() {
    const EnteredNumber = UserInputNumber();
    let calcDescription = `${currentResult} / ${EnteredNumber}`
    currentResult = currentResult /  EnteredNumber ;
    outputResult(currentResult, calcDescription);
}
addBtn.addEventListener('click', add );

subtractBtn.addEventListener('click', subtract );

multiplyBtn.addEventListener('click', multiply );

divideBtn.addEventListener('click', Division );


