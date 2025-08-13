function Parent(name,age){
    this.name=name,
    this.age=age
    this.funcArrow = ()=>{
        console.log("this is arrow func",this.age,this.name);
        return `${this.age} ${this.name}`;
    };
    this.funcNormal= function(){
        console.log("this is normalfunction");
    };
    this.x={
     xvar:this.age,
    }
    var notInherited=3

    
}
// sarhdul code 2 time 

var child = new Parent("father","61");
console.log(child.prototype)
//console.log(child.funcArrow)
console.log("calling funcarrow through child:", child.funcArrow());
//referenceOfFuncArrow = Parent.funcArrow; 
//console.log(referenceOfFuncArrow)
// console.log("printing child",child);
// console.log(Object.getPrototypeOf(child)==Parent.prototype);
// console.log(Object.getPrototypeOf(Object)==Parent.prototype);
// console.log(Object.getPrototypeOf(Object));//==
// console.log(Object.prototype);
// console.log(Parent.prototype);
//  console.log(Object.getPrototypeOf(child));
//  var x=Object.getPrototypeOf(child);
//  console.log( x);
//  console.log(typeof Parent.prototype)
// console.log(typeof child.prototype);

