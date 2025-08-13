// 1 .Data properties 
//Data property associate a key valye with in JS Value
// we explain them with help of key value pair 
const objDataProperty= {
    property1:"20",
    name:"kanka",
    age:"24"
};
console.log("\n Printing the object name as ObjDataProperty and all the three property inside it are Data property");
console.log(objDataProperty)

// 2. Internal properties 
// Properties are special one . has double square bracket around them 
// These are properties which programmer cannot touch directly ( access or modify )
// to access or modify internal properties we have internal API defined by JS 
// one of the internal properties is [[prototype]]

// 3  Accessor property 
// we define Accessor property with help of get and set function 
// for each property we have get and set ( these tow function make one property )
 const ObjgetProperty = {
    _value:0,
    get name (){
        return "kanika"

    }
 };
 console.log("\n printing the object -> objgetProperty , it has only get function :");
 console.log(ObjgetProperty);

 console.log("\n printing -> accessing the accesor property like a normal one , with dot operator:")
console.log(ObjgetProperty.name);

const objgetSetProperty = {
    get age(){
        console.log(" we are inside get")
        return this.val

    },
    // set take excatly one value or argument 
    set age (agee){
        console.log("we are inside set ")
       
        this.val =agee;

    }
};
console.log(objgetSetProperty);

objgetSetProperty.age=24;
// in this only name property is visble 
console.log(objgetSetProperty.age);
// val is not visible still we are able to access it 
// this get and set can be used for hiding the property but if you know the name you can acess it 
console.log(objgetSetProperty.val);

// get and set function ka name ek property bn and ye kisi value ko set krne mai help krti hai4
///rough 
var obj ={
    get x(){
        return this.val;
    },
    set x(val){
        this.val=val
        
    }
}





