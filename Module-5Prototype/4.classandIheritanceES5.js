'use strict';
function Person(name){
    this.name=name;
    
}
console.log(Person.prototype);
Person.prototype.printName = function(){
    console.log(this.name);
};
function Employee (name,id){
    Person.call(this,name)
    this.id=id;
}
Object.setPrototypeOf(Employee.prototype,Person.prototype);
Employee.prototype.printId= function(){
    console.log(this.id);
};
const e = new Employee('arfat',42);
e.printId();
e.printName();


//------------------------------------------------------------------------------------------------------------------
console.log("Rough");
// object inheriting object 
let parentobj1={
    a:2,
    b:3,
    func:function(){
        let c=this.b+2
        console.log("property func in parentobj1, value of c is :",c)
       
    }

};
let childobj ={
    d:5,
    e:6,
    funcc: function (){
        console.log("poperty inside childobj ",this.d,this.e);
    }

}
Object.setPrototypeOf(childobj,parentobj1);
parentobj1.func();
childobj.func();
childobj.funcc();
console.log(childobj.a);
console.log(Object.getPrototypeOf(childobj));
console.log("getprototypeOf-iternal propepty-Person function()",Object.getPrototypeOf(Person))
console.log("prototype object-function- Person",Person.prototype);
console.log("getprototypeOf-iternal propepty-Employee function()",Object.getPrototypeOf(Employee))
console.log("prototype object-function -Employee",Employee.prototype);
console.log("proptotype object of e " ,e.prototype);
console.log("getprototypeof -internal property- e",Object.getPrototypeOf(e));
console.log(Object.getPrototypeOf(e)==Object.getPrototypeOf(Employee));
console.log(Object.getPrototypeOf(e)==Employee.prototype);
console.log(Person.prototype == Object.getPrototypeOf(Employee));
console.log(Object.prototype == Object.getPrototypeOf(Person));


//doubt in protoytpe object 




console.log("prototype object of childobj",e.prototype);


