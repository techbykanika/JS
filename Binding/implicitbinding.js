// meomry context
// function foo: this is a function
// obj: this is a object

function foo(){// memory context value let = 12345
    console.log(this === global);// if this print true then next line will print undefined
    console.log(this.firstName);
}
const obj ={
    firstName:"kanika",
    refernceOfFoo:foo,// refernce of foo value is 12345
};
console.log("what is foo")
console.log(foo); // this will print the reference of foo
console.log("calling foo alone without object in this case 'this' is global")
console.log(foo())// here this is global


console.log("what is in obj")
console.log(obj);

console.log("what is obj.refernceOfFoo ")
console.log(obj.refernceOfFoo);
console.log("calling foo with imlicit binding or with a object or obj.refernceOfFoo")
obj.refernceOfFoo();
console.log("saving refernceoffoo in a variable and thn will be calling it")
refernceOfFooFromObj =obj.refernceOfFoo;// value of refernceOfFooFromObj is 12345
console.log(refernceOfFooFromObj());
console.log(" what is in refernceOfFooFromObj) ")
console.log(refernceOfFooFromObj);

foo();
// this of an function is decided by how the function is called
// if the function is called by an object then this is the object
// if the function is called by a variable then this is global

