document.querySelector('.body').addEventListener('click', event => {
    // apparently this is called destructuring. I'll do more research later
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')){
        return; //if the target that triggered the event is not a button, return nothing
    } else {
        //a function that adds the button value to the display. 
        calculator.parseInput(value)
        //console.log(target.value)
    }
})
const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
       
        switch(value){
            //we need to account for the special buttons that can be pushed
            case '=':
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'C':
                //clear screen and stored values
                this.clearScreen()
                break;
            case '.':
                if(this.displayText === 0){
                    //pass '0.' into add text method
                    this.addText('0.')
                } else {
                    //add value to text string
                    this.addText(value)
                }
                break;
                default: this.addText(value)//add value to text string
                
                
            
        }
    },
    addText(value){
        if(this.displayText === '0'){ //this will ensure that the existing 0 will disappear once we start entering values.
            this.displayText = ''
        } else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){ //slice -1 indicates the last character of an array
                return
            }
        }
        this.displayText += value
        this.outputText(this.displayText) //will output whatever the display text turns out to be
    },
    outputText(text){
        document.querySelector('.body-display').innerHTML = text
    },
    calcAnswer(equation){
        let result = Function('return ' + equation)()
        this.outputText(result)
    },
    clearScreen(){
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}