const originalArray = [1, 3, 2, 5, 10];
const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

// Complete the following

// Write a filter that takes in the moviePatrons array and only returns the objects where the age is 17 or older.

const moviePatrons = [
  {
    name: "Christian",
    age: 25
  },
  {
    name: "Alex",
    age: 23
  },
  {
    name: "Luis",
    age: 16
  },
  {
    name: "Angela",
    age: 13
  },
  {
    name: "Mike",
    age: 30
  },
  {
    name: "Sarah",
    age: 30
  }
];

// We can alternatively use an arrow function in both filters and maps
const oldEnough = moviePatrons.filter(
  data =>
    // This evaluated to either true or false
    data.age >= 17
);

console.log(oldEnough);
