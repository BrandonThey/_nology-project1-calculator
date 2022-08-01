const calculatorButtons = document.querySelectorAll("button");
const outputDisplay = document.querySelector("#display");
const stepsDisplay = document.querySelector("#stepsDisplay")
//Two variables, operationArr to hold numbers and operands for the handleOperation function to use
//numberString to string together numbers and operands so we can have multidigit numbers along with operands
let operationArr = [];
let numberString = "";

const handleOperation = (operationArr) => {
    let number1, number2, operand;
    
    //first for loop to handle squares
    for(let i = 0; i < operationArr.length; i++){
        operand = operationArr[i];
        if(operand == "^"){
            //getting the numbers to the sides of the operand
            number1 = operationArr[i-1];
            number2 = operationArr[i+1];
            if(isNaN(number1) && isNaN(number2)){return "Invalid Operation";} //error message checking if the values are numbers
            
            //putting the result of the operation to the left side of the operand
            operationArr[i-1] = (Number(number1) ** Number(number2));
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ^ ${number2} = ${operationArr[i-1]}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);

            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        }
    }
    //Second for loop to handle any multiplication, division or modulo to keep 
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
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ${operand} ${number2} = ${operationArr[i-1]}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);
            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        } else if(operand == "/"){
            //getting the numbers to the sides of the operand
            number1 = operationArr[i-1];
            number2 = operationArr[i+1];
            if(number2 == 0){
                return "Error: Divide By 0"
            }
            if(isNaN(number1) && isNaN(number2)){return "Invalid Operation";} //error message checking if the values are numbers
            //putting the result of the operation to the left side of the operand
            operationArr[i-1] = (Number(number1) / Number(number2));
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ${operand} ${number2} = ${operationArr[i-1]}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);
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
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ${operand} ${number2} = ${operationArr[i-1]}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);
            //remove the operand and the right side from array
            operationArr.splice(i, 2);
            //moving i back after splicing to not miss any operands
            i--;
        }   

    }

    //third for loop that handles addition and subtraction
    //getting the first number in the array
    number1 = operationArr.shift();
    while(operationArr.length > 0){
        operand = operationArr.shift();
        number2 = operationArr.shift();
        //testing if the first and second values are numbers and adding or subtracting
        if(!isNaN(number1) && !isNaN(number2) && operand == "+"){
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ${operand} ${number2} = ${Number(number1) + Number(number2)}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);
            number1 = Number(number1) + Number(number2);
        } else if(!isNaN(number1) && !isNaN(number2) && operand == "-"){
            //create a new p tag to show the user the operation
            const newPElement = document.createElement("p");
            const newText = document.createTextNode(`${number1} ${operand} ${number2} = ${Number(number1) - Number(number2)}`);
            newPElement.appendChild(newText);
            stepsDisplay.appendChild(newPElement);
            number1 = (Number(number1) - Number(number2));
        }
        else { //error message for inputs that arent numbers
            return "Error: Invalid Operation";
        }
    }
    return String(number1);
}

const handleButtonClick = (event) => {
    //two variables, element to hold the event's innerhtml aka the button's value, and output to hold an output message
    const element = event.target.innerHTML;
    let output = "";

    if(element == "AC"){ //AC clears all operations and values
        operationArr = [];
        numberString = "";
        outputDisplay.innerHTML = "0"
    } else if(element == "="){ // = is a sign that the user is ready to have their operation processed
        output = handleOperation(operationArr); //the handle operation returns a string, the result of a succesful operation, or a error message
        if(output != "Invalid Operation") {
            outputDisplay.innerHTML = numberString + " = " + output;
        } else{ //if the error message was received then reset operations and display error
            operationArr = [];
            outputDisplay.innerHTML = output;
        }
        numberString = "";
    } else if(element == "+/-"){ //if the user changed a number to negative then pop that number from array and turn it negative then push it back
        const negativeNumber = operationArr.pop()*-1;
        if(negativeNumber == 0){
            operationArr = [];
            numberString = "";
            outputDisplay.innerHTML = "Error: Negative 0 or Operator";
        }else{
            numberString = operationArr.join(" ");
            outputDisplay.innerHTML = numberString;
        }
    } else if(element == "+" || element == "-" || element == "*" || element == "/" || element == "%" || element == "^"){ //if the user chose an operand then delimit the string with spaces 
        numberString += " " + element + " ";
        outputDisplay.innerHTML = numberString;
    } else{ //if the user chose a number button then add it to the numberString
        numberString += element;
        outputDisplay.innerHTML = numberString;
    }

    operationArr = numberString.split(" "); //constantly updating the operationArr with the numberString
}

for(let i = 0; i < calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click", handleButtonClick)
}

