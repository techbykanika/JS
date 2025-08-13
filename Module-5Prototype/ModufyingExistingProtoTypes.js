const obj ={
    
     getNumber(){
        return 2;

    }
};

const child ={};
Object.setPrototypeOf(child,obj);
console.log(child.getNumber());
console.log(Object.getPrototypeOf(child));
console.log(Object.get)
// if i set the protoptype of object as null thn it wont have any parent it is like prototypless object 
console.log(obj.toString);

Object.setPrototypeOf(obj,null);

console.log(obj.toString);
 // __proto_ dunder prototype this is depricsted and we dont use it anymore many browser does not support __proto__

