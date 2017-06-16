//While we're typing in only one parameter here, it REPRESENTS MULTIPLE PARAMETERS. As such, the parenthesis are still requried for this arrow function. And with a single return value, the return is implied. Thus {} brackets are unnecessary.
const concatArgs = (...args) => console.log(args);
concatArgs("Hello ", "darkness ", "my ", "old ", "friend.");

//Default parameters are declared right in the parameter declaration. And when we create the aWildPizza object, we can use the object declaration shorthand because the keys are equal to the parameter names.
const deliciousPizza = (meat="Pepperroni",cheese="Mozarella",crust="Thin")=>{
    let aWildPizza = {meat,cheese,crust};
    return aWildPizza;
};

//Here is that block of code from earlier re-factored to accept ES6 standards. The template strings and object destructuring makes things much cleaner.
let lunchOrder = deliciousPizza("Ham and Bacon", "Cheddar");
let {meat,cheese,crust} = lunchOrder;
console.log(`I'm having a ${meat} pizza with ${cheese} Cheese and a ${crust} crust for lunch!`); 

//Technically, you could probably modify this to allow for use of the 'rest' operator. Using the spread operator, we're instantly concatenating two arrays into the final array. Eliminating the need to run a loop.
const iCanHazArrays = (arr2,dee2)=>{
    let finalArray = [...arr2,...dee2];
    return finalArray;
};

let muchConcat = iCanHazArrays(["R",2],["D",2]);
console.log(muchConcat);