/* The purpose of this calculator is to perform basic math functions against entered values according to their respective operators: 

' + ' : add
' - ' : subtract
' * ' / ' x ' : multiply
' / ' : divide
' = ' : equals/return 

These values (firstValue, secondValue) combined with different operators should return an array of the calculated result.
  */
document.addEventListener('DOMContentLoaded', temp)
//create empty array to store entries
//initialize temp total of 0
var entries = [];
var total = 0;

//create a temp space in display
//when integer is clicked, add to temp
var temp = ' ';
$("button").on('click', function () {
    var val = $(this).text();

    if (!isNaN(val) || val === '.') {
        temp += val;
        $("#answer").val(temp.substring(0, 10));

        //if a symbol other than ' = ' is clicked, use data-action attribute to identify which button was clicked
        //add current symbol then clear entry
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        $("#answer").val(' ')
        
        //if ' x ' operator is clicked, multiply
    } else if (val === '*') {
        entries.push(temp);
        entries.push('*');
        temp = '';

        //if ' / ' operator is clicked, divide
    } else if (val === '/') {
        entries.push(temp);
        entries.push('/');
        temp = '';

        //if ' - ' operator is clicked, subtract
    } else if (val === '-') {
        entries.push(temp);
        entries.push('-');
        temp = '';

        //if ' + ' operator is clicked, add
    } else if (val === '+') {
        entries.push(temp);
        entries.push('+');
        temp = '';

        //if ' = '  is clicked, calculate total
    } else if (val === '=') {
        entries.push(temp);

        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum - Number(entries[i + 1])
            var symbol = entries[i]

            if (symbol === '+') { nt += nextNum; }
            else if (symbol === '-') { nt -= nextNum; }
            else if (symbol === '*') { nt *= nextNum; }
            else if (symbol === '/') { nt /= nextNum; }
        
            i++;
        }
        //swap the operator symbols so that text input handles it correctly
        if (nt < 0) {
            nt = Math.abs(nt) + '+';

        } else if (nt < 0) {
            nt = Math.abs(nt) + '-';

        } else if (nt < 0) {
            nt = Math.abs(nt) + '*';

        } else if (nt < 0) {
            nt = Math.abs(nt) + '/';
        }

        $("#answer").val(nt);
        entries = []
        temp = '';

        //push number
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
});


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