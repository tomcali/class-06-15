const Programmer = (name, lang, skillLevel)=>{
    //Destructuring can go the other way! We can use the shorthand syntax to delcare object keys where the key is equal to the variable.
    let data = {name,lang,skillLevel};
    return {
        name:data.name,
        lang:data.lang,
        skillLevel:data.skillLevel
    }
};

//Remember, the 'new' keyword here can cause problems!
let mrDerp = Programmer("Derp","PHP",70);
let derpJr = Programmer("Junior","Ruby",35);
let leDerpThe2nd = Programmer("Herp Le Derpington","Haskel",58);

//A data Set is an option here, but there are also other ways to accomplish this.
var programmerOffice = new Set();
programmerOffice.add(mrDerp);
programmerOffice.add(derpJr);
programmerOffice.add(leDerpThe2nd);

var projectManager = {
    name:"Le Bob Del Mareera the 11th",
    age:897,
    skills:["Centuries of tradition","Knowledge","Every martial art known to man"],
    weaknesses:["Sunlight","Human interaction"]
};

//Classic use of object destructuring. Assign variable names equal to object keys.
let {name,age} = projectManager;

console.log(`${name} will henceforth be managing this project. He has ${age} years of experience.`);
