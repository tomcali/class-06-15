//It is important to know that `Class` in ES6 is inherently different than Classes in other languages. CLASSES IN JAVASCRIPT STILL USE PROTOTYPICAL INHERITANCE BEHIND THE SCENES RATHER THAN CLASSICAL INHERITANCE. The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide syntaxtic sugar for a much simpler and clearer-looking syntax to create objects and deal with inheritance.

//While the syntax for creating classes in ES6 obscures how implementation and prototypes work under the hood, it is a good feature for beginners and allows us to write cleaner code. 

//One thing to keep in mind. Is that when you are declaring methods inside of a class object, you do not need to comma-separate them. This will actually cause a syntax error.

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

//An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError

var p = new errorCreator(); // ReferenceError

class errorCreator {};

//The body of a class object in ES6 begins and ends with curly brackets `{}` just like a function. The class object takes an internal function named constructor. The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

//Class functionality can extend to other classes, however if they both have nested constructors then you will need to run a super() function to pass values to the sub-class from within the main class. The super() function works by calling the parent constructor from the extended class (the super function is typically nested within the extended classes constructor function). If your parent constructor makes use of the ‘this’ keyword, you will have to pass arguments into the super function. When extending a class, the super() function in the child class constructor MUST be called before any reference to the parent instance. 

//Much like classes from other languages, ES6 Classes support static methods. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

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

//One additional nice thing about classes: YOU CAN USE MAP FUNCTIONALITY ON CLASSES!!