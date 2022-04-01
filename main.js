//define variables according to the data attribute in the html file
const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.querySelector('[data-clear')
const equalButton = document.querySelector('[data-equal]')
const plusButton = document.querySelector('[data-plus')
const minusButton = document.querySelector('[data-minus]')
const multiplyButton = document.querySelector('[data-multiply]')
const divideButton = document.querySelector('[data-divide]')
const display = document.querySelector('.body-display')
const buttons = document.querySelectorAll('button')
//let displayValue = 0
// Add inner text to the display screen
//display.innerHTML = displayValue

// Now lets make these buttons actually put something on the screen. Using an Object
buttons.forEach(e => e.addEventListener('click', function() {
    if(e.innerHTML === 'C'){
        calc.clear()
    }
    
    display.innerHTML += this.value
} ))
// clearButton.addEventListener('click', function(){
//     display.innerHTML = ''
// })

function Calculator(){
this.clear = function(){
    display.innerHTML = ''
}

}

 let calc = new Calculator()
 