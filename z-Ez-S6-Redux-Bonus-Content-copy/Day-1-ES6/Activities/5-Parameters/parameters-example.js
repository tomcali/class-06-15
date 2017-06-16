/***
    ES6 PARAMETERS EXAMPLES
***/


//In ES6, the Rest parameter and Spread operators, due to their functional similarity, both share the 3 dot syntax. The Rest parameter allows you to specify an unlimited number of arguments as an array. Rest parameters should be the last parameter defined if used. 

//For clarification, this 'rest' is referring to ‘the rest of the parameters’ and not 'REST', the acronym that stands for Representational State Transfer when we speak of API's. There is no relation.

//previously in ES5, you'd have to do this
function logArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

//But now:
function myJazzFunc(name, ...params){
    console.log(name,params);
};
//...params will handle ALL continuing parameters and add them to an array. The amount of acceptable parameters is indefinite. 
myJazzFunc("Conan", 1,2,3,4,5,6,7,8,9,"a","b","c","d","OMG THIS NEVER ENDS");

//While on the topic of parameters, ES6 also allows us a shorter and more concise syntax for declaring default parameters. Simply add the assignment operator within the arguments.

//previously, on ES5...
function newCollegeStudent(name, age, skills){
    var name = name || "John Doe";
    var age = age || 18;
    var skills = skills || [];
    console.log(name,age,skills);
};
var futureProgrammer = newCollegeStudent("n00b",17,["blankly staring at a computer screen"]);

//ES6 Shorthand

let newCollegeStudent1 = (name="John Doe",age=18,skills=[])=>{
    let = {name,age,skills};
    console.log(name,age,skills);
};
let futureProgrammer2 = newCollegeStudent1("pro",17,["blankly staring at a computer screen"]);

//With default parameters, because order matters, you can pass the argument of undefined to accept a default parameter, but specify your own arguments before and/or after.

let newCar = (year=2017, make="toyota", maxSpeed = 140, mpg=25)=>{
    console.log(`Your new car is a ${year} ${make}, with ${mpg} mpg and a top speed of ${maxSpeed} mph.`);
};

newCar(2015,undefined,120,15);
//Undefined second parameter will allow this function to assume the value of 'toyota' for make, while keeping the other parameters in order.

//The spread value is similar to the rest parameter and shares the same syntax. It is often used to concatenate multiple values of an array into another array.

const someFlavors =['cocoa', 'vanilla'];
const allFlavors = ['strawberry',...someFlavors];
console.log(allFlavors);  // returns ['strawberry', 'cocoa', 'vanilla']

//The spread operator also allows you to split an array into multiple arguments, you can also use the spread operator in destructuring. 

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
let [a, b, c, ...d] = widgets;
console.log(a); //returns ‘widget1’. a is now a variable.
console.log(d); //returns everything after widget 3 as an array, regardless of length of the original array