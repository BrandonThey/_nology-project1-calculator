const calculatorButtons = document.querySelectorAll("button");
const outputDisplay = document.querySelector("#display");

let operationString = "";

const handleOperation = (operation) => {
    //need to add capabilty to handle multiple operations in one string
    // let moreOperations = true;

    // while(moreOperations){
    //     if(operation.includes("+")){
    //         const numbersArr = operation.split("+");
    //         const sum = Number(numbersArr[0]) + Number(numbersArr[1]);
    //         return String(sum);
    //     } else if(operation.includes("-")) {
    //         const numbersArr = operation.split("-");
    //         const sum = Number(numbersArr[0]) - Number(numbersArr[1]);
    //         return String(sum);
    //     } else if(operation.includes("*")) {
    //         const numbersArr = operation.split("*");
    //         const sum = Number(numbersArr[0]) * Number(numbersArr[1]);
    //         return String(sum);
    //     } else if(operation.includes("/")) {
    //         const numbersArr = operation.split("/");
    //         const sum = Number(numbersArr[0]) / Number(numbersArr[1]);
    //         return String(sum);
    //     } else if(operation.includes("%")) {
    //         const numbersArr = operation.split("%");
    //         const sum = Number(numbersArr[0]) % Number(numbersArr[1]);
    //         return String(sum);
    //     } else {
    //         moreOperations = false;
    //     }
    // }
    if(operation.includes("+")){
        const numbersArr = operation.split("+");
        const sum = Number(numbersArr[0]) + Number(numbersArr[1]);
        return String(sum);
    } else if(operation.includes("-")) {
        const numbersArr = operation.split("-");
        const sum = Number(numbersArr[0]) - Number(numbersArr[1]);
        return String(sum);
    } else if(operation.includes("*")) {
        const numbersArr = operation.split("*");
        const sum = Number(numbersArr[0]) * Number(numbersArr[1]);
        return String(sum);
    } else if(operation.includes("/")) {
        const numbersArr = operation.split("/");
        const sum = Number(numbersArr[0]) / Number(numbersArr[1]);
        return String(sum);
    } else if(operation.includes("%")) {
        const numbersArr = operation.split("%");
        const sum = Number(numbersArr[0]) % Number(numbersArr[1]);
        return String(sum);
    }
}
const handleButtonClick = (event) => {
    const element = event.target.innerHTML;
    if(element == "AC"){
        operationString = "";
        outputDisplay.innerHTML = "0"
    } else if(element == "="){
        operationString = handleOperation(operationString);
        outputDisplay.innerHTML = operationString;
        
    } else if(element == "+/-"){
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

