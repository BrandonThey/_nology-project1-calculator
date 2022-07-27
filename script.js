const numberButtons = document.querySelectorAll(".numberButton");
const outputDisplay = document.querySelector("#display");

const handleNumberClick = (event) => {
    const element = event.target;
    outputDisplay.innerHTML = element.innerHTML;
}

for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", handleNumberClick)
}

