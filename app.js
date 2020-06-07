/*
    cant type more than 9 numbers
    IF CHAR > 9 = return

    AC = value = 0
    DEL = remove last char of displayContent
    NUMBER BUTTONS = concatenation the value
    SIGN BUTTONS = 
*/

let value = 0;
const buttons = document.querySelectorAll('input');
const display = document.getElementById('displayContent');

// Show value of inputs in display

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.value >= 0 || button.value === '.') {
            valueNumber = button.value;
            display.innerHTML += valueNumber;
            console.log(valueNumber)
        }
    });
});