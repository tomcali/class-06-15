function Programmer(name, lang, skillLevel){
    var name = name;
    var lang = lang;
    var skillLevel = skillLevel;
    return {
        name:name,
        lang:lang,
        skillLevel:skillLevel
    }
};

var mrDerp = new Programmer("Derp","PHP",70);
var derpJr = new Programmer("Junior","Ruby",35);
var leDerpThe2nd = new Programmer("Herp Le Derpington","Haskel",58);

var programmerOffice = [];
programmerOffice.push(mrDerp);
programmerOffice.push(derpJr);
programmerOffice.push(leDerpThe2nd);

var projectManager = {
    name:"Le Bob Del Mareera the 11th",
    age:897,
    skills:["Centuries of tradition","Knowledge","Every martial art known to man"],
    weaknesses:["Sunlight","Human interaction"]
};

var bossName =  projectManager.name;
var bossAge = projectManager.age;
//feel free to use ES6 template literals and let/const in your refactor too!
console.log(bossName + " will henceforth be managing this project. He has " + bossAge + " years of experience.");
