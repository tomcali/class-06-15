# Day 1 Lesson Plan - ES6 as Promised.
( We'll teach you about ES6 promises today! We promise! )

### Overview

Todays lesson will **formally** introduce students to ES6. The goal of today is to familiarize students with the new options and convenience features ES6 provides. All examples in this lesson will show the ES5 equivalent along with the new ES6 code.

IMPORTANT = Slack out the examples as soon as you introduce a new concept. This will allow students to follow along on their own machines.

#### Intructor Priorities

Students should be able to:

* Refactor existing ES5 code from their projects to use simple ES6 features where applicable.

* Successfully complete the in-class refactoring assignments.

* Understand at least conceptually how some of the more complex ES6 concepts like Promises, Generators, and Async/Await work.

#### Instructor Notes

* ES6 syntax will be abundant throughout the upcoming Redux lesson. It's important to expose and familiarize the students with this syntax as much as possible today.

* Today is divided into two sections. The first section is simple code examples and most of the refactoring exercises. The second section is more focussed on more complex topics like Async/Await, Generators, Fetch, Classes, and Promises.

* **Slack out the applicable code examples right when you introduce a new feature so the students can follow along on their own machines.**

### 1. Instructor Do: Welcome Students + Monologue (0:03)

* Take a moment to let students know that this is new exciting cutting-edge content in high demand. Newly added to the curriculum by popular demand.

* Let students know that this week will involve a lot of "hands-on" learning where students will learn by doing.

* Inform students that the things they learn today will be immediately applicable in their final projects. Likewise, many new tutorials or technical documentation will make heavy use of ES6 syntax. And as such, it's a good idea to become familiar with it sooner rather than later.

### 2. Instructor Do: Introduce the history of ES6 and JavaScript (0:10)

* So what is ES6 anyways? And why does it exist? More importantly, why should we be excited about it? Here are some key points to hit.

    * JavaScript was originally created in 10 days in May 1995 by Brendan Eich. 

    * It was originally named 'Mocha', and then later named 'LiveScript' in September 1995. It was then named 'JavaScript' in December of 1995 as a marketing move to associate it with Java, a popular programming language at the time (Java is still going strong today.)

    * Due to Microsoft and Netscape both creating their own separate versions, JavaScript was handed over to ECMA to create a standardized specification in 1996-1997.

    * The standardization process happens in cycles. ES6 is shorthand for ECMAScript6, which is the 6th release of the JavaScript standard. (sometimes refered to as ECMAScript 2015) ECMAScript is the official written standard, JavaScript is the implementation of that standard.

    * ES6 represents the single biggest expansion of the JavaScript language to date. It brings a lot of additional functionality natively into JavaScript. (Like promises, for which we've previously used other libraries)

    * Some ES6 updates are syntaxtic sugar, they offer no additional functionality, but bring familiar syntax from other languages into JavaScript. (Like Classes in JavaScript, which still use Prototypical inheritance behind the scenes.) You can find the same class syntax in other languages like PHP.

    * Many things in JavaScript that we had previously relied on jQuery for (like $.ajax) can now be done with ES6 (like fetch ). This expanded JavaScript functionality was lacking when JavaScript was first created. Which is why jQuery has served us well and stuck around for so long. But now that JavaScript is gaining a lot of functionality you'll see a lot more people advocating the use of vanilla JavaScript.

### 3. Instructor Do: Introduce Const/Let (0:05)

* Have a TA slack out const-let-example.js

* Besides `var`, ES6 now gives us two additional methods for declaring variables, `const` and `let` !

* Unlike `var`, `let` and `const` are not hoisted to the top of their enclosing scopes.
    ```javascript
        //using var
        console.log(x); //returns "undefined", code still runs
        var x = "hi";

        //using let
        console.log(y); //ReferenceError: y is not defined . Breaks code
        let y = "hello"
    ```

* `const` is used to denote a variable whose value will not be reassigned. Attempting to use the '=' assignment operator on a constant value variable will result in `Uncaught SyntaxError: Identifier 'variableName' has already been declared`

* One of the "Gotcha!'s" of `const` is that while it will not allow you to re-assign a value, if it was initially declared as an object or an array you can still manipulate that variable using the native object or array methods of JavaScript like `.push()` or `.pop()`.

* Because of scoping differences between `var` (which is function scoped) and `let / const` (which are block scoped), Blindly replacing instances of `var` with `const` or `let` may result in broken code. Approach re-factoring of legacy code using `var` with caution.

* A block is either a loop, if statement, or a function. This is what is being referred to when we say the term "block-level scoping".

* When done, slack out Activities/1-Const-Let/const-let-example.js to students.

### 4. Students Do: Const/Let Activity (0:10)

* Slack out Activities/1-Const-Let/const-let-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Replace references to `var` with either `const` or `let`. 

    * Confirm that the code still works exactly like it did before you re-factored it.

### 5. Instructor Do: Introduce Arrow Functions (0:10)

* Have a TA slack out arrow-functions-example.js

* Arrow functions allow for more concise and compact syntax. 

* Arrow functions preserve the context of the "this" keyword in JavaScript by inheriting lexical scope from whatever function invoked the arrow function. Using an arrow function eliminates the need for .bind()

* Because of the non-binding context of 'this' with an arrow function, they are not well suited to be used as methods.

* Arrow functions are always anonymous. 
    ```javascript
    //Standard Javascript function expression. The named variable is attached so that you can reference the function, because the function itself is anonymous.
    var myFunc = function(){
        //do stuff
    };

    //With ES6, this is also possible. You use the same assignment operator '='
    const myOtherFunc = ()=>{
        //do more stuff
    };

    //But using a JavaScript function declaration for a named function like you would in ES5
    function myNewFunc(){
        //do yet more stuff
    };

    //There is no ES6 arrow function equivalent.

    ```

* Arrow functions CANNOT be used as generator functions. This is because the spec forbids the use of the `yield` keyword within an arrow function (except when permitted within non-arrow functions further nested within it). As a consequence, arrow functions cannot be used as generator functions.

### 6. Students Do: Arrow Function Activity (0:10)

* Slack out Activities/2-Arrow-Functions/arrow-functions-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Replace references to `function` with an arrow function where applicable. 

    * Confirm that the code still works exactly like it did before you re-factored it.

### 7. Instructor Do: Strings in ES6 (0:10)

* Have a TA slack out strings-example.js

* With ES6, the standard library has grown immensely. Along with these changes are new methods which can be used on strings, such as `.includes()`, `.endsWith()`, `.startsWith()`, and `.repeat()`. Which behave pretty much the way you'd expect them to. Previously you'd have to use the `.indexOf()` method for some of these methods, or you'd have to create your own.

* One of the most notable changes to string manipulation in ES6 was the addition of template literals ( sometimes called template strings ) to help deal with string concatenation. ( Because having to wrap your double quotes in single quotes or split each string to add a '+' symbol to interpolate a variable into your string is a frustratingly time consuming activity ).

* Template strings in JavaScript are JavaScript expressions. Which means they can perform calculations or call other functions within them.

* The ES6 template string is denoted by the 'grave accent' character. Usually located above the 'tab' key on most keyboards.

```javascript
//previously in ES5...

var myName = "Michael";
var myNickName = "Mike";
var myAge = 24;
console.log("Hello! My name is " + myName + " and I'm " + myAge + " years old. But you can call me '" + myNickName+"' instead.");

var myNewAge = myAge+=1;
console.log("I'll be " + myNewAge + " in September");

//Now with ES6!

let myName2 = "Michael";
let myNickName2 = "Mike";
let myAge2 = 24;
console.log(`Hello! My name is ${myName2} and I'm ${myAge2} years old. But you can call me '${myNickName2}' instead.`);

//And remember, it's a JS expression. You can do calculations!
console.log(`I'll be ${myAge2 + 1} in September`);

```

### 8. Students Do: String Refactor Activity (0:10)

* Slack out Activities/3-Strings/strings-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Refactor the slacked-out code to use ES6 template strings instead regular quote marks.

    * Confirm that the code still works exactly like it did before you re-factored it.

### 9. Instructor Do: Objects in ES6 (0:10)

* Have a TA slack out objects-example.js

* ES6 provides a shorthand form for defining properties in objects. When the JavaScript interpreter encounters a variable assignment without a property key, the variable itself is used as the property key. Example below = 

```javascript
function submit(name, comment, rating){
    let data ={name, comment, rating}; /*note the keys without values.*/
    for(let key in data){
        console.log(key + ’:’, data[key]);
    }
};
submit(‘John’, ‘None’, 7);
 // Results in console.log of =
//name : ‘John’
//comment : ’None’
//rating : 7
```

* In addition to objects, ES6 also provides a new iterable data type. The `Set()` method. One nice feature of the `Set()` method is that values MUST be unique. Attempting to add a duplicate value will result in an error.

* With this `Set()` method, you add values using the 'add' keyword. You can delete values using the 'delete' keyword. You can use '.size' method just like you'd use a '.length' method on arrays. And you can use the '.has' method to determine whether or not a value exists within a set. Arrays can be converted to sets, and vice-versa.

```javascript
let classRoom = new Set();
let derp = {name:"Derp", age:30};
let derpella = {name:"Derpella", age:28};

classRoom.add(derp);
classRoom.add(derpella);

if(classRoom.has(derp)){
    console.log("WE HAVE DERP!");
}

console.log(classRoom.size);

//If you want to convert it back to an array
let newArr = Array.from(classRoom);
```

* Along with `Set()`, ES6 also natively provides `Map()`, `Map()` is similar to `Set()`. `Map()` takes two arguments, a key and a value. It also inherits the '.has' method. You can use mapVariableName.get(‘keyName’) to retrieve the value from a map. Like the previous Set method, the Map also has a delete method.

* If you plan on dealing with ES6 Classes, it's good to become familiar with `Map()` syntax, as ES6 Classes and Maps share methods like `.get` and `.set`

* Destructuring allows us to extract values from BOTH arrays AND objects (even deeply nested ones) and store them in variables with a more convenient syntax.  Destructuring is a way to reference object or array values with variables.

```javascript
//ES5 Method
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'

//ES6 Destructure
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke; //The destructuring process results in variables with a name equal to the key of the object, with the values to match.

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'

//And here's how you can access nested data
let bigBlob = {
    smallerBlob:{
        smallestBlob:"Nested Much?",
        isNested:true
    },
    blobLoblaw:{
        lawBlog:"the Blob Loblaw Law Blog! try saying that 3 times real fast!"
    }
};

//A destructure assignment can accept another destructure assignment as a valid argument!
let {smallerBlob:{smallestBlob,isNested}, blobLoblaw} = bigBlob;

//End result = bigBlob.smallerBlob.smallestBlob is now just a variable named smallestBlob.
console.log(smallestBlob);
console.log(isNested);

//Arrays destructure the same way, but because there is no key (as you would have in objects) you must provide a variable reference yourself.

//ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

//ES6
let [w, x, y, z] = [1, 2, 3, 4];

console.log(w); // 1
console.log(x); // 2
```
### 10. Students Do: Object Destructuring Activity (0:15)

* Slack out Activities/4-Objects/objects-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Refactor the slacked-out code to use the shorthand variable declaration syntax.

    * Likewise, re-factor the code to use ES6 object destructuring.

    * As always, confirm that the code still works exactly like it did before you re-factored it.

    * BONUS : Use Sets and Maps in your re-factor! And research when you would use a Set or a Map over an Object or an Array. 

### 11. Instructor Do: Default Parameters and Rest/Spread operator (0:10)

* Have a TA slack out parameters-example.js

* In ES6, the Rest parameter and Spread operators, due to their functional similarity, both share the 3 dot syntax. The Rest parameter allows you to specify an unlimited number of arguments as an array. Rest parameters should be the last parameter defined if used. 

* For clarification, this 'rest' is referring to ‘the rest of the parameters’ and not 'REST', the acronym that stands for Representational State Transfer when we speak of API's. There is no relation.

```javascript
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
```

* While on the topic of parameters, ES6 also allows us a shorter and more concise syntax for declaring default parameters. Simply add the assignment operator within the arguments.

```javascript
//previously, on ES5...
function newCollegeStudent(name, age, skills){
    var name = name || "John Doe";
    var age = age || 18;
    var skills = skills || [];
    console.log(name,age,skills);
};
var noob = newCollegeStudent("noob",17,["blankly staring at a computer screen"]);

//ES6 Shorthand

let newCollegeStudent1 = (name="John Doe",age=18,skills=[])=>{
    let = {name,age,skills};
    console.log(name,age,skills);
};
let pro = newCollegeStudent1("pro",17,["blankly staring at a computer screen"]);

```

* With default parameters, because order matters, you can pass the argument of undefined to accept a default parameter, but specify your own arguments before and/or after.

```javascript
let newCar = (year=2017, make="toyota", maxSpeed = 140, mpg=25)=>{
    console.log(`Your new car is a ${year} ${make}, with ${mpg} mpg and a top speed of ${maxSpeed} mph.`);
};

newCar(2015,undefined,120,15);
//Undefined second parameter will allow this function to assume the value of 'toyota' for make, while keeping the other parameters in order.
```

* The spread value is similar to the rest parameter and shares the same syntax. It is often used to concatenate multiple values of an array into another array.

```javascript
const someFlavors =['cocoa', 'vanilla'];
const allFlavors = ['strawberry',...someFlavors];
console.log(allFlavors);  // returns ['strawberry', 'cocoa', 'vanilla']

//The spread operator also allows you to split an array into multiple arguments, you can also use the spread operator in destructuring. 

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
let [a, b, c, ...d] = widgets;
console.log(a); //returns ‘widget1’. a is now a variable.
console.log(d); //returns everything after widget 3 as an array, regardless of length of the original array
```

### 12. Students Do: Rest-Spread Operator Activity (0:10)

* Slack out Activities/5-Parameters/parameters-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Refactor the slacked-out code to use the rest and spread operators

    * Likewise, re-factor the code to use ES6 default parameters whenever possible.

    * As always, confirm that the code still works exactly like it did before you re-factored it.

### 13. Instructor Do: Array Methods (0:10)

* Have a TA slack out array-methods-example.js

* Currently, we have shorter and more semantic alternatives to using a for loop to iterate over everything in the form of array helpers/methods! As long as your data is stored in an array, these methods are good to go! Many array helper methods were introduced or proposed for ES5.1, but only formally implemented in ES6. They all function in a similar fashion, and share a similar syntax. These methods are : 
    * forEach (The swiss army knife of array functions)
    * map (requires a return statement, commonly used to collect properties off of an object. Think "array of objects")
    * filter (returns either a truthy of falsy value, falsy values are excluded from the returned array, returns all truthy values)
    * find (requires return statement, exits on first truthy match, returns first truthy value)
    * every (will test ALL elements in array against condition.)
    * some (will test if ANY elements match condition)
    * reduce (reduce takes two params, is more complex)

```javascript
let colors = [‘blue’,’red’,’green’];
colors.forEach(function(color){
    console.log(color);
});
/* in this case, color is an iterator that can be named anything, although the current convention is to name it the singular form of whatever the array name is. forEach will loop through each element in the array, you can pass a function as an argument which contains the code you wish to run for each iteration. */

//When calling a named function inside of a forEach, the invoking parenthesis are not needed.
array.forEach(myFunc);  //This is good
array.forEach(myFunc());  //This is NOT good if you need to pass params, use an anonymous function.
```

* Reduce is one that's a little different than the rest. The first argument to the inner anonymous function is the initial starting value. The second is the current element in thr array. Example : 

```javascript
let numbers = [1,2,3,4];
let sum = 0;
numbers.reduce(function(sum,number){
    return sum + number
}, 0 );
```

* One important downside to array methods/helpers, **THEY DO NOT WORK WITHIN GENERATOR FUNCTIONS!!! YOU CANNOT YIELD VALUE FROM WITHIN AN ARRAY HELPER!!!**

### 14. Students Do: Array Methods Activity (0:10)

* Slack out Activities/6-Array-Methods/array-methods-activity.js to students. 

* Slack out the following instructions to students:

* **Instructions**

    * Refactor the code sent to you to use native array methods instead of for loops!

    * IMPORTANT : confirm that the code still works exactly like it did before you re-factored it.

## TEMPORARY PATCH

* As of typing this message (5/24/2017) The activities for 7-12 have not been written. A github issue has been raised on this. Feel free to compress and slack out all remaining examples to students to use as a reference anyways.

## /TEMPORARY PATCH

### 15. Instructor Do: Import/Export in ES6 (0:05)

* Prior to ES6, your best bet for modularization of files was to use the Node.js `module.exports` and `require` syntax . This pattern did not exist in JavaScript natively, and the `module.exports` was a Node.js method that was introduced to mimic the functionality of classes from other programming languages. `module.exports` did not exist in native Javascript.

* With ES6, we now have an alternative standardized import/export syntax using the `import` and `export` keywords. We can export functions, objects, a list of objects, and other values (etc.) simply by using the export keyword:

```javascript
export let name = 'David';
export let age  = 25;​​
export const sumTwo = (a, b) => a+b;
```
* Using the new `export` syntax, you can also export default bindings. But if you use `export default`, it's best practice to do so at the end of the module. It makes it clear what is being exported, and saves time by having to figure out what name a value was exported as. More so, the common practice in CommonJS modules is to export a single value or object. By sticking to this paradigm, we make our code easily readable and allow ourselves to interpolate between CommonJS and ES6 modules.

```javascript
function sumFour(a, b, c, d) {
    return a + b + c + d;
};

function sumThree(a, b, c) {
    return a + b + c;
};

let api = {
    sumFour,
    sumThree
};

export default api;

/* Which is the same as
 * export { api as default };
 */
```

* If you export something as default, you should not require the use of {} brackets when you import the file/module. As it has been set to default.


* The new `import` keyword is equally easy to use. You can import an entire file or module. (It is important to note that simply importing an entire file will execute all code at the top level of that file.)

```javascript
import fizzbuzz from 'fizzbuzz';
```

* Or using object destructuring, you can import specific parts of a module. Additionally, you can also rename your imports in a similar way you'd assign an alias to a SELECT statement in SQL.

```javascript
//Destructure
import {floor,round,max} from 'math';

//Alias
import * as util from 'math';

//Destructure + Alias
import {
    derpington as derp,
    derpette as derp2
} from 'phoneBook';

```

* Similar to SQL, you can denote `*` to **IMPORT ALL THE THINGS** (also called namespace import).

```javascript
import * as util from 'extraHelperMethodsObject';
```

- - -

### 16. BREAK (0:20)

- - -

### 17. Instructor Do: Discuss the Fetch API (0:10)

* Up until now, we've often use jQuery or another third party library to handle our HTTP requests for us. JavaScript can do this natively using `XMLHttpRequest`. However, doing so is needlessly complex. ES6 now provides a simpler (albiet semi-experimental) way of transfering data between a client and a server via the `fetch` command.

* The `fetch` command returns a Promise. And for API usage, you may need to specify `respsonse.json()` inside of your `.then(function(response){})` function to convert the response into JSON so you can manipulate it.

    ```javascript
    //ES5
    function reqListener () {
      console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
    oReq.send();

    //ES6
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) { return response.json(); })
        .then(function(json) {
        console.log(json);
    });

    ```

* Fetch can be used to request non HTTP resources as well. If can be used to asyncronously load other files.

* [Additional Fetch examples can be found here!](https://github.com/mdn/fetch-examples)

* One major downside with the `fetch()` API = in the case of an error, your .catch() phase from the yielded Promise will not be triggered. Even if the server responds with a 404 status code. The catch method chained onto a fetch will only be triggered if the request is not made. RESOURCE SERVER ERRORS DO NOT CONSTITUTE NETWORK ERRORS. THE ERROR ONLY TRIGGERS IF THE REQUEST FAILS! You'll have to create your own error handling for it.

### 18. Instructor Do: Discuss ES6 Native Promises (0:15)

* **Slack out BOTH the promises-example.js and the promises-cookbook.js to students**

* Promises are syntaxtic sugar for callbacks. If you've ever used a `.then()` or a `.done()` function, you've used a Promise! There are many libraries available that allow you to use Promises to handle your async code. And up until recently, you'd use one of those libraries like jQuery, Promise, RSVP, or Bluebird to take care of this for you. However, ES6 has now standardized the syntax and incorporated Promises natively.

* With promises in ES6, callback functions are handed off to another scope to be called once an event is complete. a promise is an eventual value.
    * In stage 1 (while waiting on request), it is in a state called pending.
    * A promise in stage 2 (when data is retrieved), It is now in state of ‘resolved’ or ‘fulfilled’. Promises kept successfully will result in a new promise being formed with a value returned by the previous callback.
    * A promise in stage 3 (error or rejection) Is in the stage (‘rejected’). No new promise is formed. However, you now have an event with which to handle an error. Promises really work the same as nested function calls, but make your code a lot easier to read.
The example below assumes you’ve already called a promise constructor as an instance = 

```javasript
let jsonPromise = getJSON(‘urlGoesHere’);
jsonPromise.then(success,failure);  /* success and failure are functions you’ve defined before hand to handle this. The .then() method will take a maximum of two parameters */
```

* Some developers will set the promise callback as a single parameter to the .then() method and chain on a .catch() method that takes a single argument which can be set up to handle any errors. This is to avoid the default behaviod of promises where Promises fail silently as so not to impact the rest of your application. 

```javascript
//Another example for good measure

var calculationPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1+1);
    }, 1000);
});

