# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

## Theme

MEAN Stack Continued

## Objectives

* _slack out the objectives to the students, and call on random students to read each of them outloud._

* _Make a BRIEF comment about each objective after a person reads it._

  * Students will have a better understanding of Angular and its role within the MEAN stack.

    * Students will understand Angular's Digest Loop

  * Students will understand Angular Dependencies

### 1. Students do (15 minutes)

_Demo the solution to the exercise in 19.13.1/solution_

_Slack the starter code_

* Students should be able to easily finish this exercise

### 2. Everyone do (10 minutes)

_Open the solution to the previous exercise in 19.13.1/solution_

_Go over the previous exercise_

_Call on students to explain what is happening at different points in the code._

### 3. Instructor Do (15 minutes)

* Reviewing Dependency Injection:
  * Giving a function an object, rather than creating an object inside a function, passing the object to the function.

```javascript
  var Dude = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  var logDude = function() {
    var dude = new Dude('Alexander', 'Hamilton');
    console.log(alex);
  }

  logDude();
```

* If the code above is run in a web browser's console, what will happpen?

  * It will log: `Dude {firstname: "Alexander", lastname: "Hamilton"}`;

* But looking closely, if we want to make a different `dude`, let's say `Napoleon Bonaparte` we will have to change the function `logDude`.

* The line `var dude = new Dude('Alexander', 'Hamilton');` is our dependency.

* But what if we do this?

```javascript
  var Dude = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  var logDude = function(inputDude) {
    console.log(inputDude);
  }

  var dude = new Dude('Napoleon', 'Bonaparte');
  logDude(dude);
```

* As you can see the function `logDude` no longer needs to be changed to make new dudes.

* This is the basic idea behind dependency injection, but let's take this a step further.

* How does Angular use dependency injection?

* To Angular dependencies are just compnents, such as service, directive, filters, etc.

```javascript
  // declare a module as our app container
  var app = angular.module('myApp', []);

  // configure the module. Injecting the $http service into the controller
  app.controller('myController', ['$http', function($http) {
  }]);
```

* When Angular compiles the HTML, it processes the `ng-controller` directive, which in turn asks the injector to create an instance of the controller and its dependencies.

* But looking at the code above raises another question.

* Why is the injection look like this `['$http', function($http) {}]`.
* Why is the service put into an array and also in the form a string?

* Dependency Injection and Minification.

* Before we go any further let's talk about JavaScript Arrays!

```javascript
  var nums = [1,2,3];
```

* The above code is an array of numbers, pretty simple, but what if I show you this.

```javascript
  var things = [1,2,function(){alert('Hi!!')}];
  things[2]();
```

* JavaScript let's you put functions into arrays and call it.

* So by having the function in the injection `$http` is available to us.

* Minification:

  * Shrinking the size of files for faster download.
  * AngularJS applications are not minification-safe by default. They must be written using the array syntax, by putting the dependency into an array and it's name as a string we make our code mifi-safe.
  * In the injection `$http` must but written like `'$http'` for the purpose of minification-safety.

  * So let's review! Using the code above.
    1. Angular use identifies `$http` service as a dependency of `'myController'`.
    2. The Injector check whether `$http` has already been instantiated.
    3. If not, the Injector uses a function for `$http` to construct it.
    4. The Injector provide the singleton instance of the `$http` service to the `'myController'`.
    5. We can now use `$http` in our controller.

### 5. Partners Do (5 minutes)

_Show `19.3.5_dependency_example/controller.js` on screen._

* Talk to your partner about what's on screen

### 5. Everyone Do (10 minutes)

* Call on different students to explain each part.

### 6. Instructor Do (5 minutes)

* Demo: Animal Barter Game In Groups MEAN App

  * There is the farmhand who has 'farm bucks', whenever the user clicks the `work` button a 'farm bucks' is added on screen and also in the database.

  * There are animals who needs to be seeded at the start of the app before the user start using the app.
    Each animal has a price, once enough 'farm bucks' is earned by the user, the user can click `buy` and the animal now belongs to the farmhand, and also displays the picture of the animal once it's owned by the farmhand.

  * Once an animal is bought it can no longer to bought again, and is removed from the screen.

  * The app will save in database all the 'farmbucks' the user earned and the animals that the user owns.

### 7. Everyone Do (10 minutes)

* As a class, pseudocode the game.

### 8. Group Do (40 minutes)

* The students will work in groups, split into front-end and back-end to complete the game

### 9. Everyone Do (15 minutes)

* Go over exercises.

- - -

130 minutes passed

## BREAK ( 40 minutes )

- - -

### 11. Instructor Do (10 minutes)

* Digest Loop: How Angular works under the hood.

* Watchers and the Digest Loop.

* In normal JavaScript and jQuery there something behind the scene called the `Event Loop`

* Event Loop include:

  * Keypress
  * Click
  * Mouseover
  * Change

* And Angular Js extends the `Event Loop` adds on the `Angular Context` it's everything that goes in Angular.

* Angular does this by adding watchers, there is a big list of things that Angular is watching.

* Angular has what's called a `Digest Loop`. Whenever something happenes it checks everywhere for anything that will be effected by the change, anything in the DOM or anywhere else in the code. It will keep the cycle and loop going until everything has been changed is changed until nothing is left to be changed.

  ![Foo](https://cfdeepak.files.wordpress.com/2014/09/two-way.png)

* During the compilation phase:
  the ng-model and input directive set up a keydown listener on the `<input>` control.

* The interpolation sets up a $watch to be notified of name changes.
* During the runtime phase:
* Pressing an 'X' key causes the browser to emit a keydown event on the input control.
* The input directive captures the change to the input's value and calls $apply("name = 'X';") to update the application model inside the Angular execution context.

* Angular applies the name = 'X'; to the model.
* The $digest loop begins
* The $watch list detects a change on the name property and notifies the interpolation, which in turn updates the DOM.

* Angular exits the execution context, which in turn exits the keydown event and with it the JavaScript execution context.
* The browser re-renders the view with the updated text.

* You can add your own watchers in Angular with `ng-change`.

### 12. Instructor Do (5 minutes)

_Demo 19.3.12_digest_loop_example_

* Show what is happening in the code.

### 13. Partners Do (5 minutes)

* Partners discuss what just happened.

### 14. Instructor Do (5 Minutes)

_Open 19.13.1_budget_tracker/solution and demo the app_

### 15. Student Do (25 Minutes)

_Slack out the starter code in 19.3.13_budget_tracker/starter_

* Students will complete the app.

### 16. Everyone Do (10 Minutes)

* Go Over previous exercise

### 17. Instructor Do (10 Minutes)

* Last min HW questions

# Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
