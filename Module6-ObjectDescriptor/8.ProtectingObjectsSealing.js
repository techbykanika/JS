'use strict';
const obj= {
    a:2,
    b:3
}
console.log(obj.a);
Object.seal(obj);// seals makes object configurable property flase
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.isSealed(obj)); // true becaue we have done this
console.log(Object.isExtensible(obj));// falese becuse seal makes object non extensible -> means we cant add new properties
obj.a="updated a";// this will work -> means when object is sealed we can update the value of property 
console.log(obj);
//cant do this it will throw error
//obj.c=3;
//does not work
//when object is seal configurable become false -> so we cant delete the property 
delete obj.a;
//CRUD => CD
// C => Extended 
// CD=> Seal
// CUD=> freeze