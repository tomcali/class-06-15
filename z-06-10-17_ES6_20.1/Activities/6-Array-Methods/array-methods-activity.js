var arrayOfTastyAlcohol = ["Tequila Sunrise","Gin and Tonic", "Old Fashioned", "Moscow Mule", "Cuba Libre"];

for(var i=0;i<arrayOfTastyAlcohol.length;i++){
    console.log(arrayOfTastyAlcohol[i] + " Is my drink of choice at the moment. It's how I manage to type code at 11:30pm on a saturday.");
};

var arrayOfNotEntirelyEdible = [{name:"Burger",edible:true},{name:"Salad",edible:true},{name:"Raw Fish(sushi)",edible:true},{name:"Raw Beef(extra EXTRA rare steak)",edible:false},{name:"Macbook Pro",edible:false}];

for(var e=0;e<arrayOfNotEntirelyEdible.length;e++){
    var arrayOfTotallyEdible = [];
    if(arrayOfNotEntirelyEdible[e].edible ===true){
        arrayOfTotallyEdible.push(arrayOfNotEntirelyEdible[e]);
    };
    console.log(arrayOfTotallyEdible);
};

var arrayOfCollegeStudents = [{name:"Suzanne",age:21},{name:"Leanna",age:22},{name:"Aaron",age:20},{name:"Brett",age:22}];

function groupBouncer(students){
    var accessGranted = true;
    for(var a=0;a<students.length;a++){
        if(students[a].age<21){
            accessGranted = false;
        };
    };
    console.log(accessGranted);
};

groupBouncer(arrayOfCollegeStudents);

function individualBouncer(students){
    var arrayOfLegal = [];
    for(var z=0;z<students.length;z++){
        if(students[z].age>20){
            arrayOfLegal.push(students[z]);
        }
    };
    console.log(arrayOfLegal);
};

individualBouncer(arrayOfCollegeStudents);
