/*
    cant type more than 9 numbers
    IF CHAR > 9 = return

    AC = value = 0
    DEL = remove last char of displayContent
    NUMBER BUTTONS = concatenation the value
    SIGN BUTTONS = ...

    QUAND ON CLIQUE SUR UN BUTTON AFFICHE LA VALEUR POUR ( CHIFFRE <= 9, POINT 1 fois, SIGNE 1 fois sauf egal, AC === '')
*/

let value = 0;
let valueNumber = 0;
const display = document.getElementById('displayContent');
const numbers = document.querySelectorAll('.number');
const allClearButton = document.querySelector('.allClear');
const deleteButton = document.querySelector('.delete');
const dotButton = document.querySelector('.dot');
const signButtons = document.querySelectorAll('sign');

// Show numbers of inputs in display button numbers

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (isNaN(number.value) || display.innerHTML.length === 9) {
            return;
        } else {
            valueNumber = number.value;
            display.innerHTML += valueNumber;
            // console.log(number.value)
            console.log(valueNumber)
        }
    });
});

// Reset to 0 button

allClearButton.addEventListener('click', () => {
    valueNumber = 0;
    display.innerHTML = valueNumber;
    console.log(valueNumber)
});

// Delete one number button

deleteButton.addEventListener('click', () => {
    console.log('ca marche lol')
});

// Dot button 

dotButton.addEventListener('click', () => {
    // valueNumber = dotButton.value;
    // display.innerHTML += valueNumber;
    // console.log(valueNumber.innerHTML.length)
});

// Sign buttons 

signButtons.forEach(signButton => {
    signButton.addEventListener('click', () => {
        console.log(signButton)
    });
});