calculationPromise.then(function(value){
    console.log(‘the answer is’ + value);
});  
```

* Promises can be chained. Also, the function calls in your `.then()` can be either named functions or anonymous functions. ES6 handles them the same way. Typically in your development, you will find yourself on the consuming side of promises. Taking advantage of promises set in place by other developers. But you can also create your own.

* One Benefit of Promises: Error Handling using a bunch of nested callbacks can get chaotic. Using Promises, we have a clear path to bubbling errors up and handling them appropriately. Moreover, the value of a Promise after it has been resolved/rejected is immutable - it will never change.

### 19. Instructor Do: Introduce ES6 Generator Functions (0:15)

* In ES6, a generator is a function that can be exited and entered multiple times. Normally, a regular function is called, runs, returns a value, and it’s done. With generators, you can run a section of code, return a value, and continue on where you left off. Generators can be especially useful when combined with promises!

* Generators allow a function to return multiple values over time by returning an object that can be iterated over. You can think of Generators as 'lazy functions'. Similar to how Promises allow us to avoid callback hell, Generators allow us to flatten our code - giving our asynchronous code a synchronous feel. 

```javascript
//NOTE the asterisk! This is what denotes a Generator function (which returns an iterable Generator object)
function* fibonacciGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 5;
    yield 8;
    yield 13;
};

