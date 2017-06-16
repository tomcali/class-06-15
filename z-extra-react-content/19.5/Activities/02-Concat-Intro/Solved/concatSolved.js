const appointments = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "9:30 AM",
  "11:00 AM",
  "12:00 PM"
];

// When passed any number of arguments, concat will create a new array
// with the contents of the original array followed by the arguments
const updatedAppointments = appointments.concat("12:30 PM", "1:00 PM");

console.log(updatedAppointments);

const candies = ["Starbursts", "Sweedish Fish", "Sour Patch Kids"];

const chocolates = ["Hersheys", "Crunch Bar", "Twix"];

// When passed an array as an argument, concat will create a new array,
// destructure the passed array, and add the elements of the passed array
// to the end of the new array

// TDLR it will combine both arrays into a new array
const sweets = candies.concat(chocolates);

console.log(sweets);

let oneThroughTen = [1, 2, 3, 4];

// We can update an existing array by assigning it the returned value of the concat method
oneThroughTen = oneThroughTen.concat(5, 6, 7, 8, 9, 10);

console.log(oneThroughTen);
