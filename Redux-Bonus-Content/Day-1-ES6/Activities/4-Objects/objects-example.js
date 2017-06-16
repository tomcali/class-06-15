/***
    ES6 OBJECTS EXAMPLES
***/


//ES6 provides a shorthand form for defining properties in objects. When the JavaScript interpreter encounters a variable assignment without a property key, the variable itself is used as the property key. Example below = 

function submit(name, comment, rating){
    let data ={name, comment, rating}; /*note the keys without values.*/
    for(let key in data){
        console.log(key + ':', data[key]);
    }
};
submit('John', 'None', 7);
/* Results in console.log of =
    name : ‘John’
    comment : ’None’
    rating : 7
*/

//In addition to objects, ES6 also provides a new iterable data type. The `Set()` method; One nice feature of the `Set()` method is that values MUST be unique. Attempting to add a duplicate value will result in an error.

// With this `Set()` method, you add values using the 'add' keyword. You can delete values using the 'delete' keyword. You can use '.size' method just like you'd use a '.length' method on arrays. And you can use the '.has' method to determine whether or not a value exists within a set. Arrays can be converted to sets, and vice-versa.

let classRoom = new Set();
let derp = {name:"Derp", age:30};
let derpella = {name:"Derpella", age:28};

classRoom.add(derp);
classRoom.add(derpella);

if(classRoom.has(derp)){
    console.log("WE HAVE DERP!");
}

console.log(classRoom.size);

//If you want to convert it back to an array
let newArr = Array.from(classRoom);

//Along with `Set()`, ES6 also natively provides `Map()`. `Map()` is similar to `Set()`, it takes two arguments, a key and a value. It also inherits the '.has' method. You can use mapVariableName.get(‘keyName’) to retrieve the value from a map. Like the previous Set method, the Map method also has a delete method.

let treasureMap = new Map();
treasureMap.set("HELLO"," TREASURE");
console.log(treasureMap);

//Destructuring allows us to extract values from BOTH arrays AND objects (even deeply nested ones) and store them in variables with a more convenient syntax.  Destructuring is a way to reference object or array values with variables.

//ES5 Method
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'

//ES6 Destructure (once again, number added to avoid conflict)
let boba = { occupation1: 'bounty hunter', father1: 'jango fett' };
let {occupation1, father1} = boba; //The destructuring process results in variables with a name equal to the key of the object, with the values to match.

console.log(occupation1); // 'bounty hunter'
console.log(father1); // 'jango fett'

//And here's how you can access nested data
let bigBlob = {
    smallerBlob:{
        smallestBlob:"Nested Much?",
        isNested:true
    },
    blobLoblaw:{
        lawBlog:"the Blob Loblaw Law Blog! try saying that 3 times real fast!"
    }
};

//A destructure assignment can accept another destructure assignment as a valid argument!
let {smallerBlob:{smallestBlob,isNested}, blobLoblaw} = bigBlob;

//End result = bigBlob.smallerBlob.smallestBlob is now just a variable named smallestBlob.
console.log(smallestBlob);
console.log(isNested);

//Arrays destructure the same way, but because there is no key (as you would have in objects) you must provide a variable reference yourself.

//ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

//ES6
let [w, x, y, z] = [1, 2, 3, 4];

console.log(w); // 1
console.log(x); // 2

