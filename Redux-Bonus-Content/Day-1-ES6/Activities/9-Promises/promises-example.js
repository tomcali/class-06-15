//There's lots of documentation about promises out there but promises can still be confusing, so here's a quick reference with some examples. Here are some links to more thorough documentation on Promises:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://spring.io/understanding/javascript-promises

//Why use Promises? Simple! Promises allow us to turn our horizontal code (callback hell):

func1(function (value1) {
    func2(value1, function (value2) {
        func3(value2, function (value3) {
            func4(value3, function (value4) {
                func5(value4, function (value5) {
                    // Do something with value 5
                });
            });
        });
    });
});

//Into easier-to-read vertical code:

func1(value1)
    .then(func2)
    .then(func3)
    .then(func4)
    .then(func5, value5 => {
        // Do something with value 5
    });

//Promises are syntaxtic sugar for callbacks. If you've ever used a `.then()` or a `.done()` function, you've used a Promise! There are many libraries available that allow you to use Promises to handle your async code. And up until recently, you'd use one of those libraries like jQuery, Promise, RSVP, or Bluebird to take care of this for you. However, ES6 has now standardized the syntax and incorporated Promises natively.

//With promises in ES6, callback functions are handed off to another scope to be called once an event is complete. a promise is an eventual value.

    //In stage 1 (while waiting on request), it is in a state called pending.

    //A promise in stage 2 (when data is retrieved), It is now in state of ‘resolved’ or ‘fulfilled’. Promises kept successfully will result in a new promise being formed with a value returned by the previous callback.
    
    //A promise in stage 3 (error or rejection) Is in the stage (‘rejected’). No new promise is formed. However, you now have an event with which to handle an error. Promises really work the same as nested function calls, but make your code a lot easier to read.

//The example below assumes you’ve already called a promise constructor as an instance = 

let jsonPromise = getJSON('https://jsonplaceholder.typicode.com/users');
jsonPromise.then(success,failure);  /* success and failure are functions you would have defined before hand to handle this. The .then() method will take a maximum of two parameters */


//Some developers will set the promise callback as a single parameter to the .then() method and chain on a .catch() method that takes a single argument which can be set up to handle any errors. This is to avoid the default behaviod of promises where Promises fail silently as so not to impact the rest of your application. 


//Another example for good measure

var calculationPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1+1);
    }, 1000);
});

calculationPromise.then(function(value){
    console.log('the answer is ' + value);
});  


//Promises can be chained. Also, the function calls in your `.then()` can be either named functions or anonymous functions. ES6 handles them the same way. Typically in your development, you will find yourself on the consuming side of promises. Taking advantage of promises set in place by other developers. But you can also create your own.

//One Benefit of Promises: Error Handling using a bunch of nested callbacks can get chaotic. Using Promises, we have a clear path to bubbling errors up and handling them appropriately. Moreover, the value of a Promise after it has been resolved/rejected is immutable - it will never change.