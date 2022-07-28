const calculatorButtons = document.querySelectorAll("button");
const outputDisplay = document.querySelector("#display");

let operationArr = [];

const handleOperation = (operationArr) => {
    let number1, number2, operand, value = 0;
    number1 = operationArr.shift();
    for(let i = 0; i < operationArr.length; i++){
        operand = operationArr.shift();
        number2 = operationArr.shift();
        console.log(number1 + " " + operand + " " + number2);
        console.log(typeof number1);
        if(!isNaN(number1) && !isNaN(number2) && operand == "+"){
            console.log(number1 + number2);
            return String(Number(number1) + Number(number2));
        } else if(!isNaN(number1) && !isNaN(number2) === "number" && operand == "-"){
            return String(Number(number1) - Number(number2));
        } else if(!isNaN(number1) && !isNaN(number2) === "number" && operand == "*"){
            return String(Number(number1) * Number(number2));
        } else if(!isNaN(number1) && !isNaN(number2) === "number" && operand == "/"){
            return String(Number(number1) / Number(number2));
        } else if(!isNaN(number1) && !isNaN(number2) === "number" && operand == "%"){
            return String(Number(number1) % Number(number2));
        }
    }
}

const handleButtonClick = (event) => {
    const element = event.target.innerHTML;
    let output = "";
    if(element == "AC"){
        operationArr = [];
        output = "";
        outputDisplay.innerHTML = "0"
    } else if(element == "="){
        const oldString = operationArr.join("");
        output = handleOperation(operationArr);
        outputDisplay.innerHTML = oldString + " = " + output;
        
    } else if(element == "+/-"){
        // make it so that the last number in the string is negative
        const negativeNumber = operationArr.pop()*-1;
        operationArr.push(negativeNumber)
        output = operationArr.join("");
        outputDisplay.innerHTML = output;
    }
    else{
        operationArr.push(element);
        output = operationArr.join("");
        outputDisplay.innerHTML = output;
    }
}

for(let i = 0; i < calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click", handleButtonClick)
}

