# Day 3 Lesson Plan - TDD = Technical Due Diligence?
( Yes, we know it stands for Test Driven Development. But there were so many good acronyms to choose from! Just be glad I didn't name this lesson plan 'Temporary Data Destruction' or 'Technical Debt Despair')

### Overview

Todays lesson will introduce (or re-introduce for some cohorts) the concept of unit testing, test driven development, and applying testing to individual react components. This lesson should also help to solidify the React and Redux concepts the students were exposed to from the previous class. The best way to learn is by doing, so we're going to do it over again!

#### Intructor Priorities

* Students should be able to: 

* Create unit tests successfully.

* Understand the value of testing.

* Sucessfully create a test suite, a simple react app, and convert that app to use Redux sucessfully, relying on their test suite to ensure that things still work.

#### Instructor Notes

* Setup should be minimal if the students were able to successfully complete the activities from Day-2-Redux.

* The core focus of today is not on testing, today's focus is on more React and Redux learning. 

### 1. Instructor Do: Introduce Test-Driven Development aka. "TDD" (0:05)

* What is TDD? When and why should I do it? Here are some key points to hit.
    
    * Test Driven Development is both a process and a methodology. As a process, it means predicting the behavior of your application and writing expectations before writing the application itself. As a methodology, it often results in writing modular reusable code that accomplishes one thing and does it well, allowing it to easily integrate with the rest of the program.

    * This ties in well with React components! Because each React component should be modular and have only one responsibility! 

    * TDD Typically involves repetition of short development cycles. Write the tests (they fail at first by design), write code to make the tests pass, then re-factor your code to make it more efficient. This it sometimes called the RED-GREEN-REFACTOR cycle. (Aptly named because tests that fail are often colored red, while passing tests are typically green)

    * TDD methodology and implementation can be beneficial because it forces you to think about your architecture and program before you write it. Planning in advance can save you from time and resource consuming bugfixes later down the road. 

    * If you ever have to re-write or modify older legacy code, tests are important to ensure that your program still works the way it did before you re-factored it. Having that additional layer of safety for your core business logic is a good idea.

    * Due to the significant upfront cost (in the form of developer time) of writing tests, some developers choose to only write tests for mission-critical processes. Other developers choose to not write tests at all in favor of achieving product deadlines, this is considered bad practice. Please, write your own tests!

### 2. Instructor Do: Introduce testing terminology (0:05)

* In the world of testing, there are several different types of tests. Here are a few examples.
    
    * Unit Tests = Testing an individual function to ensure a small piece of code works. Usually done by the individual developer or contributor.

    * Integration Testing = Testing to see if newly added code causes any existing code to break. Typically administered by QA or automated with CI/CD tools like Travis or Jenkins.

    * Performance Testing = Testing or benchmarking the efficiency or speed of a new code versus existing code. Performance testing often happens during the refactoring stage.

    * Load Testing = Determining the failure points and behavior of a system or code under higher than expected load conditions. Determining the maximum service capacity of a piece of code or hardware.

    * Compatibility Testing = Testing your software under numerous virtual environments. (different browsers, different hardware, different software versions, etc) 

    * Compliance testing = Testing whether or not the product/software meets customer specifications. (Is the documentation comprehensive? Is our test coverage at 100%? Think of it as an audit.)

    * End-To-End Test = Run every possible test from start to finish. Check for deployment readiness. Typically only run in very important cases like a new major version release. Costly and time consuming to run.

    * Test Suite = A reference that can either indicate all the collective tests for your application or a series of similar tests coupled together to test a particular feature.

### 3. Everyone Do: Install and test Mocha framework (0:05)

* Compress and slack out 'first-test-example'

* **Instructions**

    * Install mocha by running `npm install -g mocha`

    * Alternatively for yarn users, run `yarn global add mocha`

    * Install dependencies by running `npm install` or `yarn`

    * From that same directory, run `npm test` or `yarn test`

* **IMPORTANT NOTE** Yarn has been known to have issues with global installs. If this happens, run `yarn global add npm`, and then run `npm install -g mocha`

* TA's and Instructor, confirm that everyone has their setups working.

### 4. Instructor Do: Explain what the heck we just did (0:08)

* "Okay, so this is a test suite I guess. But how does it work? And WHY does it work that way?" Let's tackle some of these questions!

* Have a TA zip up and slack out 'first-test-commented'

* Let's have everyone open up the `package.json` from 01-first-test-example. And have them all pay attention to these lines : 
```javascript
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "mocha"
  },
```
* Under our scripts tag in our package.json, we're setting the npm command of `test` equal to `mocha`. It's the equivalent of typing `mocha` into your command line directly. (which would work because we globally installed mocha just now) You can use other task runners like gulp to do this as well if you wanted. I just personally prefer npm scripts. 

* In our directories tag, we associate the test keyword with the directory all of our tests live in. This directory could probably be named something else besides 'test' as long as the association is created correctly.

* Let's move on to the `test.js` file inside of the `test` directory. 
```javascript
// Here we are requiring chai, which is our assertion library. This is the piece that determines whether or not a value is equal to the expected result.
const chai = require('chai');
// Chai supports several styles of assertion. I find the expect API reads more semantically. But feel free to try others! chai.assert is an option!
const expect = chai.expect;

// Describe here is a mocha function (remember, we're calling this file with mocha) a describe block is used to describe and run a group of related tests. A describe block should have multiple 'it' blocks inside of it.
describe('My unit testing setup',function(){
    //The it block here describes and tests for a specific expected result.
    it('should work',function(){
        //Inside of this function is where we test our values to see if our function worked the way we wanted it to.
        expect(true).to.be.ok;
    });

    //You should also write a fail case to make sure that your program will catch errors correctly. This example will throw an error because 1 evaluates to true, but we are expecting it to return falsey value.
    it('puts the lotion in the basket',function(){
        expect(1).to.not.be.ok;
    });
});
```

* To recap, there are 3 pieces to seting up your testing suite.

    * 1 A task runner. (npm scripts, gulp, grunt, etc.)

    * 2 A testing framework (mocha, jasmine, tape, etc)

    * 3 An assertion library (chai, jest, or even Node.js's native assertion library would work.)

* A unit test also has several parts.

    * A describe block for all the tests concerning a specific part of your application

    * Multiple 'it' statements, where each one returns a true or false value and act as individual tests.

    * The assertions inside of the 'it' blocks.

### 5. Students Do: Write tests for legacy code (0:20)

* Zip up and Slack out '02-Bank-Activity/bank-activity'

* **Instructions**

    * Install your dependencies

    * Run app.js, and take a look at the code and see how it works

    * Write tests for bank.js! Refer to http://chaijs.com/api/ for help and guidance.

    * **BONUS** Write a overdraft and non-existant account fail-safe for account transfers! And create tests to ensure that both the transfer and the error throwing works!

### 6. Instructor Do: Review previous activity (0:08)

* Zip up and Slack out '02-Bank-Activity/bank-solution'

* Take a minute for students to look over the solution we slacked out. Tell them to look it over in detail. It will be different than their code tests.

* Mocha as a testing framework provides us some useful additional functionality. Pre-test hooks, the ability to set tests to a 'pending' state which allows us to author our entire spec without writing any code, and much more.

* Beware of writing your test specs to alter the application state! This can cause test failure and/or false positives. Use the beforeEach if you need to re-set the values after each test. This is why the beforeEach exists!

* The reverse of this is the teardown phase which mocha also provides us. This allows you to reset your variables (both programatic and environmental) to their pre-testing point. This is especially useful if your tests interact with the DOM or require a database/server.

* The problem with writing tests for existing code, is that it is very easy to accidentally look over core parts of your application. The alternative to this is to write the tests first. This is the concept behind TDD/BDD, write only the code that is necessary to your application by having each block of code satisfy a pre-defined role. The result = no excess code and no untested code.

* One additional benefit to Test Driven Development, is that it forces you to think about your application in a lot of depth. You can think of your pending test specs as pseudocode!

* Another thing, Mocha also provides customization and utilities! Mocha has a built in watch flag that can re-run your tests any time you make changes to your files. Likewise, I can also customize the output messages by specifying which reporter to use!

```javascript
//This is in the package.json, the watch command can be run with ' npm run test:watch ' . The first directory is the directory of tests to run, and the second directory is where to watch for changes.

“scripts”:{
    “test”:”mocha --reporter nyan”,
    “test:watch”: “mocha --watch ./test ./”
}, 
```

### 6.5. OPTIONAL MICRO TANGENT! Instructor Do: Demo JavaScript variable types (0:03)

* Call on the class. Ask, 'Can anybody explain the difference between a reference type variable and a value type variable in JavaScript?'. Many students will have a confused blank expression on their faces.

* Go ahead and open up a new tab in chrome and go to the console. You can run all necessary JavaScript in there. Type out the lines, avoid copy-paste here.
```javascript
let a = 50;
let b = a;
//show class this works as expected.
console.log(a); //returns 50
console.log(b); //also returns 50

//now let's run this bit of code
b+=50;
//now ask the class "what will 'b' log now? How about 'a'?" 
//go ahead and log both values

```

* Now let's try this again. Type out the following.
```javascript
let x = {fName:"john",lName:"doe"};
let y = x;
//show class this works as expected
x.lName //returns doe
y.lName //also returns doe

//now let's do the same thing we did earlier!
y.lName = "CEEENAAA!";
y.lName; //this now returns john CEEENAAA, as expected.
x.lName; //But what is this going to log?
//that's right, AND HIS NAME IS JOHN CENA!!!
```

* So, what just happened? In JavaScript, there are two types of values. Example 1 worked because the vaiable `a` evaluates to a primitive value (string, boolean, or integer). Therefore variable `b` was assigned a VALUE, which makes it it's own variable.
 
* In example 2, variable `x` is an object, which is a non-primitive value. So when we created variable `y`, it never created a separate object. We just created another reference to that object. Y IS X!!! They are the same object in JavaScript memory. There was never a new object created, you just created a shortcut to `x`! That's why changing `y.lName` also changed `x.lName`.

* One more example of how JavaScript memory works.
```javascript
let f = 10;
let g = 10;
f === g //this returns true, as the values match

let B = ["a","b","c"];
let D = ["a","b","c"];
B===D  //returns FALSE?? Even though values match?? WHAAAT?
```  

* In the last example, this is an example of how JavaScript does things behind the scenes. Both our values are arrays, and arrays are JavaScript structures based off of prototypes. In the prototype, arrays are given unique identifiers to distinguish them and make them accessible in program memory. Therefore `B` does not equal `D` because, at a very core level, they are not the same!

* When comparing data structures in JavaScript, one should know the following.

    * When two objects in JavaScript have the same structure, they are said to be 'shallow equal'

    * When two objects in JavaScript have the same structure(keys) AND values, they are said to be 'deeply equal'

* PROTIP: In Chai, if we had run `expect(B)to.deep.equal(D)` we would have a value of `true` returned to us from our program. 

### 7. Instructor Do: Explain TDD with React Components (0:05)

* One of the benefits of coponentization in React, is that each component has one job. This means each component has one expected result. This decoupling and separation of functionality lends itself to easy-to-test code, as well as reusable modular code! (Remember the DRY principle!)

* There are many ways to test react components. React uses Jest as their assertion module, and create-react-app is set up with jest by default. Airbnb also has a module known as 'enzyme' which provides environment setup and rendering to test your components functionality. 

* You'll find that these different testing libraries all read very similarly and are all fairly consistent in their behaviour and usage. You may find that your workplace will dictate your exact set of technologies.

* In our upcoming activity, all core functionality is located inside the main/application state of the app. This design is intentional, as it allows for a multi-component react app with all of it's functionality managed from one component. This means we only have to import and test one component.

* **Instructor** : Go ahead and go to '03-TDD-To-Do-Basic/tdd-solution', run `yarn` or `npm i` to install dependencies, and run `npm start` or `yarn start`. Demo application functionality to the students. This app can toggle item statuses, add a new item, or clear completed items. Running `yarn test` or `npm test` also runs the test suite. Do not show students the code yet!

### 8. Pairs Do: TDD React! (0:25)

* Zip up and Slack out '03-TDD-To-Do-Basic/tdd-skeleton'

* **Instructions**

    * Students, form pairs for this activty. It will be a challenging one.

    * Complete the functionality of the To-Do app by writing tests and then writing the code to make the app work.

    * There are 3 functions you will need to write tests for and complete, they're all located in the main application state. Click and event binding has already been set up for you. Replace those annoying console logs with real functions.

    * Extract file and install dependencies.

    * You can run 'npm start' or 'npm test' to get started

    * Useful links below : 
    
    * https://github.com/airbnb/enzyme/issues/208

    * https://facebook.github.io/jest/docs/expect.html

    * http://airbnb.io/enzyme/docs/installation/index.html

### 9. Instructor Do: Review TDD React! (0:05)

* Inside App.test.js, we're using enzyme to duplicate or 'mock' the functionality of our rendered components without actually rendering the entire app. We're importing our component and using a 'shallow' render for each test. A full or a deep render should be used if we wanted to test lifecycle methods. 

* At which point, we can invoke the class-based component's functionality by invoking it as a new instance. We now have access to that function's scope and properties. Hence we can invoke functions and test those values.

* As for the methods themselves in ListBox, remember that react re-renders on a state change. All we're doing is taking the old state, copying it (we never want to manipulate it directly), updating that copy with our methods to reflect our desired changes, and setting the new state equal to that update using this.setState().

### 10. Students Do: Form Groups, install create-react-app (0:05)

* Have students form groups (4 or so people per team)

* Have everyone install create-react-app by running `npm install -g create-react-app` or `yarn global add create-react-app`

* Once installed, have students create a new project by running `create-react-app appNameGoesHere`, this should create a new app with zero configuration.

* Have the students look over it for a minute. It should look very familiar, as the previous activity was bootstrapped with create-react-app

* Let students know that they'll be using that as a starting point for their next activity.

### 11. Groups Do: Build Tic-Tac-Toe using TDD and React (1:00)

* **Instructions**

    * Using either create-react-app (recommended) or the previous example (optional) your group will build a tic-tac-toe game using React and TDD! 

    * Your app test should confirm as a minimum:

        * A new game starts with a clean slate

        * A user can select a box to mark it as taken

        * Users switch/toggle on click  (player X can't just click 3 boxes in a row without player O clicking)

        * Player can win horizontally, vertically, or diagonally

        * If game has been won, no more boxes can be selected

        * A user can start a new game without refreshing the page

    * Here's an example to help you out that comes straight out of React's documentation = https://facebook.github.io/react/tutorial/tutorial.html

    * Remember to keep your code clean and modular. This is good practice, and it WILL prove useful later!

- - - 

### 12. BREAK (0:20)

- - - 

### 13. Instructor do: Remind students of Redux (0:05)

* Zip up and Slack out `04/Tic-Tac-Toe/redux-helpers` 

* Remember how we were using Redux in our earlier projects? Well, I'm sending you two examples of simple applications using Redux to use as a reminder and a reference. 

* Additional examples can be found at https://github.com/reactjs/redux (slack out this link)

* Take a minute to look over the code with your groups and discuss how it's being used. It'll be helpful in your next activity.

### 14. Groups do: Refactor previous project to use Redux (till end of class)

* In a production environment, you never re-factor production code without thoroughly testing it! This is the single most common use case for test suites! Confirming that your code still works after adding new code or modifying existing code!

* Now you will firsthand see why tests are useful! In this next activity, you'll be relying on those tests you wrote to ensure that your application still works the same as it did before!  

* You may end up having to refactor parts of your test suites, this is ok. The job of that test was to establish that there was an error, and to show you where the error was originating from. Your test suite did exactly what it was supposed to do! Act as a warning and a safety net!

* **Instructions**
    
    * As groups, refactor your newly-built tic-tac-toe game to use Redux!

    * Confirm that your application still works.

    * All your tests should still pass once this activity is complete, you may have to tweak the test specs a bit. 

    * This link may prove exceptionally useful = https://medium.com/@marcinbaraniecki/tic-tac-toe-game-in-react-and-redux-155beefa09b0

### 15. (Time permitting) Instructor do: Review Activity (?:??)

* Zip up and slack out '04-Tic-Tac-Toe/tic-tac-react-commented'

* Your solution will probably look very different than the one slacked out. This is perfectly ok. But if you want to look at alternate ways to solve problems I highly recommend you dig through the code. The redux related portions are well commented.

* In development, it's often a good idea to avoid having to re-type code whenever possible. Re-using existing code is often more efficient. So here's the uncommented original source code from github! https://github.com/belfz/tic-tac-react

* Reading through other people's tests can give you a very solid idea and understanding of how they intended their application to work. Well written tests are almost as good as comprehensive documentation.

* Here are some other examples, https://github.com/alexzywiak/react-redux-tic-tac-toe

* Another one https://github.com/peterylai/redux-tictactoe

* Seriously, there is no shortage of freely available source code on github. 

### 16. End.

- - -
# FIN 
- - - 





