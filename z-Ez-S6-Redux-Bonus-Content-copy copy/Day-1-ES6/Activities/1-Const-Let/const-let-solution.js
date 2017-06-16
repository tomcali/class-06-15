function Employee(name,age,position){
    // This one is a "gotcha!" As the parameter declaration can react similarly to a variable declaration! Remember when I said to be careful with the re-factoring??
    var name = name;
    var age = age;
    var position = position;

    // Const works just fine for this, because our returned object will always have the same structure.
    const objectToReturn = {
        name:name,
        age:age,
        position:position,
        isBoss:false
    }
    return objectToReturn;
};

let johnDoe = new Employee("john",40,"manager");
let janeDoe = new Employee("jane",35,"sysadmin");

console.log(johnDoe.age);
console.log(janeDoe.isBoss);

// If you did let instead of const here, no worries. They both work. Company mottos SHOULD be flexible right?
const companyMotto = "Lorem Ipsum";

// Seems obvious, but the value of 'i' is being re-assigned with alarming frequency. So const would be a bad choice.
for(let i=0;i<5;i++){
    console.log(companyMotto);
};