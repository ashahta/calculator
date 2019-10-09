/* The purpose of this calculator is to perform basic math functions against entered values according to their respective operators: 

' + ' : add
' - ' : subtract
' * ' / ' x ' : multiply
' / ' : divide
' = ' : equals/return 

These values (firstValue, secondValue) combined with different operators should return an array of the calculated result.
  */


//  create a calculate function that converts the values and operator from strings to integers
//  use parseInt and parseFloat to calculate and return integer (parseInt) or decimal value (parseFloat) 
const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2) 
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2) 
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}
// var calculator = 'calculator'
// var keys = '.calculator__keys'
// var display = '.calculator__display'
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')



keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
        
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
            console.log('number key!')
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
            console.log('decimal key!')
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            
            console.log('operator key!')
        }
        if (action === 'clear') {
            console.log('clear key!')
        }
        // create an action that recognises the firstValue, operator, and secondValue 
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
        
            display.textContent = calculate(firstValue, operator, secondValue)
            
            console.log('equal key!')
        }
        
    }
})





//create addEventListener to listen for clicked buttons

//create functions for each button and event
//if a button is clicked, and that button doesn't have a data-action att, identify as a number
//all other buttons with data-action att, add, subtract, multiply and divide are operators (except decimal)
//if ' + ' operator is clicked, add
//if ' - ' operator is clicked, subtract
//if ' x ' operator is clicked, multiply
//if ' / ' operator is clicked, divide
//for buttons that have decimal, equal, and AC, perform data-action according to each
//if ' . ' operator is clicked, create decimal point & value
//if ' = '  is clicked, calculate total
//if ' AC ' is clicked, clear calculator screen -->

//calculator display should show 0, otherwise return pressed number
//when decimal is displayed, add ' . ' to the displayed number 
//when operator button is pressed, highlight that button
//add an EventListener that recognises the number, or operator pressed
//add a data-previous-key-type attribute that recognises the operator/number pressed
//create a forEach loop that removes the highlight when another number button is pressed  -->

// create an action that recognises the firstValue, operator, and secondValue 
//  create a calculate function that converts the values and operator from strings to integers
//  use parseInt and parseFloat to calculate and return integer (parseInt) or decimal value (parseFloat)