/***
    ES6 ARROW FUNCTION EXAMPLES
***/

// Below are 4 identical division functions 

//Function Declaration
function divide1(a, b) {
  return a / b; 
}
//Function Expression
const divide2 = function(a, b) {
  return a / b;
}
//Arrow Function Expression
const divide3 = (a, b) => {
  return a / b;
}
//Arrow Function Expression - cocise
const divide4 = (a, b) => a / b;
//With arrow functions without curly brackets, the return statement is implied. Which is why the concise example omits the 'return' keyword. To clarify, see below example.

var funcAMultiply = x => x * x;                  
// concise syntax, implied "return"

var funcBMultiply = (x, y) => { return x * y; }; 
// with block body, explicit "return" needed

//Taking this concept even further, for a function taking a SINGLE PARAMETER the parenthesis can likewise be omitted. For multiple parameters, you still need parenthesis. And for functions taking no parameters or arguments, you will also require the parenthesis.

const logToConsole = x => console.log(x);

//This would work just fine.
logToConsole("WHERE ARE MY BRACKETS?!");

//ARROW FUNCTIONS ARE ALWAYS ANONYMOUS!!

//Standard Javascript function expression. The named variable is attached so that you can reference the function, because the function itself is anonymous.
var myFunc = function(){
    //do stuff
};

//With ES6, this is also possible. Because you use the same assignment operator of '='
const myOtherFunc = ()=>{
    //do more stuff
};

//But when you're using a JavaScript function declaration for a named function like you would in ES5
function myNewFunc(){
    //do yet more stuff
};

//There is no ES6 arrow function equivalent.
// ¯\_(ツ)_/¯


