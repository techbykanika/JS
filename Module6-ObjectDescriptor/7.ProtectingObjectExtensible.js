'use strict';
// 1. Extensible 
// Im this out of CRUD only 'C' is not allowed 
// Once we have made the objecti and it is not extensible it means thar we cannot add properties to it
const obj ={
    a:1,b:"kanika"
}
//Object.preventExtensions(objname) this makes the object non extensible
// below line wont through error as object is extensible which means we can add the prpetires to object 
obj.c=10;
console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.isExtensible(obj));
// below line will through error as object is non  extensible which means we cannot add the prpetires to object 
obj.c=15;
obj.d=15;