//The .next() method is how we progress to the next stage of our Generator function and evaluate the next expression.
var generator = fibonacciGenerator();
console.log(generator.next()); //1
console.log(generator.next()); //2
console.log(generator.next()); //3
console.log(generator.next()); //5
console.log(generator.next()); //8
console.log(generator.next()); //13
```

* As the above example shows, your generator exits on each yield statement. And resumes on each call of .next(). Values can be yielded and can be returned to the generator as a param of the next() method if desired. All returned objects from a Generator also have a default boolean value assigned to the key of `done`, this value is set to false if the generator has not been fully iterated yet. Once the generator is finished, the returned object will have a done:true value.

* Because of this generator syntax, you can write asynchronous code in a manner that resembles synchronous code. 

```javascript
// Hiding asynchronousity with Generators

function request(url) {
    getJSON(url, function(response) {
        generator.next(response);
    });
};

//And here's an example generator function we could write to return our data:

function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var data2  = JSON.parse(entry2);
}
//By the power of yield, we are guaranteed that entry1 will have the data needed to be parsed and stored in data1.
```
 
* While generators allow us to write asynchronous code in a synchronous manner, there is no clear and easy path for error propagation. As such, as we can augment our generator with Promises. (Remember when I said we could use promises with our Generators? This is why!).

* Remember, ARRAY HELPERS DO NOT WORK WITHIN GENERATORS!! YOU CANNOT YIELD VALUE FROM INSIDE AN ARRAY HELPER!! Instead, the for of loop works well for generator iteration. Because each yield results in an iteration of the loop. Generators can also be called from within other generators. To do this, use the yield* statement followed by the variable value that references the other generator. This is called generator delegation. (You may want to look into symbol.iterator for that. Think of a symbol iterator as an iterator value that has not yet been defined.)

```javascript
//You can specify a symbol iterator property in objects to determine how they should respond when iterated over by a generator. Example = 

