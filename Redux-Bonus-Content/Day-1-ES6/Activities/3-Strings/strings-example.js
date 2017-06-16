/***
    ES6 STRINGS EXAMPLES
***/

//previously in ES5, string concatenation was a slow process. And your calculations HAD to take place outside of the string declaration. Wrapping single and double quotes was messy.

var text = "This string contains \"double quotes\" which are escaped.";
//Using new syntax
let text2 = `This string contains "double quotes" which don't need to be escaped anymore.`;

//another bonus, multi-line strings! Backticks/string literals will continue the string until it is terminated regardless of the line number.

//previously in ES5
var multiString = "This is a \n\
    multi line string that\n\
     needs breaks. :( ";

//now with ES6
let multiString2 = `This is a
    multi line string that
    no longer needs breaks! :)`;

//Variable interpolation was also a messy process. You'd have to break your string to insert a variable value.

var myName = "Michael";
var myNickName = "Mike";
var myAge = 24;
console.log("Hello! My name is " + myName + " and I'm " + myAge + " years old. But you can call me '" + myNickName+"' instead.");

var myNewAge = myAge+1;
console.log("I'll be " + myNewAge + " in September");

//Now with ES6, we have cleaner ways of dealing with that! (I'm adding '2' to the variable names to prevent 'already defined' errors.)

let myName2 = "Michael";
let myNickName2 = "Mike";
let myAge2 = 24;
console.log(`Hello! My name is ${myName2} and I'm ${myAge2} years old. But you can call me '${myNickName2}' instead.`);

//And remember, it's a JS expression. You can do calculations!
console.log(`I'll be ${myAge2 + 1} in September`);

//Because it's a JavaScript expression, I can also invoke functions directly into this template string!
let coolFunc = ()=>"HELLO WORLD!!!";
console.log(`I'm a programmer, my first program logged ${coolFunc()} to the console.`);

//What about searching the values of a string that already exists??

//Previously in ES5
var string = 'food';
var substring = 'foo';
//Similar to array indices, the string will return a -1 for a non-existant index.
console.log(string.indexOf(substring) > -1); 

//Using ES6 .includes, this is a little cleaner and more semantic.
const string2 = 'food';
const substring2 = 'foo';

console.log(string2.includes(substring2)); // true

//The .includes() works on arrays too.

const abc = ["a","b","c"];
console.log(abc.includes("c")); //Returns Boolean value of true.

// .startsWith() and .endsWith(), unlike .includes(), are STRING METHODS ONLY! They do not exist as array methods.

//Here's how you'd determine a first value in a string using ES5.
var nope = "nope";
console.log(nope.indexOf("n") === 0); //true
//And to determine a last value in a string using ES5.
console.log(nope.indexOf("e") === nope.length-1); 

//In ES6, this is much cleaner and easier by comparison.
var yaaas = "yaaas";
console.log(yaaas.startsWith("y")); //true
console.log(yaaas.endsWith("s")); //also true

//Repeating a string in ES5 required you to create a loop. And if you wanted control over how many times you wanted it to loop, you'd need to structure it into a function that took some kind of limiter as an argument.

var sake = "SAKE!";
function repeatString(string, count) {
    var combinedStrings = [];
    while(combinedStrings.length < count) {
        combinedStrings.push(string);
    }
    return combinedStrings.join('');
};
repeatString(sake, 5);

//By comparison, ES6 makes this a no-brainer.
sake.repeat(5);

//All the above 3 methods take an optional second parameter, for startsWith and includes, the second parameter is the index of where to start the search from. For endsWith(), the second parameter is the maximum length of the searchable string. Think of this as cut-off point of search.



