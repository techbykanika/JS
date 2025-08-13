obj = {
    aa:"kanika",
    bb:3
}

function funcWithReturnPrimitive(){
    this.a=2;
    this.b=3
    return 3;
   

}
Object.setPrototypeOf(funcWithReturnPrimitive,obj);
objNew = new funcWithReturnPrimitive();
console.log(objNew);
console.log("prototype of funcWithReturnPrimitve")
console.log(funcWithReturnPrimitive.prototype);
console.log("proptype of objnew")
console.log(Object.getPrototypeOf(objNew));
function funcWithNoReturn (){
    this.a=10;
    this.b=20;
    var c=30;

}
objNew2= new funcWithNoReturn()
console.log("prototype of funcWithNoReturn")
console.log(funcWithNoReturn.prototype);
console.log("proptype of objnew2")
console.log(Object.getPrototypeOf(objNew2));
console.log(objNew2);
function funcWithReturnObject(){
    this.a=100;
    this.b=200;
    var c=300
   return {a:2} 
}
console.log("---------------------------------------------")
objNew3 = new funcWithReturnObject();
console.log(objNew3);

console.log("prototype of funcWithRetunrObject")
console.log(funcWithReturnObject.prototype);
console.log("proptype of objnew2")
console.log(Object.getPrototypeOf(objNew3));



console.log("---------------------------------------------------------------------------------------");
function Person (name,age){
    this.name=name;
    this.age=age;
}
console.log(Person.prototype);
person1 = new Person("kanika",24);
person2 = new Person("Nivedita",25);
Person.prototype.printName = function (){
    console.log(this.name.toUpperCase());
}

console.log("person1",person1);
person1.printName();

console.log(typeof(Person.prototype));
Object.setPrototypeOf(Person,obj);
console.log(Person.prototype);
console.log(Person.aa);
console.log(person1.aa);
console.log(person1.toString);



