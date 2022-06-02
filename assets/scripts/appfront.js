alert('Under Development!');

const defaultResult = 0;

let currentResult = defaultResult;
function UserInputNumber() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = UserInputNumber();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber ;
    outputResult(currentResult, calcDescription);
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


