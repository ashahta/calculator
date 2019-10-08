HTML: 

<!-- //create div class for calculator
//create div space for calculation output 
//create nested div for row buttons
//create buttons according to row specs
//  first row [7, 8, 9, /], second row [4, 5, 6, x/*] etc -->

CSS:

<!-- //set-up board as fixed/flex (responsive)
//create simple calculator shell
//create buttons for calculator -->

JS:

<!-- The purpose of this calculator is to perform basic math functions against entered values according to their respective operators: 

' + ' : add
' - ' : subtract
' * ' / ' x ' : multiply
' / ' : divide
' = ' : equals/return 

These values (firstValue, secondValue) combined with different operators should return an array of the calculated result.
 -->


<!-- //create empty array to store values
//initialize temp total of 0
//create addEventListener to listen for clicked buttons
//when integer is clicked, add to temp
//if a symbol other than ' = ' is clicked, use data-action attribute to identify which button was clicked
//clear last entry
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

<!-- //calculator display should show 0, otherwise return pressed number
//when decimal is displayed, add ' . ' to the displayed number 
//when operator button is pressed, highlight that button
//add an EventListener that recognises the number, or operator pressed
//add a data-previous-key-type attribute that recognises the operator/number pressed
//create a forEach loop that removes the highlight when another number button is pressed  -->

<!-- //create an action that recognises the firstValue, operator, and secondValue 
//create a calculate function that converts the values and operator from strings to integers
//use parseInt and parseFloat to calculate and return integer (parseInt) or decimal value (parseFloat)

 -->