const calculatorButtons = document.querySelectorAll("button");
const outputDisplay = document.querySelector("#display");

let operationArr = [];

const handleOperation = (operationArr) => {
    let number1, number2, operand;
    
    //first for loop to handle any multiplication, division or modulo to keep 
    //the order of operations intact
    for(let i = 0; i < operationArr.length; i++){
        operand = operationArr[i];
        if(operand == "*"){
            //getting the numbers to the sides of the operand
            number1 = operationArr[i-1];
            number2 = operationArr[i+1];
            if(isNaN(number1) && isNaN(number2)){return "Invalid Operation";} //error message checking if the values are numbers
            //putting the result of the operation to the left side of the operand
            operationArr[i-1] = (Number(number1) * Number(number2));
            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        } else if(operand == "/"){
            //getting the numbers to the sides of the operand
            number1 = operationArr[i-1];
            number2 = operationArr[i+1];
            if(isNaN(number1) && isNaN(number2)){return "Invalid Operation";} //error message checking if the values are numbers
            //putting the result of the operation to the left side of the operand
            operationArr[i-1] = (Number(number1) / Number(number2));
            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        } else if(operand == "%"){
            //getting the numbers to the sides of the operand
            number1 = operationArr[i-1];
            number2 = operationArr[i+1];
            if(isNaN(number1) && isNaN(number2)){return "Invalid Operation";} //error message checking if the values are numbers
            //putting the result of the operation to the left side of the operand
            operationArr[i-1] = (Number(number1) % Number(number2));
            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        }   
    }

    //second for loop that handles addition and subtraction
    //getting the first number in the array
    number1 = operationArr.shift();
    for(let i = 0; i < operationArr.length; i++){
        operand = operationArr.shift();
        number2 = operationArr.shift();
        //testing if the first and second values are numbers and adding or subtracting
        if(!isNaN(number1) && !isNaN(number2) && operand == "+"){
            number1 = Number(number1) + Number(number2);
        } else if(!isNaN(number1) && !isNaN(number2) && operand == "-"){
            number1 = (Number(number1) - Number(number2));
        }
        else { //error message for inputs that arent numbers
            return "Invalid Operation";
        }
    }
    return String(number1);
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
        if(output != "Invalid Operation") {
            outputDisplay.innerHTML = oldString + " = " + output;
        } else{
            operationArr = [];
            outputDisplay.innerHTML = output;
        }
    } else if(element == "+/-"){
        const negativeNumber = operationArr.pop()*-1;
        operationArr.push(negativeNumber)
        output = operationArr.join("");
        outputDisplay.innerHTML = output;
    }
    else if(element == "Redo"){
        operationArr.pop();
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