const testTeam = {
    lead:'derpington',
    tester:'snarf',
    [Symbol.iterator]: function*(){
        yield this.lead;
        yield this.tester;
    }
};

const engineerTeam = {
    //Enhanced object syntax. Shorthand for testTeam:testTeam
    testTeam,  
    lead :'boi',
    manager: 'omg why',
    engineer: 'see what happens'
};

function* teamIterate(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testTeam;  //looks at our testTeam for yields
};

const names = [];

for (let name of teamIterate(engineerTeam)){
    names.push(name);
};

console.log(names);
// on completion, the names array should hold the names of both teams!
```

* While Generators and Promises allow us to write asynchronous code in a synchronous manner while retaining the ability to propagate errors in a nice way, we can actually begin to utilize a simpler construction that provides the same benefits: Let's all take a moment to take a peek at `Async/Await` from ES7!!

### 20. Instructor Do: Introduce Async/Await from ES7 (0:15)

* While this new functionality is technically part of the ES7 spec, Node.js supports `Async/Await` natively without the `--harmony` flag as of version 7.6. As of February 2017, `Async/Await` now a viable and well supported option for handling asynchronous code.

* [Additional example of async await is available here](http://masnun.com/2015/11/11/using-es7-asyncawait-today-with-babel.html)

* [And another good resource on the Promises to Async/Await comparision](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)

* Interesting note of differentiation between `Async/Await` and `yield` in Generators, the `async` and `await` keywords in JS can be considered as use cases of the `yield` function. Under the hood, it performs very similarly to Generators. Async and await are used together, whereas yield is almost exclusively for generators. Yield returns a final value outside of a generator, await on the other hand, will call Promise.resolve() upon the awaited value. Await returns a promise, yield simply returns value.

```javascript
var request = require('request');

