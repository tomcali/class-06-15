let personA = "Derp";
let personB = "Derpette";
let personC = "Derpingtion";
let personD = "Derpina";

//There's no need for escape characters inside of a template string. And you can interpolate multiple variables without issue.
console.log(`${personA} said to ${personB}, 'We should learn Python!'.`);
console.log(`However, ${personC} said, "NO! WE NEED MOAR JAVASCRIPT!".`);

const teachPython = (first,second)=>{
    return `${first} is teaching ${second} how to Python all the things!`;
};
//Since the template string is a function expression, you can invoke a function directly. There is no need to store the resulting text content of the function into another variable.
console.log(`Today ${teachPython(personD,personB)}`);

//Pretty self explanatory here.
personA.includes("D");
personB.includes("i");
