//Currently, we have shorter and more semantic alternatives to using a for loop to iterate over everything in the form of array helpers/methods! As long as your data is stored in an array, these methods are good to go! Many array helper methods were introduced or proposed for ES5.1, but only formally implemented in ES6. They all function in a similar fashion, and share a similar syntax. These methods are : forEach, map, filter, find, every, some, and reduce.

let colors = ['blue','red','green'];
colors.forEach(function(color){
    console.log(color);
});

/* in this case, color is an iterator that can be named anything, although the current convention is to name it the singular form of whatever the array name is. forEach will loop through each element in the array, you can pass a function as an argument which contains the code you wish to run for each iteration. */

//When calling a named function inside of a forEach, the invoking parenthesis are not needed. See example a few lines down.
let myFunc = () => {
    //do stuff already...
};

let theStages = ["denial","anger","bargaining","depression","acceptance"];
theStages.forEach(myFunc);  //This is good
theStages.forEach(myFunc());  //This is NOT good, if you need to pass params, use an anonymous function.

let abc = [{a:"a"},{b:"b"},{c:"Were you expecting a 'c'?"}];
abc.map(function(character){
    console.log(character); 
    return character}
); //map requires A RETURN statement, and is commonly used to collect properties from objects.

let unfiltered = [1,2,3,4,5,5,5];

let example = unfiltered.filter(function(num){
    return num === 5;  /*If type matches, evals to true. Therefore adds self to returned array. Using filter, the returned array contains all truthy values.*/
});
console.log(example); //Returns [5,5,5];

// the find method requires a return statement, and exits on first truthy match
let lostValues = ["health","hope","happiness"];

let healthy = lostValues.find(function(value){
    return value === "health";
});
console.log(healthy); //returns ["health"];

let arrayOfA = ["a","a","a","a"];
let arrayOfFail = ["United Airlines", "Elections in Russia", "Turkey Bacon", "Social Media"];

let theAOfArray = arrayOfA.every(function(a){
    return a==="a";
});

console.log(theAOfArray); //returns true! As all elements in the arrayOfA are equal to "a";

let someFalseVal = arrayOfFail.every(function(fail){
    return fail === "Elections in Russia";
});

console.log(someFalseVal);//Even with a matched element, this will return false. ALL elements need to match for this to return true.

//On the other hand, .some() will test if ANY elements match the condition.

let someTrueVal = arrayOfFail.some(function(fail){
    return fail === "Elections in Russia";
});

console.log(someTrueVal);//This returns true.
//Imagine that .every() uses the && operator for each iteration, and the .some() operator is the || symbol. .some() will return a truthy value if there is so much as one match to the condition. The .every() will return FALSE is there is so much as one case where the condition is NOT met.

//Reduce is one that's a little different than the rest. The first argument to the reduce function is the initial starting value. The second is the current element in the array. Example : 

let numbers = [1,2,3,4];
let sum = 0;
numbers.reduce(function(sum,number){
    return sum + number
}, 0 );//returns 10

//.every() and .some(), like .reduce(), are most useful when you need to return a single value from a large array. 

//If your values are showing up as undefined, try adding a return statement to your function which calls reduce. That will return the array that was passed to it by the return statement inside of your reduce function. Allowing the value to exist outside of the scope of our function.