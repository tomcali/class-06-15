const originalArray = [1, 3, 2, 5, 10];
const doubledArray = originalArray.map(function(data) {
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);

// tripledArray has each element of the original array multiplied by 3
const tripledArray = originalArray.map(function(data) {
  return data * 3;
});

console.log(tripledArray);

// oddOrEven has the string "even" at indices where the number is even in originalArray, otherwise the string is "odd"
const oddOrEven = originalArray.map(function(data) {
  if (data % 2 === 0) {
    return "even";
  }
  return "odd";
});

console.log(oddOrEven);

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

// if a moviePatron is 17 or older, add a property of "oldEnough" set to true
// otherwise set the "oldEnough" property to false
const newPatrons = moviePatrons.map(function(data) {
  if (data.age >= 17) {
    data.oldEnough = true;
  }
  else {
    data.oldEnough = false;
  }
  return data;
});

console.log(newPatrons);
