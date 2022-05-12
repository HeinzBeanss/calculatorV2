function add(num1, num2) { 
    display.textContent = (num1 + num2);
};

function subtract(num1, num2) { 
    display.textContent = (num1 - num2);
};

function multiply(num1, num2) { 
    display.textContent = (num1 * num2);
};

function divide(num1, num2) { 
    display.textContent = (num1 / num2);
};

function operate() {

    num2 = Number(display.textContent);
    console.log(num1);
    console.log(num2);

    if (operatorSelected == "add") {
        add(num1, num2)
    } else if (operatorSelected == "subtract") {
        subtract(num1, num2)
    } else if (operatorSelected == "multiply") {
        multiply(num1, num2)
    } else if (operatorSelected == "divide") {
        divide(num1, num2)
    } else {
        console.log("yeah bruh it's empty, nothing has been pressed.");
    }
}

num1 = null;
num2 = null;

operatorSelected = "empty";

// think about returning values, and when / where they should be returned. 


const display = document.querySelector(".userInput");
display.textContent = "";

const numberButton = document.querySelectorAll(".numberButton");
numberButton.forEach(button => {
    button.addEventListener("click", (e) => {
    display.textContent += (button.id);
    })

})


const clear = document.querySelector(".clear");
clear.addEventListener("click", (e) => {
    display.textContent = "";
})

const operatorButton = document.querySelectorAll(".operatorButton");
operatorButton.forEach(operator => {
    operator.addEventListener("click", (e) => {
        operatorSelected = (operator.id);
        console.log(operatorSelected);

        if (num1 === null) {
            num1 = Number(display.textContent);
            display.textContent = "";
        } else {
            num2 = Number(display.textContent);
        }

    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", operate);

/*
think about  display number and how to refresh it if a calculation has
already been made.
think about num1 and num2, and how to make it possible to keep adding to a 
number.
*/
