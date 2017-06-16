function concatArgs() {
    var newString ="";
    for (var i=0; i < arguments.length; i++) {
        newString += arguments[i];
    };
    console.log(newString);
};

concatArgs("Hello ", "darkness ", "my ", "old ", "friend.");

function deliciousPizza(meat,cheese,crust){
    var meat = meat || "Pepperroni";
    var cheese = cheese || "Mozarella";
    var crust = crust || "Thin";
    var aWildPizza = {
        meat:meat,
        cheese:cheese,
        crust:crust
    };
    return aWildPizza;
};

//Please, for the love of everything holy and sacred, re-factor this awful block of code to accept ES6 function syntax, template strings, and object destructuring.
var lunchOrder = new deliciousPizza("Ham and Bacon", "Cheddar");
console.log("I'm having a " + lunchOrder.meat + " pizza with " + lunchOrder.cheese +  " Cheese and a " + lunchOrder.crust + " crust for lunch!"); 

function iCanHazArrays(arr2,dee2){
    var finalArray = []
    for (var i=0; i<arr2.length; i++){
        finalArray.push(arr2[i]);
    };
    for (var z=0; z<dee2.length; z++){
        finalArray.push(dee2[z]);
    };
    return finalArray;
};

var muchConcat = iCanHazArrays(["R",2],["D",2]);
console.log(muchConcat);

