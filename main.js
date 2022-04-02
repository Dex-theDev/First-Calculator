function Calculator(){
    this.clear = function() {
        display.innerHTML ='0'
        return this
    }
    //define variables according to the data attribute in the html file
this.numberButtons = document.querySelectorAll('[data-number]')
this.clearButton = document.querySelector('[data-clear')
this.equalButton = document.querySelector('[data-equal]')

this.display = document.querySelector('.body-display')
this.buttons = document.querySelectorAll('button')
this.operator = document.querySelectorAll('[data-operator')
    
numberButtons.forEach(e => e.addEventListener('click', function() {
        //if(e === clearButton){ //added an if statement if the clear button was pressed.
           //this.clear()
         //}
        
        display.innerHTML += this.value //default action 
    } ))
    
operator.forEach(e => e.addEventListener('click', function(){
        display.innerHTML += this.value
    }))
clearButton.addEventListener('click',this.clear)

    
}


//define variables according to the data attribute in the html file
const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.querySelector('[data-clear')
const equalButton = document.querySelector('[data-equal]')

const display = document.querySelector('.body-display')
const buttons = document.querySelectorAll('button')
const operator = document.querySelectorAll('[data-operator')



let calc = new Calculator()
//let displayValue = 0
// Add inner text to the display screen
//display.innerHTML = displayValue

// Now lets make these buttons actually put something on the screen. Using an Object


