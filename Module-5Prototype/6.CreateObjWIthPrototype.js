const parent= {
    a:2,
    func:function getNimber(){
        console.log(this.a);

    }
};

const child =Object.create(parent);
child.func();
console.log("printing child",child);
console.log("printing child.a",child.a);
//example of overriding 
// we can override property and method
child.a=100;
console.log("print child again",child);
console.log("calling child.func()")
child.func();
console.log("calling parent.func()");
parent.func();
console.log("[[prototypte]] of parent ",Object.getPrototypeOf(parent));
console.log(".prototypte of parent",child.prototype);
console.log("[[prototypte]] of child",Object.getPrototypeOf(child));
console.log(".prototypte of child",child.prototype);



// how to protect a contruction -> so that it is never called without a new keyword 
function Person(Name,age){
    if(!new.target){
        throw new Error ('should use new');
    }
    this.name=Name 
    this.age=age
}
var person1 = new Person("kanika",24);
console.log(person1);
// set the prototye of the person
Person.prototype.allCapsAndAddSirname = function (sirname){
    this.name = this.name + sirname.toString();
    return this.name.toUpperCase();
}
person1.allCapsAndAddSirname("kala");
///Person.prototype.allCapsAndAddSirname(); -> this will get called 

console.log(person1);
console.log(".protype of function Person",Person.prototype);
console.log("[[prototype]] of person function" ,Object.getPrototypeOf(Person));
console.log("[[prototype]] of person1" ,Object.getPrototypeOf(person1));
console.log(".prototype of object person1", person1.prototype);

// 2 way to how to protect a contruction -> so that it is never called without a new keyword 
// using intance of 
function MyInfo (company,designation){
    if(!(this instanceof MyInfo))
    {
        throw new Error ('should use new in My Infor');
    }
    this.company=company;
    this.designation=designation;
}
//  MyInfo(); this will throw an error 



var x = new MyInfo("x","x");
console.log(x)
// 3 way is to use strict
// 4 thh way is to use ES6 Clasees