function Employee(name,age,position){
    var name = name;
    var age = age;
    var position = position;

    var objectToReturn = {
        name:name,
        age:age,
        position:position,
        isBoss:false
    }
    return objectToReturn;
};

var johnDoe = new Employee("john",40,"manager");
var janeDoe = new Employee("jane",35,"sysadmin");

console.log(johnDoe.age);
console.log(janeDoe.isBoss);

var companyMotto = "Lorem Ipsum";

for(var i=0;i<5;i++){
    console.log(companyMotto);
};