# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Theme: AngularJS Routing

## Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will reinforce their knowledge of Angular.
* Students will understand how routing works with AngularJS
* Students will be able to to use a third party Angular module

### 1. Student Do (15 minutes)

* Call on every project team to give a quick standup
* Every person must state:
  * What they did last time
  * What their next step is
  * What they are stuck on
* Make sure students speak for themselves and not in the "we" or "us" voice

### 2. Instructor Do (30 minutes)

* Explain how `angular-route` is **NOT** part of AngularJS by default
* It must be included along with AngularJS. Order matters
* Show what happens if you include `angular-route.js` before `angular.js` and how it breaks
* Explain the concept of an `ng-include` and how it can load additional view that are reused
* Do `in-class-exercises/1`

### 3. Student Do (30 minutes)

* Work in pairs
* Create an AngularJS app that has a common heading across 5 different pages
* This site is about the five favorite classes you've at at Rutgers so far
* On two of the pages (any two), `ng-include` a shout out to the instructor

### 3. Instructor Do (20 minutes)

* Review Student Work
* Have one pair come up and present their solution
* Show `in-class-exercises/2` to show HTML5 mode at the end of student work

(15 minute break)

### 4. Instructor Do (20 minutes)

* Talk about how there are many solutions to the same problem.
* ngRoute is one way to do routing, another is `ui.router`
* Do `in-class-exercises/3`

### 5. Student Do (10 minutes)

* Finish the `table-data.html` portion to make that functional
* Two students are called up to code out the solution live

### 6. Student Do (30 minutes)

* Create an SPA with `UI-Router` of your 3 least favorite RCB topics
* Have a nested state
* Utilize the same controller for two different states
* Utilize the `$stateParams` to read data from the URL

### 7. Instructor Do (10 minutes)

* Review Student Work

- - -

# Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
