// In ES6, a generator is a function that can be exited and entered multiple times. Normally, a regular function is called, runs, returns a value, and it’s done. With generators, you can run a section of code, return a value, and continue on where you left off. Generators can be especially useful when combined with promises!

// Generators allow a function to return multiple values over time by returning an object that can be iterated over. You can think of Generators as 'lazy functions'. Similar to how Promises allow us to avoid callback hell, Generators allow us to flatten our code - giving our asynchronous code a synchronous feel. 

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

//As the above example shows, your generator exits on each yield statement. And resumes on each call of .next(). Values can be yielded and can be returned to the generator as a param of the next() method if desired. All returned objects from a Generator also have a default boolean value assigned to the key of `done`, this value is set to false if the generator has not been fully iterated yet. Once the generator is finished, the returned object will have a done:true value.

//Because of this generator syntax, you can write asynchronous code in a manner that resembles synchronous code. 

// Hiding asynchronousity with Generators : 

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

//While generators allow us to write asynchronous code in a synchronous manner, there is no clear and easy path for error propagation. As such, as we can augment our generator with Promises. (Remember when I said we could use promises with our Generators? This is why!).

//Remember, ARRAY HELPERS DO NOT WORK WITHIN GENERATORS!! YOU CANNOT YIELD VALUE FROM INSIDE AN ARRAY HELPER!! Instead, the for of loop works well for generator iteration. Because each yield results in an iteration of the loop. Generators can also be called from within other generators. To do this, use the yield* statement followed by the variable value that references the other generator. This is called generator delegation. (You may want to look into symbol.iterator for that. Think of a symbol iterator as an iterator value that has not yet been defined.)

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