/* function add(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 + OTHERnum2);
    display.textContent = Math.round((tempnum + Number.EPSILON) * 100) / 100;
    num1 = Math.round((tempnum + Number.EPSILON) * 100) / 100;
};

function subtract(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 - OTHERnum2);
    display.textContent = Math.round((tempnum + Number.EPSILON) * 100) / 100;
    num1 = Math.round((tempnum + Number.EPSILON) * 100) / 100;
};

function multiply(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 * OTHERnum2);
    display.textContent = Math.round((tempnum + Number.EPSILON) * 100) / 100;
    num1 = Math.round((tempnum + Number.EPSILON) * 100) / 100;
};

function divide(OTHERnum1, OTHERnum2) { 
    if (OTHERnum2 == 0) {
        display.textContent = "Can't divide by 0...";
    } else {
        tempnum = (OTHERnum1 / OTHERnum2);
        display.textContent = Math.round((tempnum + Number.EPSILON) * 100) / 100;
        num1 = Math.round((tempnum + Number.EPSILON) * 100) / 100;
    }
}; */

function clear() {
    display.textContent = "";
    num1 = null;
    OTHERnum1 = null;
    OTHERnum2 = null;
    operatorSelected = "empty";
    addElement.classList.remove("selected");
    subtractElement.classList.remove("selected");
    multiplyElement.classList.remove("selected");
    divideElement.classList.remove("selected");
}

function add(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 + OTHERnum2);
    display.textContent = parseFloat(tempnum.toPrecision(12))
    num1 = Number(tempnum);
    
};

function subtract(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 - OTHERnum2);
    display.textContent = parseFloat(tempnum.toPrecision(12))
    num1 = Number(tempnum);
};

function multiply(OTHERnum1, OTHERnum2) { 
    tempnum = (OTHERnum1 * OTHERnum2);
    display.textContent = parseFloat(tempnum.toPrecision(12))
    num1 = Number(tempnum);
};

function divide(OTHERnum1, OTHERnum2) { 
    if (OTHERnum2 == 0) {
        display.textContent = "Can't divide by 0...";
    } else {
        tempnum = (OTHERnum1 / OTHERnum2);
        display.textContent = parseFloat(tempnum.toPrecision(12))
        num1 = Number(tempnum);
    }
}; 

function operate() {
    if (OTHERnum1 === null) {

    } else {

    OTHERnum2 = Number(display.textContent);

    if (operatorSelected == "add") {
        add(OTHERnum1, OTHERnum2)
    } else if (operatorSelected == "subtract") {
        subtract(OTHERnum1, OTHERnum2)
    } else if (operatorSelected == "multiply") {
        multiply(OTHERnum1, OTHERnum2)
    } else if (operatorSelected == "divide") {
        divide(OTHERnum1, OTHERnum2)
    } else {
        console.log("yeah bruh it's empty, nothing has been pressed.");
    }

    OTHERnum1 = null;
    operatorSelected = "";
    
}
}

num1 = null;
OTHERnum1 = null;
OTHERnum2 = null;

operatorSelected = "empty";

// think about returning values, and when / where they should be returned. 


const display = document.querySelector(".userInput");
display.textContent = "";

const numberButton = document.querySelectorAll(".numberButton");
numberButton.forEach(button => {
    button.addEventListener("click", (e) => {

        if (display.textContent == "Can't divide by 0...") {
            clear();
        }

        if (num1 !== null) {
            OTHERnum1 = num1;
            num1 = null;
            display.textContent = "";

            if (display.textContent.length < 16) {
                if (button.id === "." && display.textContent.includes(".") === true) {
                } else {
                    display.textContent += (button.id);
                }
            } else {
            }

        } else {
            if (display.textContent.length < 16) {
                if (button.id === "." && display.textContent.includes(".") === true) {
                } else {
                    display.textContent += (button.id);
                }
            } else {
            }
            }
    
    })

})


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);


const operatorButton = document.querySelectorAll(".operatorButton");
operatorButton.forEach(operator => {
    operator.addEventListener("click", (e) => {
        
        if (display.textContent === "") {

        } else {
            num1 = Number(display.textContent);

            if (OTHERnum1 !== null) {
                operate();
            } else {
            }
            
            operatorSelected = (operator.id);
    
            
    
            /* for (i = 0; i < operator.length; i++) {
                operator[i].classList.remove("selected");
            } */
    
            operator.classList.add("selected");
            
    
            // operator.classList.remove = "selected"
            console.log(operatorSelected);
        
           /* if (num1 === null) {
                num1 = Number(display.textContent);
                display.textContent = "";
            } else {
                num2 = Number(display.textContent);
            } */
    
        }
        
    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", operate);

const backspace = document.querySelector(".backSpace");
backspace.addEventListener("click", (e) => {

    if (display.textContent == "Can't divide by 0...") {
        clear();
    }

    if (num1 !== null) {
    } else {
        tempstring = display.textContent;
        display.textContent = tempstring.slice(0, -1);
    }
    
})
/*
think about  display number and how to refresh it if a calculation has
already been made.
think about num1 and num2, and how to make it possible to keep adding to a 
number.
*/


const addElement = document.querySelector("#add");
addElement.addEventListener("click", (e) => {
    subtractElement.classList.remove("selected");
    multiplyElement.classList.remove("selected");
    divideElement.classList.remove("selected");
})

const subtractElement = document.querySelector("#subtract");
subtractElement.addEventListener("click", (e) => {
    addElement.classList.remove("selected");
    multiplyElement.classList.remove("selected");
    divideElement.classList.remove("selected");
})

const multiplyElement = document.querySelector("#multiply");
multiplyElement.addEventListener("click", (e) => {
    addElement.classList.remove("selected");
    subtractElement.classList.remove("selected");
    divideElement.classList.remove("selected");
})

const divideElement = document.querySelector("#divide");
divideElement.addEventListener("click", (e) => {
    addElement.classList.remove("selected");
    subtractElement.classList.remove("selected");
    multiplyElement.classList.remove("selected");

}) 