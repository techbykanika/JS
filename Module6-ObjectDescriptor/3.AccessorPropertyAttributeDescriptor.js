'use strict'
const obj ={
    get name(){
        console.log(" we are inside the get function of name property")
        
        return this._name
    },

    set name (value){
        // this._name will get attcahed as a property to the obj when we will be  set name
        console.log(" we are inside the set function for the property name ")
        this._name=value
    },
    profession:"software engineer",
    get height(){
        return this._height
    },
    set hometown (value){
        this._homeTown=value


    }
}
// with help of getter ans setter we can give dynamic value to object property
// get and set are keyword

console.log("\n printing the obj");
 console.log(obj);
 console.log("\n access the setter ");
 obj.name="kanika Kala";
 console.log("\n getting the property name from obj from get()");
 console.log(obj.name);
 console.log(obj._name);


 // to access descriptor or property attribute we use -
 // Object.getOwnPropertyDescriptor(nameofobject, nameOfOneOfKeyOfObject)
 // to acess all the propetries descriptor 
 // Object.getOwnPropertyDescriptors(nameofobject);
console.log( Object.getOwnPropertyDescriptors(obj));
// in above output we cant see _hometown as property 

obj.hometown="Pauri";

console.log("printing the obejct")
console.log(obj)
console.log("\n /nAgain getting all the propetires and descriptoion of them");
console.log( Object.getOwnPropertyDescriptors(obj));
 

console.log("\n \n Accessing the property height is has only setter ");
console.log(obj.height);
console.log("\n \n Again printing all the properties and thr attributes");
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj);
console.log("we dont have setter for height property i am going to try for setting it");
// without use strict this wont throw error with use strict if you try to set the value of the accecor property 
// which doesnt have the set function it will throw error 
// wihtout strict mode -> it wont set the property value but it will not thorw error 
obj.height=23;
console.log("/n /ntrying to acess height again");
console.log(obj.height);
console.log("\n \n Again printing all the properties and thr attributes");
console.log(Object.getOwnPropertyDescriptors(obj));
console.log("/n /n printing object");
console.log(obj);

