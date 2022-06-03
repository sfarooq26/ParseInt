alert('Under Development!');

const defaultResult = 0;

let currentResult = defaultResult;

let logUserEntries = [];

function UserInputNumber() {
    return parseInt(userInput.value);
}
/* Can also use ++, --,
if want to increment/decriment by 1
Note: if ++currentResult >> it will get value after the change (of 1)
if currentResult++ >> it'll get value before the change (of 1)
*/
function calcLog(operator, resultBeforeCalc, inputNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${inputNumber}`;
    outputResult(currentResult, calcDescription);
}
function add() {
    const enteredNumber = UserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber ;    //simplified operator
    calcLog ('+',initialResult, enteredNumber);
    const logCalc = {
        operation: 'ADD',
        defaultValue: initialResult,
        userInputValue: enteredNumber,
        result: currentResult
    }
    logUserEntries.push(logCalc);
    console.log(logUserEntries);
}
function subtract() {
    const enteredNumber = UserInputNumber();
    const initialResult = currentResult;
    currentResult -=  enteredNumber ;
    calcLog ('-',initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = UserInputNumber();
    const initialResult = currentResult;
    currentResult *=  enteredNumber ;
    calcLog ('*',initialResult, enteredNumber);
}

function Division() {
    const enteredNumber = UserInputNumber();
    currentResult /=  enteredNumber ;
    calcLog ('/',currentResult, enteredNumber);
}
addBtn.addEventListener('click', add );

subtractBtn.addEventListener('click', subtract );

multiplyBtn.addEventListener('click', multiply );

divideBtn.addEventListener('click', Division );


