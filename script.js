const calculatorButtons = document.querySelectorAll("button");
const outputDisplay = document.querySelector("#display");

let operationString = "";

const handleOperation = (operation) => {
    //need to add capabilty to handle multiple operations in one string
    // let moreOperations = true;

    // while(moreOperations){
    //     if(operation.includes("+")){
    //         const numbersArr = operation.split("+");
    //         const value = Number(numbersArr[0]) + Number(numbersArr[1]);
    //         return String(value);
    //     } else if(operation.includes("-")) {
    //         const numbersArr = operation.split("-");
    //         const value = Number(numbersArr[0]) - Number(numbersArr[1]);
    //         return String(value);
    //     } else if(operation.includes("*")) {
    //         const numbersArr = operation.split("*");
    //         const value = Number(numbersArr[0]) * Number(numbersArr[1]);
    //         return String(value);
    //     } else if(operation.includes("/")) {
    //         const numbersArr = operation.split("/");
    //         const value = Number(numbersArr[0]) / Number(numbersArr[1]);
    //         return String(value);
    //     } else if(operation.includes("%")) {
    //         const numbersArr = operation.split("%");
    //         const value = Number(numbersArr[0]) % Number(numbersArr[1]);
    //         return String(value);
    //     } else {
    //         moreOperations = false;
    //     }
    // }
    let numbersArr = [];
    let value = 0;
    if(operation.includes("+")){
        numbersArr = operation.split("+");
        value = Number(numbersArr[0]) + Number(numbersArr[1]);
        return String(value);
    } else if(operation.includes("-")) {
        numbersArr = operation.split("-");
        value = Number(numbersArr[0]) - Number(numbersArr[1]);
        return String(value);
    } else if(operation.includes("*")) {
        numbersArr = operation.split("*");
        value = Number(numbersArr[0]) * Number(numbersArr[1]);
        return String(value);
    } else if(operation.includes("/")) {
        numbersArr = operation.split("/");
        value = Number(numbersArr[0]) / Number(numbersArr[1]);
        return String(value);
    } else if(operation.includes("%")) {
        numbersArr = operation.split("%");
        value = Number(numbersArr[0]) % Number(numbersArr[1]);
        return String(value);
    }
}
const handleButtonClick = (event) => {
    const element = event.target.innerHTML;
    if(element == "AC"){
        operationString = "";
        outputDisplay.innerHTML = "0"
    } else if(element == "="){
        const oldString = operationString;
        operationString = handleOperation(operationString);
        outputDisplay.innerHTML = oldString + " = " + operationString;
        
    } else if(element == "+/-"){
        // make it so that the last number in the string is negative
        operationString = "-" + operationString;
        outputDisplay.innerHTML = operationString;
    }
    else{
        operationString += element;
        outputDisplay.innerHTML = operationString;
    }
}

for(let i = 0; i < calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click", handleButtonClick)
}