function getJSON(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

async function main() {
  var data = await getJSON();
  console.log(data); // NOT undefined!
}

main();
```

* It’s important to remember: async functions don’t magically wait for themselves. You must await, or you’ll get the promise instead of the value you expect to be returned from the promise.

### 21. Instructor Do: Introduce ES6 Classes (0:15)

* It is important to know that `Class` in ES6 is inherently different than Classes in other languages. CLASSES IN JAVASCRIPT STILL USE PROTOTYPICAL INHERITANCE BEHIND THE SCENES RATHER THAN CLASSICAL INHERITANCE. The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide syntaxtic sugar for a much simpler and clearer-looking syntax to create objects and deal with inheritance.

* While the syntax for creating classes in ES6 obscures how implementation and prototypes work under the hood, it is a good feature for beginners and allows us to write cleaner code. 

* One thing to keep in mind. Is that when you are declaring methods inside of a class object, you do not need to comma-separate them. This will actually cause a syntax error.

```javascript
//Prior to ES6, we implemented Classes by creating a constructor function and adding properties by extending the prototype:

function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
};

Person.prototype.incrementAge = function () {
    return this.age += 1;
};

//And created extended classes by the following:

function Personal(name, age, gender, occupation, hobby) {
    Person.call(this, name, age, gender);
    this.occupation = occupation;
    this.hobby = hobby;
};

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;
Personal.prototype.incrementAge = function () {
    Person.prototype.incrementAge.call(this);
    this.age += 20;
    console.log(this.age);
};

