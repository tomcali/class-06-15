/***
    ES6 CONST/LET EXAMPLES
***/

//Example of Scoping difference. Using "var", the variable is declared at the top of the scope, but initialized with a value at the line it was typed. It is given a value of "undefined" until it is initialized with it's actual value. By comparison, Let/Const are defined and initialized on the same line.

//using var
function logger(){
    console.log(x); //returns "undefined", but code still runs.
    var x = "hi";
}
logger();

//using let
function logger2(){
    console.log(y); //ReferenceError: y is not defined . Code will stop execution.
    let y = "hello"
}
logger2();

//Example of const for constant value

//this value is constant, and will refuse attempts at re-assignment.
const myPets = ["dog","cat","rabbit","some endangered species of sea turtle"];

myPets = "ferret"; //This will not work

myPets = ["wolf","giraffe","parrot"]; //This will not work either


//HOWEVER, we can still manipulate Objects and Arrays! See below example.
console.log("before : ");
console.log(myPets);
myPets.pop();//FREE THE TURTLES!!!
console.log("after : ");
console.log(myPets);





