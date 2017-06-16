// remember, ES6 arrow function declarations do not exist (You have function expressions instead) .  We need to assign it to a variable. This variable is now named fizzBuzz instead of the earlier function named fizzBuzz. 
const fizzBuzz = ()=>{
    const fizz = "Fizz";
    const buzz = "Buzz";
    let counter = " ";
    for(let i=1;i<101;i++){
        counter = !(i % 3) ? !(i % 5) ? fizz + buzz : fizz : !(i % 5) ? buzz : i;
        console.log(counter);
    }
};
//The end result = our function is still invoked the same way on the same line. No need to modify how the function is called.
fizzBuzz();

//While this is a constructor, the main function itself makes no reference to the 'this' keyword. And as such is good to refactor into an arrow function.
const createNewUser = (name,attack)=>{
    var name = name;
    var attack = attack;
    const newUserObj = {
        name:name,
        attack:attack,
        //Watch out for that "this" keyword. Remember the scoping difference. This is one instance where we need 'this' to refer to the parent function and not the window/global scope.
        printStats:function(){
            console.log(this.name + " has " + this.attack + " attack power!");
        },
        //While this is a nested method, it always returns the same value. This one is good to go on the refactor!
        yell:() => console.log("MY SECRET POWER IS PROGRAMMING AND CAFFEINE!")          
    }
    return newUserObj;
}

//You may notice, we're no longer using the 'new' keyword here. This is one of the "Gotcha!"'s of refactoring a constructor to use an arrow function. Everything else is un-modified.
let bob = createNewUser("bob",47);
console.log(bob);
bob.yell();
bob.printStats();


