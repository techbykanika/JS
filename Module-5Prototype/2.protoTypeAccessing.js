const objectProtoType ={};
const object1 = Object.create(objectProtoType);
//--------------------------------------------------------------------------------
// Method
// we use getPrototypeof to get 
console.log(Object.getPrototypeOf(object1));
// this will give true
console.log(Object.getPrototypeOf(object1) ===objectProtoType);
//---------------------------------------------------------------------------------
// 2 Method
// this is similar to above method only coming from different doffrent objects
console.log(Reflect.getPrototypeOf(object1));
//----------------------------------------------------------------------------------
// 3 method 
console.log(objectProtoType.isPrototypeOf(object1));