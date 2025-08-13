// Ever property is made of property attribute or 4 descriptor
// Every property has 4 attribute or decsriptor ( [[value]],[[IEnumerbale]],[[Writable]],[[configurable]])
// All 4 descriptor are internal -> means we cant access them directly 
// we use internal API of JS to access decriptor of Porperty 
// Property attribute are building block of an object 
// If we have 2 key value pair in object than it means with each property we have 4 attribute or descriptor. In total 8 property
 const obj ={
    // name has 4 attribute or property descriptor
    name:"kanika",
    //age has 4 attribute or property descriptor
    age:24,
    func : function (){}
 };
 // to access descriptor or property attribute we use -
 // Object.getOwnPropertyDescriptor(nameofobject, nameOfOneOfKeyOfObject)
 // to acess all the propetries descriptor 
 // Object.getOwnPropertyDescriptors(nameofobject);
console.log( Object.getOwnPropertyDescriptor(obj,'age'));

console.log(Object.getOwnPropertyDescriptors(obj));