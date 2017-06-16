# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Theme: Angular and MongoDB/Mongoose

## Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will reinforce their knowledge of Angular.
* Students will reinforce their knowledge of Mongoose.
* Students will be able to use MongoDB and understand basic MongoDB commands with Angular.
* Students will understand the MEAN Stack.

### 1. Student Do (15 minutes)

_Open `19.2.1_Angular_Review_Exer`_

* Demo Exercise
* Have the students attempt to create the app

### 2. Everyone Do (10 minutes)

* Go over previous exercise

### 3. Instructor Do (15 minutes)

* Talk about Angular and transitioning into 1.5.0:
* AngularJS 2.0 is coming around summer time of 2016 which is just around the corner.
* We are not going to use 2.0 but by using 1.5.0 we are transitioning to the new style and format of Angular 2.0.
* In 2.0 there will no longer going to be $scope and Angular will be using the 'Controller as' as alternative to $scope, this is not going to change the function of the code.
* So let's look at some examples:

  * Old style:

    * $scope:
    * Every controller has an associated $scope object.
      A controller (constructor) function is responsible for setting model properties and functions/behavior on its associated $scope.
    * Only methods defined on this $scope object (and parent scope objects, if prototypical inheritance is in play) are accessible from the HTML/view. E.g., from ng-click, filters, etc.

      ```javascript
      var myApp = angular.module('myApp', []);
      myApp.controller('myController', ['$scope', function($scope) {
          $scope.message = "This is a message";
      }]);
      ```

      ```html
      <div ng-controller="myController">
          {{message}}
      </div>
      ```

  * New style: cleaner

    * this:
    * When the controller constructor function is called, this is the controller.
    * When a function defined on a $scope object is called, this is the "scope in effect when the function was called".
      ```javascript
      var myApp = angular.module('myApp', []);
      myApp.controller('myController', [function() {
          this.message = "This is a message";
      ```
      ```html
      <div ng-controller="myController as control">
          {{control.message}}
      </div>
      ```
      ![Foo](https://docs.angularjs.org/img/guide/concepts-module-service.png)

### 4. Student Do (5 minutes)

* Students summarize the difference with each other.

### 5. Everyone Do (10 minutes)

* Mongoose Review:
  * Ask a few students what Mongoose is for and why we use it.
  * Discuss their answers

### 6. Student Do (10 minutes)

Mongoose Exercise w/skeleton
Need to complete Schema and routes

### 7. Instructor Do (5 minutes)

* Go over previous exercise

\-- 15 minute break -- (total including break: 65 minutes)

### 8. Instructor Do (10 minutes)

* Introduce the MEAN Stack - some talking points:
  * What each framework is doing.
  * Its popularity among devs and in the job market.
  * The benefits of Full Stack JavaScript.

### 9. Partner Do (5 minutes)

* Talk to your partner about the mean stack and make sure you both have a good idea of what it is.

### 10. Student Do (15 minutes)

* Follow the instructions in the `assets/javascript/controllers/app.js` file and in the `server.js` file to get the app working.

### 11. Instructor Do (10 minutes)

* Go over previous exercise.
* Ask for questions.

### 12. Instructor Do (5 minutes)

_Open the `19.2.14_Lab/dayplanner_solution`_
_Demo the dayplanner app for the students, they will be making it next._

* Demo the dayplanner app for the students, they will be making it next.
  * The app displays 24 different textareas for text input  - one for each hour of the day.
  * When you hit the "Save Plan" button it will save an object to the mongodb along with today's date
  * If there is a duplicate date, the object sent to the server will override the previous object
  * When you hit the "Load Plan button", there is a dropdown menu which will display all the days you planned and saved into the db.
  * When you click any of the dates, they will populate the textarea with the data from the db

### 13. Everyone Do (10 minutes)

* Pseudocode the exercise as a class

### 14. Student Do (25 minutes)

  _Give the `19.2.14_Lab/dayplanner_starter` code to students_

* Have students fill in the blank parts of the app so it runs correctly.

### 15. Instructor Do (15 minutes)

* Go over previous exercise.
* Ask for questions.

# Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
