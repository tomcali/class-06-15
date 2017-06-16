const arrayOfTastyAlcohol = ["Tequila Sunrise","Gin and Tonic", "Old Fashioned", "Moscow Mule", "Cuba Libre"];

//For our standard iterator, the forEach method works perfectly. Admittedly, 90% of our work could probably be done with the forEach method.
arrayOfTastyAlcohol.forEach(function(drink){
    console.log(`${drink} is my drink of choice at the moment. It's how I manage to type code at 11:30pm on a saturday.`);
});

const arrayOfNotEntirelyEdible = [{name:"Burger",edible:true},{name:"Salad",edible:true},{name:"Raw Fish(sushi)",edible:true},{name:"Raw Beef(extra EXTRA rare steak)",edible:false},{name:"Macbook Pro",edible:false}];

//Filter returns an array of all that match the condition. The filter works perfectly here.
arrayOfNotEntirelyEdible.filter(function(maybeEdible){
 return maybeEdible.edible === true;
});

const arrayOfCollegeStudents = [{name:"Suzanne",age:21},{name:"Leanna",age:22},{name:"Aaron",age:20},{name:"Brett",age:22}];

//Here we're looking for a boolean value of whether of not the whole group gets in. The .every does exactly that, it returns a boolean based on whether or not ALL items match the condition.
let groupBouncer = students=>{
    return students.every(function(student){
        return students.age>=20;
    });
};

groupBouncer(arrayOfCollegeStudents);

//Here we could use a .some() if we wanted a boolean value return. But the original function returned an array. And as such we should probably use the filter again.
let individualBouncer = students =>{
    return students.filter(function(student){
        return student.age>20;
    });
};

individualBouncer(arrayOfCollegeStudents);