//Now with ES6 classes, One way to define a class is using a class declaration (The other way would be a class expression using an assignment operator, more or less identical to the was functions work). To declare a class, you use the 'class' keyword with the name of the class 

class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    incrementAge() {
      this.age += 1;
    }
};

//And extend them using the extends keyword:

class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        console.log(this.age);
    }
};

//As is convention, and being that the 'Class' keyword is used in place of ES5 constructors, you should capitalize your Class functions.

//You create a new instance of your class with the ’new’ keyword, the same way you would with a standard constructor function. The new keyword will execute the internal constructor block.

let bobLeDodson = new Person("leBob",65,"nonbinary","nuclear researcher","ultimate power");
```

* An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError

```javascript
var p = new Person(); // ReferenceError

class Person {};
```

* The body of a class object in ES6 begins and ends with curly brackets `{}` just like a function. The class object takes an internal function named constructor. The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

* Class functionality can extend to other classes, however if they both have nested constructors then you will need to run a super() function to pass values to the sub-class from within the main class. The super() function works by calling the parent constructor from the extended class (the super function is typically nested within the extended classes constructor function). If your parent constructor makes use of the ‘this’ keyword, you will have to pass arguments into the super function. When extending a class, the super() function in the child class constructor MUST be called before any reference to the parent instance. 

* Much like classes from other languages, ES6 Classes support static methods. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
};

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
```

* One additional nice thing about classes: YOU CAN USE MAP FUNCTIONALITY ON CLASSES!!

### 22. Instructor Do: Wrap-Up (0:10)

* Spend the rest of the time answering student questions.

* This lesson covers quite a lot of material. Let students know that it's okay if they have to keep Googling syntax at this point. Reassure them that it will all stick with practice, and that they'll get a lot more practice in the upcoming lessons.

### END
- - -