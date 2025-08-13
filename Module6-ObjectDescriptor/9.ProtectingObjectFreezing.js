'use strict'
const obj ={
    a:2,b:3
};

Object.freeze(obj);
// whem obejct is flroze we cant do CUD we can only read
console.log(obj.b);
console.log(Object.getOwnPropertyDescriptor(obj));
console.log("is object frozen",Object.isFrozen(obj));
console.log("is obejct sealed?",Object.isSealed(obj));
console.log("is object extensible?",Object.isExtensible(obj));
obj.c=2;
//does not work
delete obj.a;
//does not work
obj.a="updating it";
//does not work