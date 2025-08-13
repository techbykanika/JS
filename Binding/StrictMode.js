'use strict';
function returnThis(){
    return this;

}
console.log("calling returnthis function");
console.log(returnThis());// with strict mode it gives undefined and without strict mode it gives 
// by default in strict mode the scope is undefined
// without strict mode scope is global

function printnum(){
     var x=2;
    console.log(x);
}
printnum();
console.log(x);
// in strict mode in need to define a indetifier with var or let else it will throw a refernce error below line thriws refernce error 
name1="kaniak";

