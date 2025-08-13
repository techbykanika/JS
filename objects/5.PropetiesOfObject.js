'use strict';
var myDetails ={
    name:"kanika",
    age:"24",
    palcesILike :["goa","rishikesh","tungnath","vasudhara"],
    // key ahs number can be accecced with '.' operqator
    9:"number nine",
    "key space":"this property key has space ",
    Key1:"this key has no",
    // key has specail cahr can ne accesed with '.' operator
    "key#$":"this key has special cahr",
    "have to delete this":"delete this",
    // object can key value as fucntion
    func: function(){
        
        this.key1=" this key has no and is updated by func function";

    }
}
console.log(myDetails);
// acceesing the property , key start with number  or key has specail char than we have to access through square notation , 
console.log(myDetails.Key1);
console.log(myDetails["key#$"]);
console.log(myDetails.age);
console.log(myDetails[9]);
// how to add proptery to object
myDetails.newPropertyAdded="new property added";
// update a property 
myDetails.name="kanika kala updated";
console.log(myDetails);
// delete the property - it retunrs true if property was deletred
console.log(delete myDetails["have to delete this"]);

console.log(delete myDetails.nothing);
myDetails.func();
console.log(myDetails);

